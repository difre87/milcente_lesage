import { Link } from "@inertiajs/react";

const Entretien = () => {
    return (
        <>
            <section className="w-full bg-white h-[300px] bg-slider-apropos-height relative flex flex-col">
                <div className="w-full h-full flex bg-slider-apropos relative after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-black/70">
                    <div className="w-full h-full flex justify-center items-center relative z-10 title-slider-apropos">
                        <h2 className="text-5xl font-medium text-white py-10">Un entretien complet de vos équipements</h2>
                    </div>
                </div>
            </section>

            <section className="w-full h-screen bg-[#00ADEF] relative ">
                <div className="max-w-screen-xl mx-auto w-full bg-white py-20 h-[600px] flex flex-col justify-center items-center rounded-3xl drop-shadow-2xl z-10 absolute left-1/2 -top-[70%] -translate-x-1/2 translate-y-[70%]">
                    <div className="grid grid-cols-3 gap-40">
                        <div className="flex flex-col justify-center items-center gap-y-5">
                            <div className="w-[100px] h-[100px] flex justify-center items-center">
                                <img src="/assets/images/maintenance.svg" alt="Entretien" className="object-cover" />
                            </div>
                            <h3 className="text-xl font-bold text-[#00ADEF] text-center">Installation<br/> Maintenance</h3>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-y-5">
                            <div className="w-[100px] h-[100px] flex justify-center items-center">
                                <img src="/assets/images/deplacement.svg" alt="Entretien" className="object-cover" />
                            </div>
                            <h3 className="text-xl font-bold text-[#00ADEF] text-center">Déplacement<br/> en 24h</h3>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-y-5">
                            <div className="w-[100px] h-[100px] flex justify-center items-center">
                                <img src="/assets/images/expert.svg" alt="Entretien" className="object-cover" />
                            </div>
                            <h3 className="text-xl font-bold text-[#00ADEF] text-center">Experts<br/> Certifiés</h3>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-y-5 mt-20 w-[800px]">
                        <p className="text-center text-[#222021] text-md font-light">
                            Nos plombiers-chauffagistes se déplacent dans le cadre d’entretien et de dépannage de vos équipements sanitaires et systèmes de chauffage.
                        </p>
                        <p className="text-center text-[#222021] text-md font-light">
                        Nos plombiers-chauffagistes se déplacent dans le cadre d’entretien et de dépannage de vos équipements sanitaires et systèmes de chauffage. N’attendez pas la panne pour agir ! Bien souvent, un entretien régulier vous permet de profiter pleinement de votre installation, sans risquer des dépenses onéreuses. Contactez-nous et prenez rendez-vous pour l’entretien de votre plomberie et chauffage !
                        </p>
                    </div>
                    <Link href={"/"} className="bg-[#222021] absolute z-30 -bottom-[4%] translate-y-[4%] text-white rounded-full px-8 py-4 mt-10 flex justify-center items-center gap-x-2 transition-all duration-500 hover:bg-[#00ADEF]">
                        Je contacte un plombier
                    </Link>
                </div>
                <div className="absolute w-[950px] h-[300px] bottom-40 left-0 z-20">
                    <img src="/assets/images/equipement.png" alt="Entretien" className="object-cover" />
                </div>
            </section>

        </>

     );
}

export default Entretien;