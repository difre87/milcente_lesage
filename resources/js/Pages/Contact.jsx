import { Head } from '@inertiajs/react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Breadcrumbs from '../Components/Breadcrumbs';
import GlobalSEO from '../Components/GlobalSEO';
import { Link, useForm } from "@inertiajs/react";
import { ArrowRight } from 'lucide-react';
import { seoData } from '../types/data';
import { useState } from 'react';

const Contact = ({ flash }) => {
    const seoInfo = seoData.contact;
    const breadcrumbs = [
        { title: "Contact" }
    ];

    const { data, setData, post, processing, errors, reset } = useForm({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        message: ''
    });

    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        post('/contact', {
            onSuccess: () => {
                reset();
                setShowSuccess(true);
                setTimeout(() => setShowSuccess(false), 5000);
            }
        });
    };

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
            <section className='w-full md:h-[1200px] h-[800px] relative md:flex justify-end'>
                <div className='md:w-3/5 w-full h-full md:pr-3/5'>
                    <img src='/assets/images/bg-contact.jpg' alt='Contact Us' className='w-full h-full object-cover' />
                    <div className='absolute z-20 md:px-10 px-4 md:top-1/2 top-14 md:-translate-y-1/2 left-[30%] -translate-x-[30%] md:w-[550px] w-[330px] min-h-[700px] bg-[#00ADEF] rounded-2xl md:pt-10 md:pb-20'>
                        <h1 className='md:text-4xl text-3xl font-light pt-10 text-[#222021]'>Une question ?<br /> <b className='font-bold'>Besoin d'un devis ?</b><br /> Ecrivez-nous !</h1>
                        
                        {/* Messages de confirmation et d'erreur */}
                        {(flash?.success || showSuccess) && (
                            <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                                ✅ {flash?.success || 'Votre message a été envoyé avec succès !'}
                            </div>
                        )}
                        
                        {flash?.error && (
                            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                                ❌ {flash.error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className='flex flex-col mt-10'>
                            <div className='grid grid-cols-2 gap-5 mb-5'>
                                <div className='flex flex-col'>
                                    <label htmlFor="nom" className='text-white text-sm font-medium pb-2'>Nom</label>
                                    <input 
                                        type='text' 
                                        id="nom"
                                        name="nom"
                                        value={data.nom}
                                        onChange={(e) => setData('nom', e.target.value)}
                                        placeholder='Nom' 
                                        className={`mb-1 px-5 py-3 text-[#222021] placeholder:text-black h-14 text-sm bg-white rounded-full focus:outline-3 focus:outline-[#222021] focus:ring-2 focus:ring-[#00ADEF] ${errors.nom ? 'border-2 border-red-500' : ''}`}
                                    />
                                    {errors.nom && <span className="text-red-800 text-xs mt-1">{errors.nom}</span>}
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="prenom" className='text-white text-sm font-medium pb-2'>Prénom</label>
                                    <input 
                                        type='text' 
                                        id="prenom"
                                        name="prenom"
                                        value={data.prenom}
                                        onChange={(e) => setData('prenom', e.target.value)}
                                        placeholder='Prénom' 
                                        className={`mb-1 px-5 py-3 text-[#222021] placeholder:text-black h-14 text-sm bg-white rounded-full focus:outline-3 focus:outline-[#222021] focus:ring-2 focus:ring-[#00ADEF] ${errors.prenom ? 'border-2 border-red-500' : ''}`}
                                    />
                                    {errors.prenom && <span className="text-red-800 text-xs mt-1">{errors.prenom}</span>}
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="telephone" className='text-white text-sm font-medium pb-2'>Téléphone</label>
                                    <input 
                                        type='tel' 
                                        id="telephone"
                                        name="telephone"
                                        value={data.telephone}
                                        onChange={(e) => setData('telephone', e.target.value)}
                                        placeholder='Téléphone' 
                                        className={`mb-1 px-5 py-3 text-[#222021] placeholder:text-black h-14 text-sm bg-white rounded-full focus:outline-3 focus:outline-[#222021] focus:ring-2 focus:ring-[#00ADEF] ${errors.telephone ? 'border-2 border-red-500' : ''}`}
                                    />
                                    {errors.telephone && <span className="text-red-800 text-xs mt-1">{errors.telephone}</span>}
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="email" className='text-white text-sm font-medium pb-2'>Email</label>
                                    <input 
                                        type='email' 
                                        id="email"
                                        name="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder='Email' 
                                        className={`mb-1 px-5 py-3 text-[#222021] placeholder:text-black h-14 text-sm bg-white rounded-full focus:outline-3 focus:outline-[#222021] focus:ring-2 focus:ring-[#00ADEF] ${errors.email ? 'border-2 border-red-500' : ''}`}
                                    />
                                    {errors.email && <span className="text-red-800 text-xs mt-1">{errors.email}</span>}
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="message" className='text-white text-sm font-medium pb-2'>Message</label>
                                <textarea 
                                    id="message"
                                    name="message"
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    placeholder='Message' 
                                    className={`mb-1 px-5 py-3 rounded-xl text-[#222021] text-lg h-32 bg-white focus:outline-3 focus:outline-[#222021] ${errors.message ? 'border-2 border-red-500' : ''}`}
                                ></textarea>
                                {errors.message && <span className="text-red-800 text-xs mt-1">{errors.message}</span>}
                            </div>

                            <button 
                                type='submit' 
                                disabled={processing}
                                className={`bg-[#222021] text-white px-5 py-4 w-[200px] flex justify-center items-center text-sm font-medium rounded-full transition duration-300 mt-5 ${
                                    processing 
                                        ? 'opacity-50 cursor-not-allowed' 
                                        : 'cursor-pointer hover:bg-[#FF43AF]'
                                }`}
                            >
                                {processing ? 'Envoi en cours...' : 'Envoyer un message'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <section className="w-full bg-[#F9F9FF] py-20 px-4 md:px-0 relative">

                <div className="max-w-screen-xl mx-auto w-full">
                    <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-x-18">
                        <div className="md:h-[500px]">
                            <img src="/assets/images/technicien-3.jpg" alt="Compétences" className="w-full h-full object-cover rounded-3xl " />
                        </div>
                        <div className="flex flex-col justify-center items-start gap-y-8">
                            <h2 className="text-[#00ADEF] md:text-4xl text-3xl mt-5 md:mt-0 font-light"><b className='font-bold'>Plombier-chauffagiste à Orléans,</b><br /> contactez Milcent Lesage</h2>
                            <p className="text-[#222021] text-md font-light text-justify">
                                Située sur la commune d’Ingré, notre entreprise de plomberie chauffagiste intervient auprès des particuliers comme des professionnels sur toute la région orléanaise. Nos équipes vous accompagnent dans tous vos projets de plomberie, chauffage, climatisation et salle de bains.
                            </p>
                            <p className="text-[#222021] text-md font-light text-justify">
                                Nous sommes à votre disposition pour une étude personnalisée.
                            </p>
                            <p className="text-[#222021] text-md font-light text-justify">

                                Profitez-en, nos devis sont gratuits !
                            </p>
                            <Link href={"/contact"} className="bg-[#222021]  text-white rounded-full px-8 py-4 mt-10 flex justify-center items-center gap-x-2 transition-all duration-500 hover:bg-[#00ADEF]">
                                Devis gratuit <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white md:py-20 py-10 relative px-4 md:px-0 overflow-hidden">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex justify-center items-center flex-col md:gap-y-20 gap-y-10">
                        <div className="flex justify-center items-center flex-col gap-y-5">
                            <h2 className="text-[#00ADEF] md:text-4xl text-3xl font-bold">Pourquoi choisir <b className="font-light">Milcent Lesage pour vos travaux ?</b></h2>
                        </div>
                        <div className="md:flex grid grid-cols-4 md:gap-15 gap-8">
                            <div className="md:w-24 md:h-24 flex justify-center items-center">
                                <img src="/assets/images/about/1.png" alt="Plombier" className="object-cover" />
                            </div>

                            <div className="md:w-36 md:h-24 flex justify-center items-center">
                                <img src="/assets/images/about/2.png" alt="Plombier" className="object-cover" />
                            </div>

                            <div className="md:w-24 md:h-24 flex justify-center items-center">
                                <img src="/assets/images/about/3.png" alt="Plombier" className="object-cover" />
                            </div>

                            <div className="md:w-20 md:h-20 flex justify-center items-center">
                                <img src="/assets/images/about/4.png" alt="Plombier" className="object-cover" />
                            </div>
                        </div>
                        <div className="md:w-[1000px] w-full flex flex-col justify-between items-center gap-y-5">
                            <p className="text-center text-[#222021] text-sm font-light">
                                Milcent Lesage, c’est avant tout une entreprise familiale de plomberie existant depuis 1994. Grâce à des compétences et un sens du service irréprochables, nous vous apportons expertise et conseil. Pour vos projets en neuf comme en rénovation, nos certifications vous garantissent un travail minutieux.
                            </p>
                            <p className="text-center text-[#222021] text-sm font-light">
                                Nous avons à cœur de vous accompagner dans tous vos projets et vous offrir une prestation de qualité qui respecte vos besoins, vos envies et votre budget parfois serré.
                            </p>

                        </div>
                    </div>
                </div>
                <div className="absolute md:w-[200px] w-[100px] h-[200px] md:bottom-0 -bottom-14 right-0">
                    <img src="/assets/images/water.png" alt="Certification" className="w-full h-full object-cover -rotate-90" />
                </div>
            </section>
            <Footer />

        </>
    );
}

export default Contact;