<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nouveau message de contact</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #00ADEF 0%, #0088cc 100%);
            color: white;
            padding: 30px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: bold;
        }
        .content {
            padding: 30px 20px;
        }
        .field {
            margin-bottom: 20px;
            padding: 15px;
            background-color: #f9f9f9;
            border-radius: 8px;
            border-left: 4px solid #00ADEF;
        }
        .field-label {
            font-weight: bold;
            color: #00ADEF;
            margin-bottom: 5px;
            display: block;
        }
        .field-value {
            color: #333;
            font-size: 16px;
        }
        .message-field {
            background-color: #fff;
            border: 2px solid #00ADEF;
            border-radius: 8px;
            padding: 20px;
            margin-top: 20px;
        }
        .footer {
            background-color: #222021;
            color: white;
            padding: 20px;
            text-align: center;
            font-size: 14px;
        }
        .date-info {
            background-color: #e8f4fd;
            padding: 10px 15px;
            border-radius: 6px;
            font-size: 14px;
            color: #0088cc;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📧 Nouveau Message de Contact</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Site web Milcent Lesage</p>
        </div>

        <div class="content">
            <div class="date-info">
                <strong>Reçu le :</strong> {{ $contactData['date'] }}
            </div>

            <div class="field">
                <span class="field-label">👤 Nom complet :</span>
                <div class="field-value">{{ $contactData['prenom'] }} {{ $contactData['nom'] }}</div>
            </div>

            <div class="field">
                <span class="field-label">📧 Adresse email :</span>
                <div class="field-value">
                    <a href="mailto:{{ $contactData['email'] }}" style="color: #00ADEF; text-decoration: none;">
                        {{ $contactData['email'] }}
                    </a>
                </div>
            </div>

            <div class="field">
                <span class="field-label">📞 Numéro de téléphone :</span>
                <div class="field-value">
                    <a href="tel:{{ $contactData['telephone'] }}" style="color: #00ADEF; text-decoration: none;">
                        {{ $contactData['telephone'] }}
                    </a>
                </div>
            </div>

            <div class="message-field">
                <span class="field-label">💬 Message :</span>
                <div class="field-value" style="margin-top: 10px; white-space: pre-line;">{{ $contactData['message'] }}</div>
            </div>
        </div>

        <div class="footer">
            <p style="margin: 0;">
                <strong>Milcent Lesage</strong><br>
                Plomberie • Chauffage • Climatisation • Salle de bain<br>
                Orléans et région
            </p>
        </div>
    </div>
</body>
</html>