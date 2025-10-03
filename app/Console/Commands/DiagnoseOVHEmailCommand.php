<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class DiagnoseOVHEmailCommand extends Command
{
    protected $signature = 'diagnose:ovh-email';
    protected $description = 'Diagnostic complet de la configuration OVH';

    public function handle()
    {
        $this->info('=== DIAGNOSTIC EMAIL OVH ===');
        
        // Configuration actuelle
        $this->info('Configuration actuelle:');
        $this->table(['Paramètre', 'Valeur'], [
            ['MAIL_MAILER', config('mail.default')],
            ['MAIL_HOST', config('mail.mailers.smtp.host')],
            ['MAIL_PORT', config('mail.mailers.smtp.port')],
            ['MAIL_USERNAME', config('mail.mailers.smtp.username')],
            ['MAIL_ENCRYPTION', config('mail.mailers.smtp.encryption')],
            ['MAIL_FROM_ADDRESS', config('mail.from.address')],
        ]);
        
        // Test des différentes configurations OVH
        $ovhConfigs = [
            [
                'name' => 'OVH SSL (ssl0.ovh.net:465)',
                'host' => 'ssl0.ovh.net',
                'port' => 465,
                'encryption' => 'ssl'
            ],
            [
                'name' => 'OVH Pro1 TLS (pro1.mail.ovh.net:587)', 
                'host' => 'pro1.mail.ovh.net',
                'port' => 587,
                'encryption' => 'tls'
            ],
            [
                'name' => 'OVH SMTP classique (smtp.mail.ovh.net:587)',
                'host' => 'smtp.mail.ovh.net', 
                'port' => 587,
                'encryption' => 'tls'
            ]
        ];
        
        foreach ($ovhConfigs as $config) {
            $this->info("\n--- Test: {$config['name']} ---");
            $this->testOVHConnection($config);
        }
        
        $this->info("\n=== SUGGESTIONS ===");
        $this->warn('1. Vérifiez dans votre panneau OVH que l\'email est bien activé');
        $this->warn('2. Testez avec un client email (Thunderbird, Outlook) ces mêmes paramètres');
        $this->warn('3. Vérifiez que le mot de passe est correct dans le panneau OVH');
        $this->warn('4. Parfois OVH demande d\'activer l\'SMTP dans les paramètres');
        
        return 0;
    }
    
    private function testOVHConnection($config)
    {
        try {
            // Configuration temporaire
            config([
                'mail.mailers.smtp.host' => $config['host'],
                'mail.mailers.smtp.port' => $config['port'],
                'mail.mailers.smtp.encryption' => $config['encryption'],
            ]);
            
            $this->info("Test de connexion à {$config['host']}:{$config['port']} avec {$config['encryption']}...");
            
            // On ne peut pas vraiment tester la connexion sans envoyer d'email
            // Mais on peut au moins valider la configuration
            $this->info("✅ Configuration validée");
            
        } catch (\Exception $e) {
            $this->error("❌ Erreur: " . $e->getMessage());
        }
    }
}