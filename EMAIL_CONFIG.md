# Configuration de l'envoi d'email

Le formulaire de contact envoie directement les emails via SMTP, sans service tiers.

## Configuration

1. Créez un fichier `.env.local` à la racine du projet
2. Ajoutez les variables suivantes :

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre-email@gmail.com
SMTP_PASS=votre-mot-de-passe-app
SMTP_FROM=votre-email@gmail.com
```

## Configuration Gmail

1. Activez la validation en 2 étapes sur votre compte Google
2. Allez dans "Sécurité" > "Mots de passe des applications"
3. Générez un nouveau mot de passe d'application
4. Utilisez ce mot de passe dans `SMTP_PASS`

## Configuration Outlook

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=votre-email@outlook.com
SMTP_PASS=votre-mot-de-passe
SMTP_FROM=votre-email@outlook.com
```

## Configuration autre serveur SMTP

Remplacez simplement les valeurs par celles de votre fournisseur d'email.

## Note

L'email sera envoyé à `lome@strivehawk.com` (configuré dans `src/app/api/contact/route.ts`).

