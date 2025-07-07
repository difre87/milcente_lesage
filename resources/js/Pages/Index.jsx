
import { Head } from '@inertiajs/react';
import Header from '../Components/Header';
import Slider from '../Components/Slider';
import AboutUs from '../Components/AboutUs';
import OurService from '../Components/OurSercives';
import Service from '../Components/Service';
import Testimonies from '../Components/Testimonies';
import ContactezNous from '../Components/ContactezNous';
import Partner from '../Components/Partner';
import Footer from '../Components/Footer';
import GlobalSEO from '../Components/GlobalSEO';
import { seoData } from '../types/data';

export default function Index({ laravelVersion, phpVersion }) {
    const seoInfo = seoData.index;

    return (
        <>
            <Head>
                {/* SEO Principal */}
                <title>{seoInfo.title}</title>
                <meta name="description" content={seoInfo.description} />
                <meta name="keywords" content={seoInfo.keywords} />

                {/* Open Graph */}
                <meta property="og:title" content={seoInfo.title} />
                <meta property="og:description" content={seoInfo.description} />
                <meta property="og:image" content={seoInfo.ogImage} />
                <meta property="og:url" content={seoInfo.canonical} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Milcent Lesage" />
                <meta property="og:locale" content="fr_FR" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={seoInfo.title} />
                <meta name="twitter:description" content={seoInfo.description} />
                <meta name="twitter:image" content={seoInfo.ogImage} />

                {/* Canonical URL */}
                <link rel="canonical" href={seoInfo.canonical} />

                {/* Données structurées JSON-LD */}
                <script type="application/ld+json">
                    {JSON.stringify(seoInfo.structuredData)}
                </script>

                {/* Robots */}
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />

                {/* Localisation */}
                <meta name="geo.region" content="FR-45" />
                <meta name="geo.placename" content="Orléans" />
                <meta name="geo.position" content="47.9029;1.9039" />
                <meta name="ICBM" content="47.9029, 1.9039" />

                {/* Informations supplémentaires */}
                <meta name="author" content="Milcent Lesage" />
                <meta name="copyright" content="Milcent Lesage" />
                <meta name="language" content="fr" />
                <meta name="revisit-after" content="7 days" />

                {/* Préférences de navigation */}
                <meta name="theme-color" content="#00ADEF" />
                <meta name="msapplication-TileColor" content="#00ADEF" />

                {/* Schema Organization global */}
                <GlobalSEO />
            </Head>
            <Header isPage={true} />
            <main className='relative top-14'>
                <Slider />
                <AboutUs />
                <OurService />
                <Service />
                <Testimonies />
                <ContactezNous />
                <Partner />
                <Footer />
            </main>

        </>
    );
}
