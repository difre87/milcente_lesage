<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormMail;

class TestEmailCommand extends Command
{
    protected $signature = 'test:email {email? : Email address to send test to}';
    protected $description = 'Test email configuration by sending a test email';

    public function handle()
    {
        $email = $this->argument('email') ?? env('CONTACT_EMAIL', 'test@example.com');
        
        $this->info('Testing email configuration...');
        $this->info('MAIL_MAILER: ' . config('mail.default'));
        $this->info('MAIL_HOST: ' . config('mail.mailers.smtp.host'));
        $this->info('MAIL_PORT: ' . config('mail.mailers.smtp.port'));
        $this->info('MAIL_USERNAME: ' . config('mail.mailers.smtp.username'));
        $this->info('MAIL_ENCRYPTION: ' . config('mail.mailers.smtp.timeout'));
        $this->info('FROM ADDRESS: ' . config('mail.from.address'));
        $this->info('TO ADDRESS: ' . $email);
        
        try {
            // Données de test
            $contactData = [
                'nom' => 'Test',
                'prenom' => 'Utilisateur',
                'email' => 'test@example.com',
                'telephone' => '01 23 45 67 89',
                'message' => 'Ceci est un email de test envoyé depuis la commande artisan.',
                'date' => now()->format('d/m/Y à H:i'),
            ];
            
            $this->info('Sending test email...');
            
            Mail::to($email)->send(new ContactFormMail($contactData));
            
            $this->info('✅ Test email sent successfully to: ' . $email);
            
        } catch (\Exception $e) {
            $this->error('❌ Failed to send test email: ' . $e->getMessage());
            
            if (str_contains($e->getMessage(), 'Authentication failed')) {
                $this->warn('💡 Suggestions pour résoudre l\'erreur d\'authentification:');
                $this->warn('1. Vérifiez que le nom d\'utilisateur et le mot de passe sont corrects');
                $this->warn('2. Vérifiez que l\'authentification est activée sur votre compte OVH');
                $this->warn('3. Essayez d\'utiliser l\'adresse email complète comme nom d\'utilisateur');
                $this->warn('4. Vérifiez que le port et l\'encryption sont corrects pour OVH');
            }
            
            return 1;
        }
        
        return 0;
    }
}