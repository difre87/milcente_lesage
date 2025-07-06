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
        <section className="w-full h-[600px] bg-slider relative top-10 after:absolute after:w-full after:h-full after:bg-black/60 after:top-0 after:left-0 overflow-hidden">
            <div className="w-[480px] h-20 rounded-full bg-[#00ADEF33] absolute z-10 -rotate-45 -right-30 top-[20%]"></div>
            <div className="w-[420px] h-20 rounded-full bg-[#00ADEF33] absolute z-10 -rotate-45 -right-30 top-[35%]"></div>
            <div className="w-[350px] h-20 rounded-full bg-[#00ADEF33] absolute z-10 -rotate-45 -right-30 top-[50%]"></div>
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
                        Votre entreprise de <br/>plomberie à Ingré
                    </motion.span>

                    <motion.p
                        className="font-light text-lg text-white mt-6"
                        variants={itemVariants}
                    >
                        Milcent Lesage, entreprise familiale de plomberie,<br/> existe depuis 1994 à Orléans.
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
                                Je contact un plombier <ArrowRight />
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href={""} className="bg-[#FF43AF] border-[2px] border-white rounded-full px-8 flex py-4 justify-center items-center gap-x-2 text-white transition-all duration-500 hover:bg-white hover:text-[#00ADEF]">
                                Débouchage en urgence
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
            <motion.img
                src="/assets/images/technicien.png"
                alt="Slider Background"
                className="absolute w-[500px] top-10 right-50 z-10"
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

export default Slider;