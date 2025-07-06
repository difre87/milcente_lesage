<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SitemapController extends Controller
{
    public function index()
    {
        // URLs des services et sous-services
        $urls = [
            // Pages principales
            ['url' => '/', 'priority' => '1.0', 'changefreq' => 'daily'],
            ['url' => '/apropos', 'priority' => '0.9', 'changefreq' => 'monthly'],
            ['url' => '/contact', 'priority' => '0.9', 'changefreq' => 'monthly'],

            // Services principaux
            ['url' => '/plomberie', 'priority' => '0.9', 'changefreq' => 'weekly'],
            ['url' => '/chauffage', 'priority' => '0.9', 'changefreq' => 'weekly'],
            ['url' => '/salle-de-bain', 'priority' => '0.9', 'changefreq' => 'weekly'],
            ['url' => '/climatisation', 'priority' => '0.9', 'changefreq' => 'weekly'],

            // Sous-services plomberie
            ['url' => '/plomberie/installation', 'priority' => '0.8', 'changefreq' => 'weekly'],
            ['url' => '/plomberie/entretien-et-depannage', 'priority' => '0.8', 'changefreq' => 'weekly'],

            // Sous-services chauffage
            ['url' => '/chauffage/chaudiere-a-condensation', 'priority' => '0.8', 'changefreq' => 'weekly'],
            ['url' => '/chauffage/chaudiere-a-gaz', 'priority' => '0.8', 'changefreq' => 'weekly'],
            ['url' => '/chauffage/chaudiere-a-fioul', 'priority' => '0.8', 'changefreq' => 'weekly'],
            ['url' => '/chauffage/chaudiere-a-eau', 'priority' => '0.8', 'changefreq' => 'weekly'],
            ['url' => '/chauffage/entretien', 'priority' => '0.8', 'changefreq' => 'weekly'],

            // Sous-services salle de bain
            ['url' => '/salle-de-bain/creation-cle-en-main', 'priority' => '0.8', 'changefreq' => 'weekly'],
            ['url' => '/salle-de-bain/pmr', 'priority' => '0.8', 'changefreq' => 'weekly'],

            // Sous-services climatisation
            ['url' => '/climatisation/climatisation-reversible', 'priority' => '0.8', 'changefreq' => 'weekly'],
            ['url' => '/climatisation/pompe-a-chaleur', 'priority' => '0.8', 'changefreq' => 'weekly'],
        ];

        $sitemap = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
        $sitemap .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";

        foreach ($urls as $url) {
            $sitemap .= '  <url>' . "\n";
            $sitemap .= '    <loc>https://milcentlesage.fr' . $url['url'] . '</loc>' . "\n";
            $sitemap .= '    <lastmod>' . date('Y-m-d') . '</lastmod>' . "\n";
            $sitemap .= '    <changefreq>' . $url['changefreq'] . '</changefreq>' . "\n";
            $sitemap .= '    <priority>' . $url['priority'] . '</priority>' . "\n";
            $sitemap .= '  </url>' . "\n";
        }

        $sitemap .= '</urlset>';

        return response($sitemap, 200)
            ->header('Content-Type', 'application/xml');
    }
}
