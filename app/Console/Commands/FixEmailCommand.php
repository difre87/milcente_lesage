<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormMail;

class FixEmailCommand extends Command
{
    protected $signature = 'email:fix {--test-mode=false}';
    protected $description = 'Diagnostic et réparation complète des emails';

    public function handle()
    {
        $this->info('🔧 DIAGNOSTIC ET RÉPARATION EMAIL - MILCENT LESAGE');
        $this->newLine();
        
        // 1. Diagnostic de la configuration actuelle
        $this->diagnoseCurrentConfig();
        
        // 2. Test de connectivité réseau
        $this->testNetworkConnectivity();
        
        // 3. Test des différentes configurations
        $this->testEmailConfigurations();
        
        // 4. Solution recommandée
        $this->recommendSolution();
        
        return 0;
    }
    
    private function diagnoseCurrentConfig()
    {
        $this->info('📊 CONFIGURATION ACTUELLE');
        
        $config = [
            'MAILER' => config('mail.default'),
            'HOST' => config('mail.mailers.smtp.host'),
            'PORT' => config('mail.mailers.smtp.port'),
            'USERNAME' => config('mail.mailers.smtp.username'),
            'ENCRYPTION' => config('mail.mailers.smtp.encryption'),
            'FROM_ADDRESS' => config('mail.from.address'),
            'CONTACT_EMAIL' => env('CONTACT_EMAIL'),
        ];
        
        $this->table(['Paramètre', 'Valeur'], collect($config)->map(fn($v, $k) => [$k, $v])->values());
        $this->newLine();
    }
    
    private function testNetworkConnectivity()
    {
        $this->info('🌐 TEST DE CONNECTIVITÉ RÉSEAU');
        
        $hosts = [
            'smtp.mail.ovh.net:587',
            'smtp.gmail.com:587',
            'ssl0.ovh.net:465'
        ];
        
        foreach ($hosts as $host) {
            [$server, $port] = explode(':', $host);
            $connection = @fsockopen($server, $port, $errno, $errstr, 5);
            
            if ($connection) {
                $this->info("✅ $host - Connexion OK");
                fclose($connection);
            } else {
                $this->warn("❌ $host - Connexion échouée: $errstr");
            }
        }
        $this->newLine();
    }
    
    private function testEmailConfigurations()
    {
        $this->info('📧 TEST DES CONFIGURATIONS EMAIL');
        
        // Configuration actuelle
        $this->testCurrentConfig();
        
        // Gmail (solution de secours)
        $this->suggestGmailConfig();
    }
    
    private function testCurrentConfig()
    {
        $this->info('Test de la configuration actuelle...');
        
        try {
            $contactData = [
                'nom' => 'Test',
                'prenom' => 'Système',
                'email' => 'test@milcent-lesage.fr',
                'telephone' => '02 38 12 34 56',
                'message' => 'Email de test automatique depuis le système - ' . now(),
                'date' => now()->format('d/m/Y à H:i'),
            ];
            
            Mail::to(env('CONTACT_EMAIL', 'adjeifrederic@gmail.com'))
                ->send(new ContactFormMail($contactData));
                
            $this->info('✅ Email envoyé avec succès !');
            $this->info('📧 Vérifiez votre boîte mail : ' . env('CONTACT_EMAIL'));
            
        } catch (\Exception $e) {
            $this->error('❌ Échec de l\'envoi : ' . $e->getMessage());
            
            // Analyse de l'erreur
            if (str_contains($e->getMessage(), 'Authentication failed')) {
                $this->warn('🔑 Problème d\'authentification - Vérifiez username/password');
            } elseif (str_contains($e->getMessage(), 'Connection refused')) {
                $this->warn('🌐 Problème de connexion - Vérifiez host/port');
            } elseif (str_contains($e->getMessage(), 'timed out')) {
                $this->warn('⏰ Timeout - Serveur lent ou firewall');
            }
        }
        $this->newLine();
    }
    
    private function suggestGmailConfig()
    {
        $this->warn('💡 SOLUTION DE SECOURS RECOMMANDÉE - GMAIL');
        $this->info('Pour un fonctionnement immédiat, utilisez Gmail :');
        $this->newLine();
        
        $this->info('1. Configuration .env pour Gmail :');
        $this->line('MAIL_MAILER=smtp');
        $this->line('MAIL_HOST=smtp.gmail.com');
        $this->line('MAIL_PORT=587');
        $this->line('MAIL_USERNAME=adjeifrederic@gmail.com');
        $this->line('MAIL_PASSWORD=mot_de_passe_application_gmail');
        $this->line('MAIL_ENCRYPTION=tls');
        $this->line('MAIL_FROM_ADDRESS="adjeifrederic@gmail.com"');
        $this->line('MAIL_FROM_NAME="Milcent Lesage - Contact"');
        $this->newLine();
        
        $this->info('2. Générer le mot de passe Gmail :');
        $this->line('- Compte Google > Sécurité > Authentification à 2 facteurs (activer)');
        $this->line('- Sécurité > Mots de passe des applications > Générer');
        $this->line('- Copier le mot de passe de 16 caractères');
    }
    
    private function recommendSolution()
    {
        $this->info('🎯 PLAN D\'ACTION RECOMMANDÉ');
        
        $this->info('SOLUTION IMMÉDIATE (5 minutes) :');
        $this->line('1. php artisan email:setup-gmail');
        $this->line('2. Suivre les instructions Gmail');
        $this->line('3. Tester avec : php artisan email:test-send');
        $this->newLine();
        
        $this->info('SOLUTION À LONG TERME :');
        $this->line('1. Vérifier la configuration OVH dans le panneau client');
        $this->line('2. Tester les identifiants avec un client email (Thunderbird)');
        $this->line('3. Contacter le support technique si nécessaire');
        $this->newLine();
        
        $this->warn('⚠️  En attendant, le formulaire fonctionne avec Gmail !');
    }
}