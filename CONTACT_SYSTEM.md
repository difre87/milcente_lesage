# Système de Contact - Milcent Lesage

## 📧 Fonctionnalités

Le système de contact de Milcent Lesage permet aux visiteurs du site web d'envoyer des messages directement via un formulaire. Les messages sont envoyés par email à l'adresse configurée.

## 🔧 Configuration

### Variables d'environnement

Dans votre fichier `.env`, configurez les variables suivantes :

```env
# Configuration mail (exemple avec Gmail)
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=votre-email@gmail.com
MAIL_PASSWORD=votre-mot-de-passe-app
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=votre-email@gmail.com
MAIL_FROM_NAME="Milcent Lesage"

# Email de contact pour recevoir les messages
CONTACT_EMAIL="contact@milcent-lesage.fr"
```

### Configuration pour la production

Pour la production, nous recommandons d'utiliser un service d'email comme :
- **Mailgun** : `MAIL_MAILER=mailgun`
- **SendGrid** : `MAIL_MAILER=smtp` avec les paramètres SendGrid
- **Amazon SES** : `MAIL_MAILER=ses`

## 📝 Validation des données

Le formulaire valide les champs suivants :

- **Nom** : Obligatoire, lettres uniquement, max 255 caractères
- **Prénom** : Obligatoire, lettres uniquement, max 255 caractères  
- **Email** : Obligatoire, format email valide, max 255 caractères
- **Téléphone** : Obligatoire, 10-20 caractères
- **Message** : Obligatoire, 10-2000 caractères

## 🚀 Routes

```php
// Afficher le formulaire de contact
GET /contact

// Traiter l'envoi du formulaire
POST /contact
```

## 📁 Structure des fichiers

```
app/
├── Http/
│   ├── Controllers/
│   │   └── ContactController.php      # Contrôleur principal
│   └── Requests/
│       └── ContactFormRequest.php     # Validation des données
├── Mail/
│   └── ContactFormMail.php           # Classe Mailable
resources/
├── js/Pages/
│   └── Contact.jsx                   # Interface utilisateur React
└── views/emails/
    └── contact-form.blade.php        # Template email HTML
```

## 💻 Utilisation côté React

Le composant React utilise Inertia.js pour gérer le formulaire :

```jsx
import { useForm } from '@inertiajs/react';

const { data, setData, post, processing, errors } = useForm({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    message: ''
});

const handleSubmit = (e) => {
    e.preventDefault();
    post(route('contact.send'), {
        onSuccess: () => {
            reset();
            // Afficher message de succès
        }
    });
};
```

## ✅ Tests

Les tests couvrent :
- Validation des champs obligatoires
- Validation des formats (email, téléphone)
- Validation des longueurs de message
- Envoi d'email avec données valides

Lancer les tests :
```bash
php artisan test tests/Feature/ContactFormTest.php
```

## 🎨 Personnalisation de l'email

Le template d'email se trouve dans `resources/views/emails/contact-form.blade.php`. Vous pouvez :
- Modifier le design avec du CSS inline
- Changer les couleurs (actuellement #00ADEF pour le bleu Milcent Lesage)
- Ajouter le logo de l'entreprise
- Personnaliser la structure

## 📱 Responsive

Le formulaire est entièrement responsive avec :
- Grille adaptative sur desktop (2 colonnes)
- Layout empilé sur mobile
- Validation en temps réel
- Messages d'erreur contextuels

## 🔐 Sécurité

- Protection CSRF automatique avec Inertia.js
- Validation côté serveur stricte
- Échappement automatique des données dans l'email
- Limitation de la taille des messages

## 📊 Logs

En cas d'erreur d'envoi, les logs sont enregistrés dans `storage/logs/laravel.log`.

## ⚡ Performance

- Envoi asynchrone possible avec les queues Laravel
- Validation côté client pour réduire les requêtes serveur
- Cache des validations

Pour activer les queues :
```env
QUEUE_CONNECTION=database
```

Puis traiter les emails en arrière-plan :
```bash
php artisan queue:work
```