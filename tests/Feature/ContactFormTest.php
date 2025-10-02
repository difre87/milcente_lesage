<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;
use App\Mail\ContactFormMail;

class ContactFormTest extends TestCase
{
    use RefreshDatabase;

    public function test_contact_form_validation_rules()
    {
        // Test avec des données manquantes
        $response = $this->post('/contact', []);

        $response->assertSessionHasErrors(['nom', 'prenom', 'email', 'telephone', 'message']);
    }

    public function test_contact_form_with_invalid_email()
    {
        $response = $this->post('/contact', [
            'nom' => 'Dupont',
            'prenom' => 'Jean',
            'email' => 'email-invalide',
            'telephone' => '0123456789',
            'message' => 'Test message de contact avec suffisamment de caractères'
        ]);

        $response->assertSessionHasErrors(['email']);
    }

    public function test_contact_form_with_invalid_phone()
    {
        $response = $this->post('/contact', [
            'nom' => 'Dupont',
            'prenom' => 'Jean',
            'email' => 'jean.dupont@example.com',
            'telephone' => '123', // Numéro trop court
            'message' => 'Test message de contact avec plus de 10 caractères'
        ]);

        $response->assertSessionHasErrors(['telephone']);
    }

    public function test_contact_form_with_valid_data()
    {
        Mail::fake();

        $formData = [
            'nom' => 'Dupont',
            'prenom' => 'Jean',
            'email' => 'jean.dupont@example.com',
            'telephone' => '01 23 45 67 89',
            'message' => 'Bonjour, je souhaiterais avoir un devis pour des travaux de plomberie.'
        ];

        $response = $this->post('/contact', $formData);

        $response->assertRedirect();
        $response->assertSessionHas('success');

        // Vérifier que l'email a bien été envoyé
        Mail::assertSent(ContactFormMail::class, function ($mail) use ($formData) {
            return $mail->contactData['email'] === $formData['email'] &&
                   $mail->contactData['nom'] === $formData['nom'] &&
                   $mail->contactData['message'] === $formData['message'];
        });
    }

    public function test_contact_form_message_too_short()
    {
        $response = $this->post('/contact', [
            'nom' => 'Dupont',
            'prenom' => 'Jean',
            'email' => 'jean.dupont@example.com',
            'telephone' => '01 23 45 67 89',
            'message' => 'Court' // Moins de 10 caractères
        ]);

        $response->assertSessionHasErrors(['message']);
    }

    public function test_contact_form_with_special_characters_in_name()
    {
        $response = $this->post('/contact', [
            'nom' => 'Dupont123', // Contient des chiffres
            'prenom' => 'Jean',
            'email' => 'jean.dupont@example.com',
            'telephone' => '01 23 45 67 89',
            'message' => 'Test message de contact avec plus de 10 caractères'
        ]);

        $response->assertSessionHasErrors(['nom']);
    }
}