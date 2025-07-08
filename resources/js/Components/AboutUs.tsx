import ButtonLink from "./ButtonLink";
import Title from "./Title";
import { motion } from "framer-motion";

const AboutUs = () => {
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
        <section className="w-full py-20 bg-white">
            <div className="max-w-screen-xl mx-auto">
                <motion.div
                    className="flex justify-center items-center flex-col gap-y-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div variants={titleVariants}>
                        <Title title="Plombiers, Chauffagiste à Orléans" />
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

                    <motion.div className="w-[900px]" variants={textVariants}>
                        <p className="text-center text-[#222021] text-sm font-light">
                            Grâce à des compétences et un sens du service irréprochables, nous apportons notre expertise et notre savoir-faire sur vos projets de plomberie en neuf ou rénovation, pour la création de salle de bains ou encore en climatisation. Nos certifications vous garantissent un travail exécuté dans les règles de l'art par nos équipes de plombiers-chauffagistes.
                        </p>
                    </motion.div>

                    <motion.div variants={buttonVariants}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ButtonLink href="/contact" className="bg-[#00ADEF] text-white px-6 py-4 font-bold text-sm rounded-full hover:bg-[#008BBF] transition-all duration-500">
                                Je contacte un plombier
                            </ButtonLink>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
     );
}

export default AboutUs;