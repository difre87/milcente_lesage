import { useEffect, useState } from 'react';
import { usePage, Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import Header from '../Components/Header';
import Testimonies from '../Components/Testimonies';
import ContactezNous from '../Components/ContactezNous';
import OurService from '../Components/OurSercives';
import ASavoir from '../Components/Apropos/ASavoir';
import Footer from '../Components/Footer';
import Breadcrumbs from '../Components/Breadcrumbs';
import GlobalSEO from '../Components/GlobalSEO';
import { menus, dataPageContent, subServiceContent, seoData } from '../types/data';
import { CircleCheck } from 'lucide-react';

const ServiceDynamique = () => {
    const { props } = usePage();
    const [pageData, setPageData] = useState(null);
    const [parentService, setParentService] = useState(null);
    const [pageContent, setPageContent] = useState(null);
    const [seoInfo, setSeoInfo] = useState(null);
    const [breadcrumbs, setBreadcrumbs] = useState([]);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        // Récupérer le service et le slug depuis les props Laravel
        const { service, slug } = props;

        // Chercher le service parent dans les données
        const serviceMenu = menus.find(menu => {
            const menuSlug = menu.url.split('/').pop();
            return menuSlug === service;
        });

        if (serviceMenu) {
            setParentService(serviceMenu);

            if (slug && serviceMenu.submenus) {
                // Chercher la sous-page
                const foundPage = serviceMenu.submenus.find(submenu => {
                    const submenuSlug = submenu.url.split('/').pop();
                    return submenuSlug === slug;
                });

                if (foundPage) {
                    setPageData(foundPage);
                    // Récupérer le contenu pour la sous-page (utiliser le slug comme clé)
                    setPageContent(subServiceContent[slug] || dataPageContent[service] || null);
                    // Récupérer les données SEO pour la sous-page
                    setSeoInfo(seoData[slug] || seoData[service] || null);
                    // Générer les breadcrumbs pour la sous-page
                    setBreadcrumbs([
                        { title: serviceMenu.title, url: serviceMenu.url },
                        { title: foundPage.title }
                    ]);
                } else {
                    setNotFound(true);
                }
            } else {
                // Page principale du service
                setPageData(serviceMenu);
                // Récupérer le contenu pour le service principal
                setPageContent(dataPageContent[service] || null);
                // Récupérer les données SEO pour le service principal
                setSeoInfo(seoData[service] || null);
                // Générer les breadcrumbs pour le service principal
                setBreadcrumbs([
                    { title: serviceMenu.title }
                ]);
            }
        } else {
            setNotFound(true);
        }
    }, [props.service, props.slug]);

    if (notFound) {
        return (
            <>
                <Header isInsidePage={false} />
                <section className='w-full min-h-[600px] relative bg-white flex items-center justify-center'>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-red-500 mb-4">Page non trouvée</h1>
                        <p className="text-lg text-gray-600">La page demandée n'existe pas.</p>
                    </div>
                </section>
                <Footer />
            </>
        );
    }

    if (!pageData) {
        return (
            <>
                <Header isInsidePage={false} />
                <section className='w-full min-h-[600px] relative bg-white flex items-center justify-center'>
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#00ADEF] mx-auto"></div>
                        <p className="text-lg text-gray-600 mt-4">Chargement...</p>
                    </div>
                </section>
                <Footer />
            </>
        );
    }

    return (
        <>
            {/* SEO Head */}
            <Head>
                <title>{seoInfo?.title || 'Milcent Lesage - Services'}</title>
                <meta name="description" content={seoInfo?.description || 'Services de plomberie, chauffage et climatisation à Orléans'} />
                <meta name="keywords" content={seoInfo?.keywords || 'plomberie, chauffage, climatisation, orléans'} />

                {/* Open Graph */}
                <meta property="og:title" content={seoInfo?.title || 'Milcent Lesage - Services'} />
                <meta property="og:description" content={seoInfo?.description || 'Services de plomberie, chauffage et climatisation à Orléans'} />
                <meta property="og:image" content={seoInfo?.ogImage || '/assets/images/services/plomberie/1.png'} />
                <meta property="og:url" content={seoInfo?.canonical || window.location.href} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Milcent Lesage" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={seoInfo?.title || 'Milcent Lesage - Services'} />
                <meta name="twitter:description" content={seoInfo?.description || 'Services de plomberie, chauffage et climatisation à Orléans'} />
                <meta name="twitter:image" content={seoInfo?.ogImage || '/assets/images/services/plomberie/1.png'} />

                {/* Canonical URL */}
                <link rel="canonical" href={seoInfo?.canonical || window.location.href} />

                {/* Données structurées JSON-LD */}
                {seoInfo?.structuredData && (
                    <script type="application/ld+json">
                        {JSON.stringify(seoInfo.structuredData)}
                    </script>
                )}

                {/* Robots */}
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />

                {/* Localisation */}
                <meta name="geo.region" content="FR-45" />
                <meta name="geo.placename" content="Orléans" />
                <meta name="geo.position" content="47.9029;1.9039" />
                <meta name="ICBM" content="47.9029, 1.9039" />

                {/* Schema Organization global */}
                <GlobalSEO />
            </Head>

            <Header isInsidePage={false} />

            {/* Breadcrumbs */}
            <Breadcrumbs items={breadcrumbs} />

            {/* Content Section */}
            {pageContent && pageContent[0]?.data && (
                <section className="relative top-24 bg-white">
                    {pageContent[0].data.map((contentItem, index) => (
                        <div className={`w-full ${index % 2 === 1 ? 'lg:flex-row-reverse bg-[#F9F9FF]' : ''}`}>
                            <div className="max-w-screen-xl w-full mx-auto ">

                                <motion.div
                                    key={contentItem.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className={` px-10 ${index % 2 === 1 ? 'lg:flex-row-reverse py-10 bg-[#F9F9FF] mb-16' : 'py-10'} lg:flex  gap-24`}
                                >
                                    {/* Text Content */}
                                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                                        <motion.div
                                            initial={{ opacity: 0, x: -30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 0.3 }}
                                            viewport={{ once: true }}
                                            className="text-4xl font-bold text-[#00ADEF] mb-6"
                                            dangerouslySetInnerHTML={{ __html: contentItem.title }}
                                        />
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 0.5 }}
                                            viewport={{ once: true }}
                                            className="text-gray-600 text-sm leading-relaxed space-y-4 text-justify"
                                            dangerouslySetInnerHTML={{ __html: contentItem.description }}
                                        />
                                        {contentItem.buttonText && contentItem.buttonUrl && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.7 }}
                                                viewport={{ once: true }}
                                                className="mt-8"
                                            >
                                                <a
                                                    href={contentItem.buttonUrl}
                                                    className="inline-block bg-[#222021] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0080B8] transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                                                >
                                                    {contentItem.buttonText}
                                                </a>
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* Image */}
                                    {contentItem.image && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.8, delay: 0.4 }}
                                            viewport={{ once: true }}
                                            className="lg:w-1/2"
                                        >
                                            <div className="relative overflow-hidden rounded-xl group">
                                                <img
                                                    src={contentItem.image}
                                                    alt={contentItem.title}
                                                    className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${props.service === 'plomberie' && index === 0
                                                        ? 'h-96 lg:h-[700px]'
                                                        : 'h-80 lg:h-96'
                                                        }`}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.div>

                            </div>
                        </div>
                    ))}
                </section>
            )}
            <div className='w-full mt-20'></div>
            <Testimonies />
            <ContactezNous />
            {pageContent && pageContent[0]?.subdata && (

                <section className='w-full bg-[#00ADEF] min-h-[450px] relative pb-10'>
                    <div className='max-w-screen-xl w-full h-full mx-auto px-10'>
                        <div className='w-1/2'>
                            <div className='w-full flex flex-col '>
                                <div dangerouslySetInnerHTML={{ __html: pageContent[0].subdata[0]['title'] }}></div>
                                <div className='text-md flex flex-col gap-5 text-justify text-white' dangerouslySetInnerHTML={{ __html: pageContent[0].subdata[0]['description'] }}></div>
                            </div>
                            {
                                pageContent[0].subdata[0]['buttonUrl'] && (
                                    <a href={pageContent[0].subdata[0]['buttonUrl']} className="inline-block mt-5 bg-[#222021] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0080B8] transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                                        {pageContent[0].subdata[0]['buttonText']}
                                    </a>
                                )
                            }

                        </div>

                    </div>
                    {
                        pageContent[0].subdata[1] && (
                            <div className='w-[500px] min-h-[350px] drop-shadow-xl rounded-b-[20px] py-8 px-5 bg-white absolute top-0 right-[10%]'>
                                <div className='w-full flex items-center justify-between'>
                                    <div dangerouslySetInnerHTML={{ __html: pageContent[0].subdata[1]['title'] }}></div>
                                    <CircleCheck className='text-black w-24 h-24' />
                                </div>
                                <div className='text-sm flex flex-col gap-5 text-justify text-[#222021] mt-10' dangerouslySetInnerHTML={{ __html: pageContent[0].subdata[1]['description'] }}></div>
                                {
                                    pageContent[0].subdata[1]['buttonUrl'] && (
                                        <a href={pageContent[0].subdata[1]['buttonUrl']} className="inline-block mt-13  bg-[#222021] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0080B8] transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                                            {pageContent[0].subdata[1]['buttonText']}
                                        </a>
                                    )
                                }

                            </div>
                        )
                    }

                </section>
            )}
            <OurService />
            <ASavoir />
            <Footer />
        </>
    );
}

export default ServiceDynamique;
