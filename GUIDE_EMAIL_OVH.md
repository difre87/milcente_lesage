# 🔧 Guide de résolution - Problème email OVH

## ❌ Problème actuel
Erreur d'authentification SMTP OVH : "535 5.7.1 Authentication failed"

## ✅ Solutions à essayer (dans l'ordre)

### 1. Vérification des identifiants OVH
- Connectez-vous à votre **panneau client OVH**
- Allez dans **Web Cloud > Emails**
- Vérifiez que l'adresse `milcentlesage@performancebusinesss.com` existe
- **Changez le mot de passe** depuis le panneau OVH
- Notez exactement le nouveau mot de passe

### 2. Configuration OVH recommandée
```env
MAIL_MAILER=smtp
MAIL_HOST=ssl0.ovh.net
MAIL_PORT=465
MAIL_USERNAME=milcentlesage@performancebusinesss.com
MAIL_PASSWORD=nouveau_mot_de_passe_ovh
MAIL_ENCRYPTION=ssl
MAIL_FROM_ADDRESS="milcentlesage@performancebusinesss.com"
MAIL_FROM_NAME="Milcent Lesage"
```

### 3. Configurations alternatives à tester

#### Option A: Serveur pro1
```env
MAIL_HOST=pro1.mail.ovh.net
MAIL_PORT=587
MAIL_ENCRYPTION=tls
```

#### Option B: Serveur smtp classique
```env
MAIL_HOST=smtp.mail.ovh.net
MAIL_PORT=587
MAIL_ENCRYPTION=tls
```

#### Option C: Port non-sécurisé (test uniquement)
```env
MAIL_HOST=pro1.mail.ovh.net
MAIL_PORT=25
MAIL_ENCRYPTION=null
```

### 4. Test avec un client email
Testez ces mêmes paramètres avec **Thunderbird** ou **Outlook** pour vérifier que les identifiants fonctionnent.

### 5. Vérifications panneau OVH
- **Activation SMTP** : Vérifiez que l'envoi SMTP est activé
- **Quota email** : Vérifiez que vous n'avez pas dépassé les limites
- **Statut du service** : Vérifiez qu'il n'y a pas d'incident OVH

### 6. Solution temporaire - Gmail (recommandée)
En attendant la résolution OVH, utilisez Gmail :

1. **Activez l'authentification à 2 facteurs** sur votre compte Google
2. **Générez un mot de passe d'application** :
   - Google Account > Sécurité > Mots de passe des applications
   - Sélectionnez "Mail" et "Autre"
   - Copiez le mot de passe généré (16 caractères)

3. **Configuration Gmail** :
```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=adjeifrederic@gmail.com
MAIL_PASSWORD=mot_de_passe_application_gmail
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS="adjeifrederic@gmail.com"
MAIL_FROM_NAME="Milcent Lesage - Contact"
```

## 🧪 Tests après chaque modification

```bash
# 1. Vider le cache de configuration
php artisan config:cache

# 2. Tester l'envoi
php artisan test:quick-email

# 3. Ou tester via le formulaire web
# Aller sur http://localhost:8001/contact
```

## 📝 Mode LOG temporaire
Si rien ne fonctionne, utilisez temporairement :
```env
MAIL_MAILER=log
```
Les emails apparaîtront dans `storage/logs/laravel.log`

## 📞 Support OVH
Si le problème persiste, contactez le **support OVH** avec ces informations :
- Adresse email : milcentlesage@performancebusinesss.com
- Serveurs testés : ssl0.ovh.net, pro1.mail.ovh.net, smtp.mail.ovh.net
- Erreur : 535 5.7.1 Authentication failed
- Ports testés : 25, 587, 465