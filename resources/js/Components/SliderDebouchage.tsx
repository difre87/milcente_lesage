import { Link } from "@inertiajs/react";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

const SliderDebouchage = () => {
    // Variants d'animation pour les éléments
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8
            }
        }
    };

    const titleVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    };

    const subtitleVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                delay: 0.3
            }
        }
    };

    const buttonVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: 0.8
            }
        }
    };

    const imageVariants = {
        hidden: { x: 200, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1.2,
                delay: 0.5
            }
        }
    };
    return (
        <section className="w-full h-[600px] overflow-hidden bg-slider-debouchage relative top-10 after:absolute after:w-full after:h-full after:bg-black/60 after:top-0 after:left-0">

            <div className="max-w-screen-xl mx-auto h-full relative z-10">
                <motion.div
                    className="flex flex-col justify-center h-full text-white"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-4 uppercase"
                        variants={titleVariants}
                    >
                        Milcent Lesage
                    </motion.h1>

                    <motion.span
                        className="text-6xl font-light"
                        variants={subtitleVariants}
                    >
                        débouchage de  <br/> canalisation à Orléans
                    </motion.span>

                    <motion.p
                        className="font-light text-md text-white mt-6"
                        variants={itemVariants}
                    >
                        Contactez-nous pour un débouchage de canalisation à Orléans.
                    </motion.p>
                    <motion.p
                        className="font-light text-md text-white mt-6"
                        variants={itemVariants}
                    >
                        Milcent Lesage est disponible au <b className="text-[#FF43AF] font-bold">02 38 73 24 07</b>
                    </motion.p>

                    <motion.div
                        className="flex gap-x-5 mt-10"
                        variants={buttonVariants}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href={""} className="bg-white rounded-full px-8 flex py-4 justify-center items-center gap-x-2 text-[#00ADEF] transition-all duration-500 hover:bg-[#FF43AF] hover:text-white">
                                Rendez-vous <ArrowRight strokeWidth={0.6} className="w-4 h-4" />
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href={""} className="bg-transparent border-[2px] border-white rounded-full px-8 flex py-4 justify-center items-center gap-x-2 text-white transition-all duration-500 hover:bg-white hover:text-[#00ADEF]">
                                Débouchage en urgence
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
            <div className="absolute w-[500px] h-[400px] z-20 -bottom-5 bg-white rounded-[20px] right-30  flex flex-col gap-y-5 justify-center items-center p-10">
                <h2 className="font-bold italic text-3xl pt-20">Débouchage de canalisation</h2>
                <span className="text-4xl font-bold italic">24h/24 et 7j/7</span>
                <p className="text-md font-light">WC - Evier / Lavabos - Baignoire & Douche</p>
                <div className="rounded-full bg-gradient-to-br from-[#404CE6] to-[#696AD9] px-2 py-2 w-[360px] flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <Phone  className="w-6 h-6 text-[#434EE5]" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center ml-3 text-white">
                        <span className="text-md font-light">Demande d'intervention</span>
                        <span className="text-lg font-bold uppercase">Rappel gratuit et immédiat</span>
                    </div>
                </div>
                <div className="flex items-center ">
                    <Phone  className="w-4 h-4 text-[#000000]" />
                    <span className="text-lg font-light text-[#FF43AF]"><b className="font-bold">02 38 73 24 07</b> (Appel direct)</span>
                </div>
            </div>
            <motion.img
                src="/assets/images/debouchage/voiture-intervention.png"
                alt="Slider Background"
                className="absolute w-[600px] top-10 right-20 z-10"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 }
                }}
            />
            <motion.img
                src="/assets/images/debouchage/design.svg"
                alt="Slider Background"
                className="absolute w-[1000px] -top-[33%] right-0 z-5"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 }
                }}
            />
        </section>
     );
}

export default SliderDebouchage;