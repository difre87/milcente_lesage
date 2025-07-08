import { Link } from "@inertiajs/react";
import { ArrowRight, Star, ChevronRight, ChevronLeft } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useState } from 'react';

interface TestimonialProp {
    isPage?: boolean;
}

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Données d'exemple pour les témoignages
const testimonials = [
    {
        id: 1,
        name: "Marie Dubois",
        location: "Orléans",
        rating: 5,
        comment: "Service impeccable ! L'équipe Milcent Lesage a résolu notre problème de plomberie rapidement et proprement. Je recommande vivement !",
        service: "Réparation fuite"
    },
    {
        id: 2,
        name: "Pierre Martin",
        location: "Saran",
        rating: 5,
        comment: "Très professionnel, ponctuel et tarifs transparents. Excellent travail sur notre installation de salle de bain.",
        service: "Installation salle de bain"
    },
    {
        id: 3,
        name: "Sophie Leroy",
        location: "Fleury-les-Aubrais",
        rating: 5,
        comment: "Intervention d'urgence un dimanche, technicien très compétent. Problème résolu en moins d'une heure !",
        service: "Dépannage d'urgence"
    },
    {
        id: 4,
        name: "Jean-Claude Moreau",
        location: "Olivet",
        rating: 5,
        comment: "Travail soigné et équipe sympathique. Remplacement de chaudière effectué dans les temps et sans mauvaise surprise.",
        service: "Chauffage"
    }
];


const Testimonies = ({ isPage=false }: TestimonialProp) => {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSlideChange = (swiper: any) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-screen-xl mx-auto w-full">
                <div className="w-full flex justify-between items-center">
                    <h1 className={`font-bold text-4xl text-[#222021] ${isPage ? '!text-[#404CE6]' : ''}`}>Milcent Lesage, les avis de nos clients<br/> sur notre entreprise près d'Orléans</h1>
                    <div className="flex gap-x-5 items-center">
                        <Link href={"/contact"} className={`px-10 py-5 transition-all duration-500 bg-[#00ADEF] rounded-full text-white font-bold flex justify-center items-center text-sm gap-x-1 hover:bg-[#222021] group ${isPage ? '!bg-[#FF43AF]' : ''}`}>Rendez-vous <ArrowRight className="w-4 h-4 transition-all duration-150 ease-in-out group-hover:pl-1"/></Link>
                        <Link href={"/contact"} className="px-10 py-5 transition-all duration-500  text-[#222021] font-normal flex justify-center items-center text-sm gap-x-1 hover:bg-[#222021] hover:text-white rounded-full">Je contact un plombier</Link>
                    </div>
                </div>

                {/* Carousel des témoignages */}
                <div className="relative mt-20">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        pagination={{
                            clickable: true,
                            el: '.swiper-pagination-custom'
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        onSlideChange={handleSlideChange}
                        onSwiper={handleSlideChange}
                        className="testimonials-swiper"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="bg-white p-8  h-full">
                                    <div className="flex items-center gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>

                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        "{testimonial.comment}"
                                    </p>

                                    <div className="pt-4">
                                        <div className="font-semibold text-[#222021]">{testimonial.name}</div>
                                        <div className="text-sm text-gray-500">{testimonial.location}</div>
                                        <div className="text-sm text-[#00ADEF] font-medium mt-1">{testimonial.service}</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation personnalisée */}
                    <div className={`swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-[#222021] rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:dropshadow-2xl transition-all duration-500 ${isBeginning ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                        <ChevronRight className="w-5 h-5 text-white rotate-180" />
                    </div>
                    <div className={`swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-[#222021] rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:dropshadow-2xl transition-all duration-500 ${isEnd ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                        <ChevronRight className="w-5 h-5 text-white" />
                    </div>

                    {/* Pagination personnalisée */}
                    <div className="swiper-pagination-custom flex justify-center mt-8"></div>
                </div>
            </div>
        </section>
    );
}

export default Testimonies