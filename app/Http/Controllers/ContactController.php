<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Mail;
use App\Http\Requests\ContactFormRequest;
use App\Mail\ContactFormMail;

class ContactController extends Controller
{
    public function send(ContactFormRequest $request)
    {

        try {
            // Préparation des données pour l'email
            $contactData = [
                'nom' => $request->validated('nom'),
                'prenom' => $request->validated('prenom'),
                'email' => $request->validated('email'),
                'telephone' => $request->validated('telephone'),
                'message' => $request->validated('message'),
                'date' => now()->format('d/m/Y à H:i'),
            ];

            // Envoi de l'email
            Mail::to(env('CONTACT_EMAIL', 'contact@milcent-lesage.fr'))
                ->send(new ContactFormMail($contactData));

            return back()->with('success', 'Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.');

        } catch (\Exception $e) {
            \Log::error('Erreur lors de l\'envoi du formulaire de contact: ' . $e->getMessage());
            return back()->with('error', 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer plus tard.');
        }
    }
}