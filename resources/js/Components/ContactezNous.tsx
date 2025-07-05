import { Link } from "lucide";
import { ArrowRight, Phone } from "lucide-react";
import ButtonLink from "./ButtonLink";
import { motion } from "framer-motion";

const ContactezNous = () => {
    // Variants pour l'animation du conteneur
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

    // Variants pour l'image du technicien
    const technicianVariants = {
        hidden: {
            opacity: 0,
            x: -100,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1
        }
    };

    // Variants pour les éléments de texte
    const textVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0
        }
    };

    // Variants pour le titre principal coloré
    const titleVariants = {
        hidden: {
            opacity: 0,
            scale: 0.9,
            y: 20
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0
        }
    };

    // Variants pour les éléments de contact
    const contactVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0
        }
    };

    return (
        <motion.section
            className="bg-nous-contactez w-full relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <motion.img
                src="/assets/images/technicien-2.png"
                alt="Contactez Nous"
                className="absolute w-[550px] -top-[15%]"
                variants={technicianVariants}
                transition={{ duration: 1 }}
            />
            <div className="w-full h-full py-10 min-h-[300px] flex justify-end" style={{background: 'linear-gradient(to right, #222021 50%, rgba(34, 32, 33, 0.8) 75%, rgba(34, 32, 33, 0.5) 85%, rgba(34, 32, 33, 0.6) 100%)'}}>
                <div className="max-w-screen-xl w-full mx-auto h-full flex justify-end flex-col">
                    <div className="pl-[32rem] flex flex-col">
                        <motion.h2
                            className="text-white text-3xl font-bold"
                            variants={textVariants}
                            transition={{ duration: 0.8 }}
                        >
                            Besoin d'un plombier, chauffagiste<br/> ou un technicien en climatisation à Orléans ?
                        </motion.h2>
                        <motion.h2
                            className="text-4xl text-[#00ADEF] font-bold mt-15"
                            variants={titleVariants}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Contactez-nous
                        </motion.h2>
                        <motion.div
                            className="flex gap-x-10 items-center mt-5"
                            variants={contactVariants}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <motion.span
                                className="flex text-white text-light"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Phone strokeWidth={1} className="mr-2 w-6 h-6" /> Appelez le&nbsp; <b> &nbsp;02 38 73 24 07</b>
                            </motion.span>
                            <span className="text-white">ou</span>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ButtonLink href="" className="bg-[#00ADEF] text-white text-sm font-bold flex justify-center items-center rounded-full px-4 py-3 transition-all duration-300 hover:bg-[#FF43AF]">
                                    Rendez-vous en ligne <ArrowRight />
                                </ButtonLink>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
     );
}

export default ContactezNous;