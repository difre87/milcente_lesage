import { Link } from "@inertiajs/react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Slider = () => {
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
        <>
            <section className="w-full md:h-[600px] h-[400px] px-3 md:px-0 bg-slider relative md:top-10 after:absolute after:w-full after:h-full after:bg-black/60 after:top-0 after:left-0 overflow-hidden">
                <div className="w-[250px] md:w-[480px] h-12 md:h-20 rounded-full bg-[#00ADEF33] absolute z-10 -rotate-45 -right-30 top-[20%]"></div>
                <div className="w-[200px] md:w-[420px] h-12 md:h-20 rounded-full bg-[#00ADEF33] absolute z-10 -rotate-45 -right-30 top-[35%]"></div>
                <div className="w-[160px] md:w-[350px] h-12 md:h-20 rounded-full bg-[#00ADEF33] absolute z-10 -rotate-45 -right-30 top-[50%]"></div>
                <div className="max-w-screen-xl mx-auto h-full relative z-10">
                    <motion.div
                        className="flex flex-col justify-center h-full text-white"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            className="text-xl md:text-6xl font-bold mb-4 uppercase"
                            variants={titleVariants}
                        >
                            Milcent Lesage
                        </motion.h1>

                        <motion.span
                            className="md:text-6xl text-4xl font-light"
                            variants={subtitleVariants}
                        >
                            Votre entreprise de <br/>plomberie à Ingré
                        </motion.span>

                        <motion.p
                            className="font-light text-sm md:text-lg text-white mt-6"
                            variants={itemVariants}
                        >
                            Milcent Lesage, entreprise familiale de plomberie,<br/> existe depuis 1994 à Orléans.
                        </motion.p>

                        <motion.div
                            className="flex flex-col md:flex-row gap-y-5 gap-x-5 mt-10"
                            variants={buttonVariants}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href={"/contact"} className="bg-white w-[200px] md:w-auto text-[12px] md:text-lg rounded-full  md:px-8 flex md:py-4 py-3 justify-center items-center gap-x-2 text-[#00ADEF] transition-all duration-500 hover:bg-[#FF43AF] hover:text-white">
                                    Je contact un plombier <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href={"/debouchage-canalisation"} className="bg-[#FF43AF] w-[200px] md:w-auto text-[12px] md:text-lg border-[2px] border-white rounded-full md:px-8 flex py-3 md:py-4 justify-center items-center gap-x-2 text-white transition-all duration-500 hover:bg-white hover:text-[#00ADEF]">
                                    Débouchage en urgence
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
                <motion.img
                    src="/assets/images/technicien.png"
                    alt="Slider Background"
                    className="absolute w-[150px] md:w-[500px] top-50 right-0 md:top-10 md:right-50 z-10"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.3 }
                    }}
                />
            </section>

            {/* Bouton fixe animé pour débouchage */}
            <motion.div
                className="fixed right-6 top-1/2 -translate-y-1/2 z-50"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 2 }}
            >
                <div className="relative group">
                    {/* Effet de pulsation - derrière le bouton */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FF43AF]/30 to-[#404CE6]/30 pointer-events-none"
                        animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.7, 0, 0.7]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Lien principal au-dessus de tout */}
                    <motion.div
                        whileHover={{
                            scale: 1.1,
                            rotate: [0, -5, 5, 0]
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="/debouchage-canalisation"
                            className="relative z-10 flex flex-col items-center justify-center w-24 h-24 bg-gradient-to-br from-[#FF43AF] to-[#404CE6] rounded-full shadow-2xl text-white font-bold text-xs text-center transition-all duration-300 group-hover:shadow-[#FF43AF]/50 group-hover:shadow-3xl"
                        >
                            <motion.div
                                animate={{
                                    y: [0, -3, 0],
                                    rotate: [0, 10, -10, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="text-2xl mb-1 pointer-events-none"
                            >
                                🚰
                            </motion.div>
                            <span className="leading-tight text-[10px] pointer-events-none">Débouchage ?<br/>Cliquez ici!</span>
                        </Link>
                    </motion.div>

                    {/* Tooltip au survol */}
                    <motion.div
                        className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                        initial={{ x: 10, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                    >
                        Débouchage d'urgence 24h/7j
                        <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
                    </motion.div>
                </div>
            </motion.div>
        </>
     );
}

export default Slider;