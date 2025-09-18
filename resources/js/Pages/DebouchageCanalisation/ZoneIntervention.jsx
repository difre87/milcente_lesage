import { Head } from "@inertiajs/react";
import ContactezNous from "../../Components/ContactezNous";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Testimonies from "../../Components/Testimonies";
import AboutUs from "../../Components/AboutUs";
import GlobalSEO from "../../Components/GlobalSEO";
import Breadcrumbs from "../../Components/Breadcrumbs";
import { seoData } from "../../types/data";
import { MapPin, Pin } from "lucide-react";

const ZoneIntervention = () => {
    // Récupération des données SEO
    const seoDataPage = seoData["debouchage-zone-intervention"];

    // Données pour les breadcrumbs
    const breadcrumbsData = [
        { name: "Accueil", url: "/" },
        { name: "Débouchage canalisation", url: "/debouchage-canalisation" },
        { name: "Zone d'intervention", url: "/debouchage-canalisation/zone-intervention" }
    ];

    return (
        <>
            {/* SEO Head */}
            <Head>
                <title>{seoDataPage.title}</title>
                <meta name="description" content={seoDataPage.description} />
                <meta name="keywords" content={seoDataPage.keywords} />
                <meta name="robots" content={seoDataPage.robots} />
                <link rel="canonical" href={seoDataPage.canonical} />

                {/* Open Graph */}
                <meta property="og:title" content={seoDataPage.title} />
                <meta property="og:description" content={seoDataPage.description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={seoDataPage.canonical} />
                <meta property="og:image" content={seoDataPage.ogImage} />
                <meta property="og:site_name" content="Milcent Lesage" />
                <meta property="og:locale" content="fr_FR" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={seoDataPage.title} />
                <meta name="twitter:description" content={seoDataPage.description} />
                <meta name="twitter:image" content={seoDataPage.ogImage} />

                {/* Données structurées */}
                <script type="application/ld+json">
                    {JSON.stringify(seoDataPage.structuredData)}
                </script>
            </Head>

            {/* GlobalSEO pour les données d'organisation */}
            <GlobalSEO />

            <Header isInsidePage={false} isProjectPage={true} />

            {/* Breadcrumbs */}
            <Breadcrumbs items={breadcrumbsData} />

            <main className="w-full relative md:top-10">
                <section className="w-full relative md:h-[450px] h-[350px] bg-[url('/public/assets/images/bg-zone-intervention.png')] bg-cover bg-center flex items-center justify-center">
                    <div className="bg-black/70 bg-opacity-50 p-8 rounded absolute left-0 right-0 top-0 bottom-0 flex flex-col justify-center items-center">

                    </div>
                </section>
                <section className="bg-white py-20 md:px-10 px-4">
                    <div className="max-w-screen-xl md:-mt-36 -mt-42 min-h-[600px] py-10 md:px-8 px-3 bg-white drop-shadow-sm rounded-2xl mx-auto relative overflow-hidden">
                        <div className="w-full grid md:grid-cols-3">
                            <div className="flex flex-col gap-4 col-span-1">
                                <h2 className="text-3xl font-semibold text-[#404040] md:leading-0">Nos zones d'intervention</h2>
                                <span className="text-[#00ADEF] text-xl">30km autour <b>d'Orléans</b></span>
                                <ul className="list-disc list-inside text-sm text-[#222021] font-light mt-2 flex flex-col gap-1">
                                    <li>Fleury-les-Aubrais</li>
                                    <li>Saint-Jean-de-la-Ruelle</li>
                                    <li>Saint-Jean-de-Braye</li>
                                    <li>Olivet</li>
                                    <li>Saran</li>
                                    <li>La Chapelle-Saint-Mesmin</li>
                                    <li>Saint-Denis-en-Val</li>
                                    <li>Ingré</li>
                                    <li>Chécy</li>
                                    <li>Meung-sur-Loire</li>
                                    <li>Beaugency (à la limite, ~30 km)</li>
                                    <li>Jargeau</li>
                                    <li>Sandillon</li>
                                    <li>Saint-Jean-le-Blanc</li>
                                    <li>Saint-Pryvé-Saint-Mesmin</li>
                                    <li>Châteauneuf-sur-Loire</li>
                                    <li>Boigny-sur-Bionne</li>
                                    <li>Semoy</li>
                                    <li>Chevilly</li>
                                    <li>Trainou</li>
                                    <li>Marcilly-en-Villette</li>
                                </ul>
                            </div>
                            <div className="col-span-2 md:flex hidden  items-center relative">
                                <div className=" py-2 absolute drop-shadow-xl bg-white rounded-full top-1/3 left-24 flex items-center justify-center gap-2 px-6">
                                    <MapPin className="text-black" />
                                    <h4 className="text-[#00ADEF] uppercase text-xl font-bold">Orléans</h4>
                                </div>
                                <img src="/assets/images/carte.png" width={600} height={300} alt="Technicien" />
                            </div>
                        </div>

                        <img src="/assets/images/technicien.png" alt="Carte des zones d'intervention" width={350} height={400} className="absolute -bottom-20 right-20 hidden md:block" />
                    </div>
                </section>
                <Testimonies />
                <ContactezNous />
                <AboutUs />
                <Footer />
            </main>

        </>
    );
}

export default ZoneIntervention;