import { div, ul } from "framer-motion/client";
import { Head } from "@inertiajs/react";
import Header from "../../Components/Header";
import { dataTarifs, seoData } from "../../types/data";
import Testimonies from "../../Components/Testimonies";
import { Phone } from "lucide-react";
import TableTarif from "../../Components/TableTarif";
import ContactezNous from "../../Components/ContactezNous";
import Footer from "../../Components/Footer";
import GlobalSEO from "../../Components/GlobalSEO";
import Breadcrumbs from "../../Components/Breadcrumbs";
const Tarif = () => {
    // Récupération des données SEO
    const seoDataPage = seoData["debouchage-tarifs"];

    // Données pour les breadcrumbs
    const breadcrumbsData = [
        { name: "Accueil", url: "/" },
        { name: "Débouchage canalisation", url: "/debouchage-canalisation" },
        { name: "Tarifs", url: "/debouchage-canalisation/tarifs" }
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

            <main className="relative top-24 ">
                <section className="w-full relative h-[450px] bg-[url('/public/assets/images/bg-tarif.jpg')] bg-cover bg-center flex items-center justify-center">
                    <div className="bg-black/70 bg-opacity-50 p-8 rounded absolute left-0 right-0 top-0 bottom-0 flex flex-col justify-center items-center">
                        <h2 className="text-white text-5xl font-bold mb-6">Nos tarifs débouchages</h2>
                        <span className="text-[#00ADEF] text-3xl font-bold">Tout compris et sans surprise !</span>
                        <p className="text-2xl text-white font-semibold">Déplacement Gratuit - 24h24 et 7J/7 sans Majoration - Devis gratuit</p>
                    </div>
                </section>
                <section className="w-full bg-white py-20">
                    <div className="max-w-screen-xl mx-auto px-20">
                        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10">
                            {
                                dataTarifs.map((item, index) => (
                                    <div key={index} className="bg-white rounded-3xl shadow-lg flex flex-col">
                                        <h3 className="py-3 text-center bg-[#222021] text-white font-bold text-xl uppercase rounded-t-3xl">{item.label}</h3>
                                        <div className="p-6 flex flex-col gap-4 flex-1 bg-white">
                                            <ul className="list-disc list-inside mb-4 flex justify-center flex-col gap-y-1">
                                                {
                                                    item.services.map((service, idx) => (
                                                        <li key={idx} className="text-[#222021] text-sm font-medium">{service}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        <div className="py-8 bg-[#00ADEF] flex justify-center items-center rounded-b-3xl flex-col">
                                            <div className="flex">
                                                <span className="text-white text-6xl font-bold">{item.price}€</span>
                                                <span className="text-white text-lg font-bold mt-7 ml-1">/TTC</span>
                                            </div>
                                            <p className="text-white text-sm font-light">sur la base d’une TVA à 10%</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="flex justify-center py-10">
                            <p className="text-black text-xl">Modes de paiement accepté : <b>Espèce, CB, Chèque</b></p>
                        </div>
                    </div>
                </section>
                <section className="w-full py-10 bg-[#F9F9FF]">
                    <div className="max-w-screen-xl mx-auto px-20">
                        <div className="w-full grid grid-cols-2">
                            <div className="h-[350px] bg-[url('/public/assets/images/paiement.jpg')] bg-cover bg-center rounded-3xl relative">
                                <div className="w-26 h-26 rounded-full bg-[#FF43AF] absolute -right-12 top-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
                                    <span className="text-white text-6xl font-bold leading-10">x3</span>
                                    <p className="text-sm text-white">sans frais</p>
                                </div>
                            </div>
                            <div className="px-16 flex flex-col justify-center">
                                <h3 className="text-3xl mb-6 text-[#00ADEF]">Mode de paiement</h3>
                                <ul className="list-disc pl-6 list-inside text-[#00ADEF] text-xl font-bold flex flex-col gap-y-1">
                                    <li>Espèce</li>
                                    <li>Carte bancaire</li>
                                    <li>Chèque  </li>
                                </ul>
                                <p className="text-[#222021] text-md mt-10">Possibilité de payé sur 3 tranches et sans frais Déplacement injustifié 110€ TTC.</p>
                            </div>

                        </div>
                    </div>
                </section>
                <Testimonies />
                <section className="w-full py-10 bg-white">
                    <div className="max-w-screen-xl mx-auto px-5">
                        <h2 className="text-[#00ADEF] text-3xl font-bold">Tarifs Milcent Lesage</h2>
                        <span className="text-[#00ADEF] text-lg font-medium">(Mise à jour Sep.2025)</span>
                        <div className="flex items-center">
                            <Phone className="text-black w-4 h-4 mr-2" />
                            <p className="text-[#222021] text-md font-medium">Appelez le <b className="text-[#FF43AF] font-semibold">02 38 73 24 07</b> <b className="text-black font-semibold">ou Rendez-vous en ligne</b>.</p>
                        </div>
                        <TableTarif />
                    </div>
                </section>
                <section className="w-full py-10 bg-white">
                    <div className="max-w-screen-xl mx-auto px-5">
                        <h2 className="text-[#00ADEF] text-3xl font-bold">Ce que nous ne facturons pas :</h2>
                        <ul className="list-disc list-inside text-[#222021] text-md font-light mt-4 mb-10">
                            <li>Dépose et repose toilette (main d’œuvre)</li>
                            <li>Ouverture canalisation</li>
                            <li>Pompage/Nettoyage/Aspirateur (Mise en œuvre)</li>
                            <li>Majoration soir (après 20h jusqu’à 8h30 lendemain)</li>
                            <li>Majoration Dimanche et jour férié</li>
                            <li>Accès difficile pour Hydrocurage (stationnement + 50m) *</li>
                            <li>Travail sous vide sanitaire</li>
                            <li>Déplacement dans les zones couvertes par nos agences. **</li>
                        </ul>
                        <p className="text-md text-[#222021]">* Pour les consommateurs et non professionnels.</p>
                        <p className="text-md text-[#222021]">** Des frais supplémentaires peuvent être éligibles pour des demandes d’interventions hors zones couvertes.</p>
                    </div>
                </section>
                <section className="w-full py-10 bg-white">
                    <div className="max-w-screen-xl mx-auto px-5">
                        <h2 className="text-[#00ADEF] text-3xl font-bold">Pourquoi nos services de débouchage sont-ils moins chers ?</h2>
                        <ul className=" text-[#222021] text-md font-light mt-4 mb-10 flex flex-col gap-4">
                            <li>À la Compagnie des Déboucheurs, nous sommes comme l'eau : transparents.</li>
                            <li>Chaque cas est particulier, nous adaptons notre prestation à votre problème. Pourquoi ? Parce que nous utilisons le matériel approprié à votre bouchon.</li>
                            <li>Pas de surprise, dès votre appel pour un débouchage, nous vous indiquons le coût de l'intervention. Ce prix comprend l'opération de débouchage de canalisation, le déplacement et le sourire.</li>

                        </ul>
                        <p className="text-md text-[#222021] font-bold">Pas de mauvais cadeau pour Noël : les jours fériés ne sont pas majorés !</p>
                    </div>
                </section>
                <ContactezNous />
                <section className="w-full py-10 bg-white">
                    <div className="max-w-screen-xl mx-auto px-5">
                        <h2 className="text-[#00ADEF] text-3xl font-bold">Débouchage par système Hydrocureur</h2>
                        <p className="text-md text-[#222021] mt-4 mb-4">
                            Nos véhicules d’intervention sont équipés de flexibles haute pression pouvant aller dénicher, détruire, anéantir (sans la moindre compassion) tous les bouchons même ceux qui sont éloignés dans vos canalisations (jusqu’à 100 mètres de distance). Notre solution est sans produit chimique, ce qui permet de préserver l’intégrité de votre tuyauterie et faciliter le passage de l’eau vers votre fosse septique et vos égouts.
                        </p>
                        <p className="text-md text-[#222021] mt-4 mb-4">Notre système possède différentes buses d’hydrocurage nous permettant :</p>
                        <ul className="list-disc list-inside text-[#222021] text-md font-light mt-4 mb-10">
                            <li>de couper des racines</li>
                            <li>de décoller des plaques de tartre</li>
                            <li>de curer des dépôts et aggloméras de déchets</li>
                            <li>de nettoyer les débris de chantier (mortier, brique, ciment, etc.)</li>
                            <li>de vous débarrasser de reste de lessive (pastille lave-vaisselle, etc.)</li>
                            <li>de décaper la graisse, etc...</li>

                        </ul>
                        <p className="text-md text-[#222021] mb-2">Pour un débouchage de vos canalisations d’eaux usées durable, le curage est une méthode économique et efficace. Le tarif débouchage haute pression inclut le passage caméra, pas pour être primé comme œuvre cinématographique à Cannes, mais pour être certain que vous soyez débarrassé de tous soucis.</p>
                        <p className="text-md text-[#222021]">Un débouchage canalisation haute pression est une solution curative respectueuse de l’environnement, car elle utilise uniquement de l’eau.</p>
                    </div>
                </section>
                <section className="w-full py-10 bg-white">
                    <div className="max-w-screen-xl mx-auto px-5">
                        <h2 className="text-[#00ADEF] text-3xl font-bold mb-6">Différence entre débouchage et curage de canalisation</h2>
                        <div className="w-full flex flex-col gap-4">
                            <p className="text-md text-[#222021]">
                                Le prix d’un débouchage de canalisation est offert, selon le cas, soit dans le forfait « Débouchage manuel » soit dans le forfait « Hydrocurage ».
                            </p>
                            <p className="text-md text-[#222021]">
                                Le débouchage de canalisation est l’action de détruire un bouchon, généralement créé par un amas de détritus (cheveux, poils, protections hygiéniques, savons, etc.). La disparition du bouchon permet à l’eau de s’écouler normalement. Votre réseau des eaux usées fonctionne alors de nouveau correctement. Si le bouchon est petit et est simple à gérer, un débouchage par un déboucheur révolver basse pression ou un furet mécanique est suffisant. Pour des bouchons plus importants, nous utilisons du matériel plus adapté à haute pression.
                            </p>
                            <p className="text-md text-[#222021]">
                                Le prix d’un curage de canalisation est offert dans le forfait « Hydrocurage » à 240€ TTC.
                            </p>
                            <p className="text-md text-[#222021]">
                                Le curage de canalisation, quant à lui, est une action préventive pour avoir des canalisations saines de manière durable. Il s’agit d’un nettoyage en profondeur de vos canalisations, à l’aide d’un système approprié, généralement un jet d’eau à haute pression. Le curage de canalisation décolle les déchets, accumulés au fil du temps, des parois des tuyauteries dans le but d’éviter la formation de bouchons qui empêche la bonne évacuation des eaux usées.
                            </p>
                            <p className="text-md text-[#222021]">
                                Pour toutes questions sur le tarif d’un curage de canalisation, n’hésitez pas à nous contacter.
                            </p>
                        </div>

                    </div>
                </section>
                <section className='w-full h-[1200px] relative flex justify-end'>
                    <div className='w-3/5 h-full pr-3/5'>
                        <img src='/assets/images/bg-contact.jpg' alt='Contact Us' className='w-full h-full object-cover' />
                        <div className='absolute px-10 top-1/2 -translate-y-1/2 left-[30%] -translate-x-[30%] w-[650px] min-h-[700px] bg-[#00ADEF] rounded-2xl pt-10 pb-20'>
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
                <Footer />
            </main>

        </>
    );
}

export default Tarif;