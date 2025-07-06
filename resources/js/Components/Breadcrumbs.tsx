import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
    title: string;
    url?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
    // Données structurées pour les breadcrumbs
    const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.title,
            "item": item.url ? `https://milcentlesage.fr${item.url}` : undefined
        }))
    };

    return (
        <>
            {/* Données structurées JSON-LD pour les breadcrumbs */}
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbStructuredData)}
            </script>

            {/* Affichage visuel des breadcrumbs */}
            <nav className="bg-gray-50 py-4" aria-label="Breadcrumb">
                <div className="max-w-7xl mx-auto px-4">
                    <ol className="flex items-center space-x-2 text-sm">
                        <li>
                            <a
                                href="/"
                                className="flex items-center text-gray-500 hover:text-[#00ADEF] transition-colors"
                                aria-label="Accueil"
                            >
                                <Home className="w-4 h-4" />
                            </a>
                        </li>
                        {items.map((item, index) => (
                            <React.Fragment key={index}>
                                <li>
                                    <ChevronRight className="w-4 h-4 text-gray-400" />
                                </li>
                                <li>
                                    {item.url && index < items.length - 1 ? (
                                        <a
                                            href={item.url}
                                            className="text-gray-500 hover:text-[#00ADEF] transition-colors"
                                        >
                                            {item.title}
                                        </a>
                                    ) : (
                                        <span className="text-gray-900 font-medium">
                                            {item.title}
                                        </span>
                                    )}
                                </li>
                            </React.Fragment>
                        ))}
                    </ol>
                </div>
            </nav>
        </>
    );
};

export default Breadcrumbs;
