import { ourServices } from "../types/data";
import OurServiceItem from "./OurServiceItem";
import Title from "./Title";
import { motion } from "framer-motion";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay,  Navigation} from "swiper/modules";
import { useRef, useState } from 'react';
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";


const OurService = () => {
    // Variants pour l'animation du conteneur principal
    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    // Variants pour l'animation du titre
    const titleVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0
        }
    };

    // Variants pour l'animation de la grille des services
    const gridVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    // Variants pour chaque item de service
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 40,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1
        }
    };

    return (
        <section className="w-full md:py-20 py-12 px-10 md:px-0 bg-[#00ADEF0D]">
            <motion.div
                className="max-w-screen-xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div
                    className="flex justify-center items-center"
                    variants={titleVariants}
                    transition={{ duration: 0.8 }}
                >
                    <Title title="Nos prestations" />
                </motion.div>
                {/* <motion.div
                    className="grid grid-cols-3 gap-x-15 px-20 mt-20"
                    variants={gridVariants}
                > */}
                    {/* Wrapper pour positionner navigation custom */}
                    <div className="relative md:mt-20 mt-10">
                        {/* Boutons de navigation personnalisés */}
                        <div className="absolute w-full flex justify-center gap-3 md:-bottom-28 -bottom-18   px-20 z-20">
                            <button ref={null} aria-label="Previous" className="ourservices-prev cursor-pointer left-1/2 -bottom-26 -translate-y-10 z-20 bg-[#222021] text-[#00ADEF] rounded-full w-10 h-10 shadow-lg flex items-center justify-center hover:scale-105 transition-transform">
                                <ChevronRight className="w-5 h-5 text-white rotate-180" />
                            </button>
                            <button ref={null} aria-label="Next" className="ourservices-next cursor-pointer right-[42%] -bottom-26 -translate-y-10 z-20 bg-[#222021] text-[#00ADEF] rounded-full w-10 h-10 shadow-lg flex items-center justify-center hover:scale-105 transition-transform">
                                <ChevronRight className="w-5 h-5 text-white" />
                            </button>
                        </div>


                        <Swiper
                            slidesPerView={3}
                            spaceBetween={50}
                            modules={[Autoplay, Navigation]}
                            loop={true}
                            navigation={{
                                prevEl: '.ourservices-prev',
                                nextEl: '.ourservices-next'
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },
                                640: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                    {
                        ourServices.map((service, index) => (
                            <SwiperSlide key={index}>
                                <OurServiceItem
                                    title={service.title}
                                    description={service.description}
                                    icon={service.icon}
                                    link={service.url}
                                    linkTitle={service.linkTitle}
                                />
                            </SwiperSlide>

                        ))
                    }
                        </Swiper>
                    </div>
                {/* </motion.div> */}
            </motion.div>
        </section>
     );
}

export default OurService;