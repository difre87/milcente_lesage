import { Link } from "@inertiajs/react";

const Competence = () => {
    return (
        <section className="w-full bg-[#F9F9FF] py-20 relative">
            <Link href={"/contact"} className="bg-[#222021] absolute z-30 -top-[10%] left-1/2 -translate-x-1/2 translate-y-[10%] text-white rounded-full px-8 py-4 mt-10 flex justify-center items-center gap-x-2 transition-all duration-500 hover:bg-[#00ADEF]">
                Je contacte un plombier
            </Link>
            <div className="max-w-screen-xl mx-auto w-full">
                <div className="w-full grid grid-cols-2 gap-x-18">
                    <div className="h-[500px]">
                        <img src="/assets/images/technicien-3.jpg" alt="Compétences" className="w-full h-full object-cover rounded-3xl " />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-y-8">
                        <h2 className="text-[#00ADEF] text-4xl font-bold">Des compétences<br/> et des qualités au service<br/> de nos clients</h2>
                        <p className="text-[#222021] text-md font-light text-justify">
                            La qualité de la prestation est au cœur de notre engagement. Forte de nos 27 ans d’expérience dans la plomberie mais également la pose de chauffage ou encore la création de salle de bains, notre équipe peut se targuer d’être celle qu’il vous faut pour tous vos travaux.
                        </p>
                        <p className="text-[#222021] text-md font-light text-justify">
                            Faire confiance à Milcent Lesage, c’est également confier vos travaux à une équipe certifiée et reconnue pour son savoir-faire.
                        </p>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Competence;