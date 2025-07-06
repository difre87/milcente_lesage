import React from 'react';

const GlobalSEO = () => {
    // Schema Organization global pour toutes les pages
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Milcent Lesage",
        "url": "https://milcentlesage.fr",
        "logo": "https://milcentlesage.fr/assets/images/logo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "02 38 70 12 34",
            "contactType": "customer service",
            "availableLanguage": "French"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Zone d'activité",
            "addressLocality": "Ingré",
            "addressRegion": "Loiret",
            "postalCode": "45140",
            "addressCountry": "FR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "47.9029",
            "longitude": "1.9039"
        },
        "openingHours": "Mo-Fr 08:00-18:00",
        "serviceArea": {
            "@type": "Place",
            "name": "Loiret, Orléans et environs"
        },
        "sameAs": [
            "https://www.facebook.com/milcentlesage",
            "https://maps.google.com/milcentlesage"
        ]
    };

    return (
        <script type="application/ld+json">
            {JSON.stringify(organizationSchema)}
        </script>
    );
};

export default GlobalSEO;
