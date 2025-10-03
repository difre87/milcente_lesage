<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class QuickEmailTestCommand extends Command
{
    protected $signature = 'test:quick-email';
    protected $description = 'Quick test of email configuration';

    public function handle()
    {
        $this->info('Configuration actuelle:');
        $this->info('MAIL_MAILER: ' . config('mail.default'));
        $this->info('MAIL_HOST: ' . config('mail.mailers.smtp.host'));
        $this->info('MAIL_PORT: ' . config('mail.mailers.smtp.port'));
        $this->info('MAIL_ENCRYPTION: ' . (config('mail.mailers.smtp.encryption') ?? 'none'));
        
        try {
            // Test simple avec Mail::raw
            $this->info('Test d\'envoi simple...');
            
            Mail::raw('Test email depuis Milcent Lesage', function ($message) {
                $message->to(env('CONTACT_EMAIL', 'milcentlesage@performancesbusiness.com'))
                       ->subject('Test Email - Milcent Lesage');
            });
            
            $this->info('✅ Email de test envoyé avec succès !');
            
        } catch (\Exception $e) {
            $this->error('❌ Erreur: ' . $e->getMessage());
            
            // Suggestions spécifiques pour OVH
            $this->warn('💡 Pour OVH, essayez ces configurations:');
            $this->warn('- MAIL_HOST=ssl0.ovh.net avec MAIL_PORT=465 et MAIL_ENCRYPTION=ssl');
            $this->warn('- Ou MAIL_HOST=pro1.mail.ovh.net avec MAIL_PORT=587 et MAIL_ENCRYPTION=tls');
            $this->warn('- Vérifiez que l\'email est activé dans votre panneau OVH');
            
            return 1;
        }
        
        return 0;
    }
}