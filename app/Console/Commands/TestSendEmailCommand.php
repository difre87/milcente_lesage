<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormMail;

class TestSendEmailCommand extends Command
{
    protected $signature = 'email:test-send {email?}';
    protected $description = 'Envoi d\'un email de test';

    public function handle()
    {
        $email = $this->argument('email') ?? env('CONTACT_EMAIL', 'adjeifrederic@gmail.com');
        
        $this->info("📧 Envoi d'un email de test vers : $email");
        $this->newLine();
        
        try {
            $contactData = [
                'nom' => 'Test',
                'prenom' => 'Système',
                'email' => 'test@milcent-lesage.fr',
                'telephone' => '02 38 12 34 56',
                'message' => "Email de test automatique du système Milcent Lesage\n\nEnvoyé le : " . now()->format('d/m/Y à H:i:s') . "\nConfiguration : " . config('mail.default') . "\nServeur : " . config('mail.mailers.smtp.host'),
                'date' => now()->format('d/m/Y à H:i'),
            ];
            
            Mail::to($email)->send(new ContactFormMail($contactData));
            
            $this->info('✅ Email de test envoyé avec succès !');
            $this->info("📧 Vérifiez votre boîte mail : $email");
            $this->info('📱 N\'oubliez pas de vérifier les spams/courriers indésirables');
            
        } catch (\Exception $e) {
            $this->error('❌ Échec de l\'envoi : ' . $e->getMessage());
            
            $this->newLine();
            $this->warn('💡 Solutions possibles :');
            
            if (str_contains($e->getMessage(), 'Authentication failed')) {
                $this->line('- Vérifiez le mot de passe d\'application Gmail');
                $this->line('- Assurez-vous que l\'authentification à 2 facteurs est activée');
            } elseif (str_contains($e->getMessage(), 'Connection refused')) {
                $this->line('- Vérifiez votre connexion internet');
                $this->line('- Le port 587 est-il bloqué par votre firewall ?');
            }
            
            $this->newLine();
            $this->info('Lancez : php artisan email:fix pour plus de diagnostic');
            
            return 1;
        }
        
        return 0;
    }
}