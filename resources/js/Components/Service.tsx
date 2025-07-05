import { Link } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ButtonLink from "./ButtonLink";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import { motion } from "framer-motion";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const Service = () => {
    // Variants pour les animations de sections
    const sectionVariants = {
        hidden: {
            opacity: 0,
            y: 60
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    const imageVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            scale: 1
        }
    };

    return (
        <>
            {/* Section Plomberie */}
            <motion.section
                className="w-full py-20"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="max-w-screen-xl mx-auto px-20">
                    <div className="w-full  min-h-[300px] flex gap-x-20">
                        <motion.div
                            className="w-1/2 flex justify-center items-center  overflow-hidden rounded-2xl h-[500px]"
                            variants={imageVariants}
                            transition={{ duration: 0.8 }}
                        >
                            <img src="/assets/images/services/plomberie.jpg" alt="Service Image" className="w-full h-full object-cover rounded-2xl transition-all duration-500 hover:scale-110 hover:rotate-5" />
                        </motion.div>
                        <motion.div
                            className="w-1/2 flex justify-center  flex-col"
                            variants={itemVariants}
                        >
                            <motion.img
                                src="/assets/images/services/plomberie.svg"
                                alt="Service Image"
                                className="w-16"
                                variants={itemVariants}
                            />
                            <motion.div
                                className="flex flex-col gap-y-4 mt-20"
                                variants={itemVariants}
                            >
                                <h2 className="text-[#00ADEF] text-3xl font-bold">Plomberie</h2>
                                <p className="text-[#222021] text-sm font-normal">
                                    Rénovation ou création d'une nouvelle salle de bains ?
                                    Faites appel à notre équipe Milcent Lesage à Orléans.
                                    En neuf ou en rénovation, nous vous proposons nos services en plomberie. Installation de robinetterie, tuyauterie, canalisations, sanitaires, systèmes d'évacuation, raccordement au tout-à-l'égout… Notre plombier
                                    se déplace aussi pour le dépannage rapide de vos installations en cas de fuite d'eau, canalisation bouchée etc.
                                </p>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <ButtonLink href="" className="bg-[#00ADEF] text-white font-bold flex w-[200px] justify-center items-center py-4 px-5 text-sm rounded-full mt-10 transition-all duration-500 hover:bg-[#222021]">Installation plomberie</ButtonLink>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Section Chauffage */}
            <motion.section
                className="w-full py-20  bg-light"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="max-w-screen-xl mx-auto px-20">
                    <div className="w-full  min-h-[300px] flex gap-x-20">
                        <motion.div
                            className="w-1/2 flex justify-center  flex-col"
                            variants={itemVariants}
                        >
                            <motion.img
                                src="/assets/images/services/chauffage.svg"
                                alt="Service Image"
                                className="w-16"
                                variants={itemVariants}
                            />
                            <motion.div
                                className="flex flex-col gap-y-4 mt-20"
                                variants={itemVariants}
                            >
                                <h2 className="text-[#00ADEF] text-3xl font-bold">Chauffage</h2>
                                <p className="text-[#222021] text-sm font-normal">
                                    Vous avez besoin de changer votre système de chauffage et ne savez pas par lequel le remplacer ? Selon votre surface à chauffer, votre budget et votre isolation, nous pourrons vous conseiller sur le modèle idéal. Nous pouvons procéder aux travaux et vous installer votre chauffe-eau, vos radiateurs, votre chaudière à condensation, chaudière à gaz, chaudière au fioul ainsi que votre pompe à chaleur.
                                </p>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <ButtonLink href="" className="bg-[#222021] text-white font-bold flex w-[200px] text-sm justify-center items-center py-4 px-5 rounded-full mt-10 transition-all duration-500 hover:bg-[#00ADEF]">Installation chauffage</ButtonLink>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="w-1/2 flex justify-center items-center  overflow-hidden rounded-2xl h-[500px]"
                            variants={imageVariants}
                            transition={{ duration: 0.8 }}
                        >
                            <img src="/assets/images/services/chauffage.jpg" alt="Service Image" className="w-full h-full object-cover rounded-2xl transition-all duration-500 hover:scale-110 hover:rotate-5" />
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Section Salle de bain avec Swiper */}
            <motion.section
                className="w-full py-20 bg-[#222021]"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="max-w-screen-xl mx-auto px-20">
                    <div className="w-full  min-h-[300px] justify-center items-center flex gap-x-20 ">
                        <motion.div
                            className="w-1/2  flex justify-center items-center h-full relative"
                            variants={imageVariants}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="w-full h-full">
                                <Swiper
                                    modules={[EffectCoverflow, Navigation, Autoplay]}
                                    effect="coverflow"
                                    grabCursor={true}
                                    centeredSlides={true}
                                    slidesPerView={1.5}
                                    spaceBetween={30}

                                    coverflowEffect={{
                                        rotate: 0,
                                        stretch: 0,
                                        depth: 150,
                                        modifier: 2.5,
                                        slideShadows: false,
                                    }}
                                    navigation={{
                                        nextEl: '.swiper-button-next-bathroom',
                                        prevEl: '.swiper-button-prev-bathroom',
                                    }}
                                    autoplay={{
                                        delay: 4000,
                                        disableOnInteraction: false,
                                    }}
                                    loop={true}
                                    className="w-full h-full bathroom-carousel [&_.swiper-slide]:rounded-2xl [&_.swiper-slide]:overflow-hidden"
                                >
                                    <SwiperSlide className="rounded-2xl overflow-hidden">
                                        <div className="w-full h-[300px] rounded-2xl shadow-xl overflow-hidden">
                                            <img
                                                src="/assets/images/services/salle-de-bain/1.jpg"
                                                alt="Salle de bain moderne"
                                                className="w-full h-full object-cover rounded-2xl"
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="rounded-2xl overflow-hidden">
                                        <div className="w-full h-[300px] rounded-2xl shadow-xl overflow-hidden">
                                            <img
                                                src="/assets/images/services/salle-de-bain/2.png"
                                                alt="Installation plomberie"
                                                className="w-full h-full object-cover rounded-2xl"
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="rounded-2xl overflow-hidden">
                                        <div className="w-full h-[300px] rounded-2xl shadow-xl overflow-hidden">
                                            <img
                                                src="/assets/images/services/salle-de-bain/3.jpg"
                                                alt="Rénovation salle de bain"
                                                className="w-full h-full object-cover rounded-2xl"
                                            />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>

                                {/* Navigation en dessous du carousel */}
                                <div className="flex justify-center items-center gap-4 mt-5">
                                    <div className="swiper-button-prev-bathroom w-12 h-12  rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-white transition-all duration-300 backdrop-blur-sm">
                                        <ChevronLeft className="w-8 h-8 text-[#FFFFFF] hover:text-[#212121" />
                                    </div>
                                    <div className="swiper-button-next-bathroom w-12 h-12  rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-white transition-all duration-300 backdrop-blur-sm">
                                        <ChevronRight className="w-8 h-8 text-[#FFFFFF] hover:text-[#212121]" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="w-1/2 flex justify-center  flex-col"
                            variants={itemVariants}
                        >
                            <motion.img
                                src="/assets/images/services/salle-de-bain.svg"
                                alt="Service Image"
                                className="w-16"
                                variants={itemVariants}
                            />
                            <motion.div
                                className="flex flex-col gap-y-4 mt-20"
                                variants={itemVariants}
                            >
                                <h2 className="text-white text-3xl font-bold">Salle de bain</h2>
                                <p className="text-white text-sm font-normal">
                                    Milcent Lesage à Orléans, c’est une équipe de professionnels
                                    de la plomberie, disponible pour vous accompagner dans votre projet de rénovation ou de création de salle de bains clés en main.
                                    De la plomberie au carrelage, en passant par l’installation
                                    d’un bac à douche ou d’une baignoire balnéo, vous gardez le même interlocuteur de A à Z pour tous les travaux.
                                    Quel que soit votre projet, vous pouvez nous contacter
                                    et bénéficier d’un devis gratuit !
                                </p>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <ButtonLink href="" className="bg-[#00ADEF] text-white font-bold flex w-[200px] justify-center items-center py-4 px-5 text-sm rounded-full mt-10 transition-all duration-500 hover:bg-[#FF43AF]">Création salle de bains</ButtonLink>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Section Climatisation */}
            <motion.section
                className="w-full py-20 bg-[#00ADEF]"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="max-w-screen-xl mx-auto px-20">
                    <div className="w-full  min-h-[300px] flex gap-x-20">
                        <motion.div
                            className="w-1/2 flex justify-center  flex-col"
                            variants={itemVariants}
                        >
                            <motion.img
                                src="/assets/images/services/climatisation.svg"
                                alt="Service Image"
                                className="w-16"
                                variants={itemVariants}
                            />
                            <motion.div
                                className="flex flex-col gap-y-4 mt-20"
                                variants={itemVariants}
                            >
                                <h2 className="text-white text-3xl font-bold">Climatisation</h2>
                                <p className="text-[#222021] text-sm font-normal">
                                    Besoin d’un système de climatisation pour faire baisser
                                    la température ? Plombier-chauffagiste de métier, l’entreprise de plomberie Milcent Lesage à Orléans vous propose diverses solutions de climatisation en fonction de votre budget, tout en tenant compte de la configuration de votre logement. Climatisation réversible, pompe à chaleur : profitez d’un air frais d’un seul geste.
                                </p>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <ButtonLink href="" className="bg-[#222021] text-white font-bold flex w-[220px] justify-center items-center py-4 px-5 text-sm rounded-full mt-10 transition-all duration-500 hover:bg-[#FF43AF]">Installation climatisation</ButtonLink>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="w-1/2 flex justify-center items-center relative  overflow-hidden rounded-2xl min-h-[500px]"
                            variants={imageVariants}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                className="w-[350px] h-[300px] overflow-hidden absolute -bottom-0 left-0 rounded-2xl z-10"
                                variants={{
                                    hidden: { opacity: 0, x: -50, y: 50 },
                                    visible: {
                                        opacity: 1,
                                        x: 0,
                                        y: 0,
                                        transition: { duration: 0.8, delay: 0.2 }
                                    }
                                }}
                            >
                                <img src="/assets/images/services/climatisation/1.png" alt="Service Image" className="w-full h-full object-cover  rounded-2xl transition-all duration-500 hover:scale-110 hover:rotate-5" />
                            </motion.div>
                            <motion.div
                                className="w-[330px] h-[270px] overflow-hidden rounded-2xl absolute top-0 right-0"
                                variants={{
                                    hidden: { opacity: 0, x: 50, y: -50 },
                                    visible: {
                                        opacity: 1,
                                        x: 0,
                                        y: 0,
                                        transition: { duration: 0.8, delay: 0.4 }
                                    }
                                }}
                            >
                                <img src="/assets/images/services/climatisation/2.jpg" alt="Service Image" className="w-full h-full object-cover  rounded-2xl transition-all duration-500 hover:scale-110 hover:rotate-5" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </>
    );
}

export default Service;