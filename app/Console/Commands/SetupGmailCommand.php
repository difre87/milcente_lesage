<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class SetupGmailCommand extends Command
{
    protected $signature = 'email:setup-gmail';
    protected $description = 'Configuration rapide de Gmail pour les emails';

    public function handle()
    {
        $this->info('📧 CONFIGURATION GMAIL POUR MILCENT LESAGE');
        $this->newLine();
        
        // Étape 1: Vérification
        $this->info('Étape 1/3 : Vérification de votre compte Gmail');
        $email = $this->ask('Quelle est votre adresse Gmail ?', 'adjeifrederic@gmail.com');
        
        // Étape 2: Instructions pour le mot de passe
        $this->newLine();
        $this->info('Étape 2/3 : Génération du mot de passe d\'application');
        $this->warn('IMPORTANT: Vous devez générer un mot de passe d\'application Gmail');
        $this->newLine();
        
        $this->info('Instructions :');
        $this->line('1. Allez sur https://myaccount.google.com/security');
        $this->line('2. Activez l\'authentification à 2 facteurs (obligatoire)');
        $this->line('3. Recherchez "Mots de passe des applications"');
        $this->line('4. Sélectionnez "Mail" puis "Autre (nom personnalisé)"');
        $this->line('5. Tapez "Milcent Lesage Website"');
        $this->line('6. Copiez le mot de passe de 16 caractères généré');
        $this->newLine();
        
        if (!$this->confirm('Avez-vous généré le mot de passe d\'application ?')) {
            $this->warn('Revenez quand vous aurez généré le mot de passe !');
            return 1;
        }
        
        $password = $this->secret('Collez le mot de passe d\'application Gmail (16 caractères)');
        
        if (strlen($password) !== 16) {
            $this->error('Le mot de passe doit faire exactement 16 caractères !');
            return 1;
        }
        
        // Étape 3: Mise à jour du .env
        $this->newLine();
        $this->info('Étape 3/3 : Configuration automatique');
        
        $envPath = base_path('.env');
        $envContent = file_get_contents($envPath);
        
        // Remplacement des variables
        $replacements = [
            '/MAIL_MAILER=.*/m' => 'MAIL_MAILER=smtp',
            '/MAIL_HOST=.*/m' => 'MAIL_HOST=smtp.gmail.com',
            '/MAIL_PORT=.*/m' => 'MAIL_PORT=587',
            '/MAIL_USERNAME=.*/m' => "MAIL_USERNAME=$email",
            '/MAIL_PASSWORD=.*/m' => "MAIL_PASSWORD=$password",
            '/MAIL_ENCRYPTION=.*/m' => 'MAIL_ENCRYPTION=tls',
            '/MAIL_FROM_ADDRESS=.*/m' => "MAIL_FROM_ADDRESS=\"$email\"",
            '/MAIL_FROM_NAME=.*/m' => 'MAIL_FROM_NAME="Milcent Lesage - Contact"',
        ];
        
        foreach ($replacements as $pattern => $replacement) {
            $envContent = preg_replace($pattern, $replacement, $envContent);
        }
        
        file_put_contents($envPath, $envContent);
        
        $this->info('✅ Configuration Gmail mise à jour dans .env');
        
        // Test automatique
        $this->newLine();
        $this->info('Test automatique...');
        $this->call('config:cache');
        $this->call('email:test-send');
        
        $this->newLine();
        $this->info('🎉 Configuration Gmail terminée !');
        $this->info('📧 Les emails du formulaire seront maintenant envoyés via Gmail');
        
        return 0;
    }
}