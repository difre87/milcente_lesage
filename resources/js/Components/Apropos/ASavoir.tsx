
import { motion } from "framer-motion";

const ASavoir = () => {
    // Variants d'animation pour les éléments
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.3
            }
        }
    };

    const titleVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8
            }
        }
    };

    const iconsContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
            }
        }
    };

    const iconVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    const textVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8
            }
        }
    };

    const buttonVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    };
    return (
        <section className="w-full bg-white py-20 relative">
            <div className="max-w-screen-xl mx-auto">
                <motion.div
                    className="flex justify-center items-center flex-col gap-y-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div variants={titleVariants}>
                        <h2 className="text-[#00ADEF] text-4xl font-light">En savoir plus sur <b className="font-bold">nos certifications</b></h2>
                    </motion.div>

                    <motion.div
                        className="flex gap-15"
                        variants={iconsContainerVariants}
                    >
                        <motion.div
                            className="w-24 h-24 flex justify-center items-center"
                            variants={iconVariants}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                            <img src="/assets/images/about/1.png" alt="Plombier" className="object-cover" />
                        </motion.div>

                        <motion.div
                            className="w-36 h-24 flex justify-center items-center"
                            variants={iconVariants}
                            whileHover={{ scale: 1.1, rotate: -5 }}
                        >
                            <img src="/assets/images/about/2.png" alt="Plombier" className="object-cover" />
                        </motion.div>

                        <motion.div
                            className="w-24 h-24 flex justify-center items-center"
                            variants={iconVariants}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                            <img src="/assets/images/about/3.png" alt="Plombier" className="object-cover" />
                        </motion.div>

                        <motion.div
                            className="w-20 h-20 flex justify-center items-center"
                            variants={iconVariants}
                            whileHover={{ scale: 1.1, rotate: -5 }}
                        >
                            <img src="/assets/images/about/4.png" alt="Plombier" className="object-cover" />
                        </motion.div>
                    </motion.div>

                    <motion.div className="w-[1000px] flex flex-col justify-between items-center gap-y-5" variants={textVariants}>
                        <p className="text-center text-[#222021] text-sm font-light">
                           Milcent Lesage est qualifié Qualigaz, PGP (Professionnel Gaz Propane) et PGN (Professionnel Gaz Naturel). Ces certifications sont une garantie pour chacun de nos clients et prouvent notre maîtrise des installations gaz, pour la plomberie, comme pour le chauffage.
                        </p>
                        <p className="text-center text-[#222021] text-sm font-light">
                           Notre entreprise est également qualifiée RGE (Reconnue Garante de l’Environnement). Vos travaux énergétiques peuvent être financés en partie ou complètement par l’État.
                        </p>
                        <p className="text-center text-[#222021] text-sm font-light">
                          Pour savoir si votre projet est éligible, nous vous invitons à vous rapprocher de notre équipe afin d’étudier les modalités d’attribution.
                        </p>
                    </motion.div>


                </motion.div>
            </div>
            <div className="absolute w-[200px] h-[200px] bottom-0 right-0">
                <img src="/assets/images/water.png" alt="Certification" className="w-full h-full object-cover -rotate-90" />
            </div>
        </section>
     );
}

export default ASavoir;