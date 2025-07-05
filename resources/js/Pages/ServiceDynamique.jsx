import { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import Header from '../Components/Header';
import Testimonies from '../Components/Testimonies';
import ContactezNous from '../Components/ContactezNous';
import OurService from '../Components/OurSercives';
import ASavoir from '../Components/Apropos/ASavoir';
import Footer from '../Components/Footer';
import { menus, dataPageContent, subServiceContent } from '../types/data';

const ServiceDynamique = () => {
    const { props } = usePage();
    const [pageData, setPageData] = useState(null);
    const [parentService, setParentService] = useState(null);
    const [pageContent, setPageContent] = useState(null);
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
                } else {
                    setNotFound(true);
                }
            } else {
                // Page principale du service
                setPageData(serviceMenu);
                // Récupérer le contenu pour le service principal
                setPageContent(dataPageContent[service] || null);
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
            <Header isInsidePage={false} />

            {/* Content Section */}
            {pageContent && pageContent[0]?.data && (
                <section className="relative top-24 bg-white">
                    <div className="max-w-screen-xl w-full mx-auto ">
                        {pageContent[0].data.map((contentItem, index) => (
                            <motion.div
                                key={contentItem.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`mb-16 py-20 ${index % 2 === 1 ? 'lg:flex-row-reverse bg-[#F9F9FF]' : ''} lg:flex items-center gap-12`}
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
                                        className="text-gray-600 leading-relaxed space-y-4 text-justify"
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
                                                className="w-full h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            <Testimonies />
            <ContactezNous />
            <OurService />
            <ASavoir />
            <Footer />
        </>
    );
}

export default ServiceDynamique;
