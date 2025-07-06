import { Head } from '@inertiajs/react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Breadcrumbs from '../Components/Breadcrumbs';
import GlobalSEO from '../Components/GlobalSEO';
import { Link } from "@inertiajs/react";
import { ArrowRight } from 'lucide-react';
import { seoData } from '../types/data';

const Contact = () => {
    const seoInfo = seoData.contact;
    const breadcrumbs = [
        { title: "Contact" }
    ];

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

            <Header isInsidePage={false} />

            {/* Breadcrumbs */}
            <Breadcrumbs items={breadcrumbs} />
            <section className='w-full h-[1200px] relative flex justify-end'>
                <div className='w-3/5 h-full pr-3/5'>
                    <img src='/assets/images/bg-contact.jpg' alt='Contact Us' className='w-full h-full object-cover' />
                    <div className='absolute px-10 top-1/2 -translate-y-1/2 left-[30%] -translate-x-[30%] w-[550px] min-h-[700px] bg-[#00ADEF] rounded-2xl pt-10 pb-20'>
                        <h1 className='text-4xl font-light pt-10 text-[#222021]'>Une question ?<br /> <b className='font-bold'>Besoin d'un devis ?</b><br /> Ecrivez-nous !</h1>
                        <form className='flex flex-col mt-10'>
                            <div className='grid grid-cols-2 gap-5 mb-5'>
                                <div className='flex flex-col'>
                                    <label htmlFor="name" className='text-white text-sm font-medium pb-2'>Nom</label>
                                    <input type='text' placeholder='Nom' className='mb-5 px-5 py-3 text-[#222021] placeholder:text-black h-14 text-sm bg-white rounded-full focus:outline-3 focus:outline-[#222021] focus:ring-2 focus:ring-[#00ADEF]' />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="prenom" className='text-white text-sm font-medium pb-2'>Prénom</label>
                                    <input type='text' placeholder='Prénom' className='mb-5 px-5 py-3 text-[#222021] placeholder:text-black h-14 text-sm bg-white rounded-full focus:outline-3 focus:outline-[#222021] focus:ring-2 focus:ring-[#00ADEF]' />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="phone" className='text-white text-sm font-medium pb-2'>Téléphone</label>
                                    <input type='text' placeholder='Téléphone' className='mb-5 px-5 py-3 text-[#222021] placeholder:text-black h-14 text-sm bg-white rounded-full focus:outline-3 focus:outline-[#222021] focus:ring-2 focus:ring-[#00ADEF]' />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="email" className='text-white text-sm font-medium pb-2'>Email</label>
                                    <input type='email' placeholder='Email' className='mb-5 px-5 py-3 text-[#222021] placeholder:text-black h-14 text-sm bg-white rounded-full focus:outline-3 focus:outline-[#222021] focus:ring-2 focus:ring-[#00ADEF]' />
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="message" className='text-white text-sm font-medium pb-2'>Message</label>
                                <textarea placeholder='Message' className='mb-5 px-5 py-3 rounded-xl text-[#222021] text-lg h-32 bg-white focus:outline-3 focus:outline-[#222021]'></textarea>
                            </div>

                            <button type='submit' className='bg-[#222021] text-white px-5 py-4 w-[200px] cursor-pointer flex justify-center items-center text-sm font-medium rounded-full hover:bg-[#FF43AF] transition duration-300'>Envoyer un message</button>
                        </form>
                    </div>
                </div>
            </section>
            <section className="w-full bg-[#F9F9FF] py-20 relative">

                <div className="max-w-screen-xl mx-auto w-full">
                    <div className="w-full grid grid-cols-2 gap-x-18">
                        <div className="h-[500px]">
                            <img src="/assets/images/technicien-3.jpg" alt="Compétences" className="w-full h-full object-cover rounded-3xl " />
                        </div>
                        <div className="flex flex-col justify-center items-start gap-y-8">
                            <h2 className="text-[#00ADEF] text-4xl font-light"><b className='font-bold'>Plombier-chauffagiste à Orléans,</b><br /> contactez Milcent Lesage</h2>
                            <p className="text-[#222021] text-md font-light text-justify">
                                Située sur la commune d’Ingré, notre entreprise de plomberie chauffagiste intervient auprès des particuliers comme des professionnels sur toute la région orléanaise. Nos équipes vous accompagnent dans tous vos projets de plomberie, chauffage, climatisation et salle de bains.
                            </p>
                            <p className="text-[#222021] text-md font-light text-justify">
                                Nous sommes à votre disposition pour une étude personnalisée.
                            </p>
                            <p className="text-[#222021] text-md font-light text-justify">

                                Profitez-en, nos devis sont gratuits !
                            </p>
                            <Link href={"/"} className="bg-[#222021]  text-white rounded-full px-8 py-4 mt-10 flex justify-center items-center gap-x-2 transition-all duration-500 hover:bg-[#00ADEF]">
                                Devis gratuit <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white py-20 relative">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex justify-center items-center flex-col gap-y-20">
                        <div className="flex justify-center items-center flex-col gap-y-5">
                            <h2 className="text-[#00ADEF] text-4xl font-bold">Pourquoi choisir <b className="font-light">Milcent Lesage pour vos travaux ?</b></h2>
                        </div>
                        <div className="flex gap-15">
                            <div className="w-24 h-24 flex justify-center items-center">
                                <img src="/assets/images/about/1.png" alt="Plombier" className="object-cover" />
                            </div>

                            <div className="w-36 h-24 flex justify-center items-center">
                                <img src="/assets/images/about/2.png" alt="Plombier" className="object-cover" />
                            </div>

                            <div className="w-24 h-24 flex justify-center items-center">
                                <img src="/assets/images/about/3.png" alt="Plombier" className="object-cover" />
                            </div>

                            <div className="w-20 h-20 flex justify-center items-center">
                                <img src="/assets/images/about/4.png" alt="Plombier" className="object-cover" />
                            </div>
                        </div>
                        <div className="w-[1000px] flex flex-col justify-between items-center gap-y-5">
                            <p className="text-center text-[#222021] text-sm font-light">
                                Milcent Lesage, c’est avant tout une entreprise familiale de plomberie existant depuis 1994. Grâce à des compétences et un sens du service irréprochables, nous vous apportons expertise et conseil. Pour vos projets en neuf comme en rénovation, nos certifications vous garantissent un travail minutieux.
                            </p>
                            <p className="text-center text-[#222021] text-sm font-light">
                                Nous avons à cœur de vous accompagner dans tous vos projets et vous offrir une prestation de qualité qui respecte vos besoins, vos envies et votre budget parfois serré.
                            </p>

                        </div>
                    </div>
                </div>
                <div className="absolute w-[200px] h-[200px] bottom-0 right-0">
                    <img src="/assets/images/water.png" alt="Certification" className="w-full h-full object-cover -rotate-90" />
                </div>
            </section>
            <Footer />

        </>
    );
}

export default Contact;