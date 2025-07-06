<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\SitemapController;

Route::get('/', function () {
    return Inertia::render('Index', [
        'laravelVersion' => app()->version(),
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/apropos', function () {
    return Inertia::render('APropos');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/debouchage-canalisation', function () {
    return Inertia::render('DebouchageCanalisation');
});

// Sitemap
Route::get('/sitemap.xml', [SitemapController::class, 'index']);

// Routes dynamiques pour les services et leurs sous-pages
Route::get('/{service}', function ($service) {
    // Liste des services valides (basée sur data.ts)
    $validServices = ['plomberie', 'chauffage', 'salle-de-bain', 'climatisation'];

    if (in_array($service, $validServices)) {
        return Inertia::render('ServiceDynamique', [
            'service' => $service,
            'slug' => null
        ]);
    }

    abort(404);
})->where('service', 'plomberie|chauffage|salle-de-bain|climatisation');

Route::get('/{service}/{slug}', function ($service, $slug) {
    // Liste des services valides
    $validServices = ['plomberie', 'chauffage', 'salle-de-bain', 'climatisation'];

    if (in_array($service, $validServices)) {
        return Inertia::render('ServiceDynamique', [
            'service' => $service,
            'slug' => $slug
        ]);
    }

    abort(404);
})->where('service', 'plomberie|chauffage|salle-de-bain|climatisation');
