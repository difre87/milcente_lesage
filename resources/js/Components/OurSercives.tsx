import { ourServices } from "../types/data";
import OurServiceItem from "./OurServiceItem";
import Title from "./Title";
import { motion } from "framer-motion";

const OurService = () => {
    // Variants pour l'animation du conteneur principal
    const containerVariants = {
        hidden: { opacity: 0 },
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
        <section className="w-full py-20 bg-[#00ADEF0D]">
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
                <motion.div
                    className="grid grid-cols-3 gap-x-15 px-20 mt-20"
                    variants={gridVariants}
                >
                    {
                        ourServices.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                transition={{ duration: 0.6 }}
                            >
                                <OurServiceItem
                                    title={service.title}
                                    description={service.description}
                                    icon={service.icon}
                                    link={service.url}
                                    linkTitle={service.linkTitle}
                                />
                            </motion.div>
                        ))
                    }
                </motion.div>
            </motion.div>
        </section>
     );
}

export default OurService;