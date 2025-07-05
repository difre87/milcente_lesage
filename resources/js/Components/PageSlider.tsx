import { ArrowDown } from "lucide-react";
import ButtonLink from "./ButtonLink";
import { motion } from "framer-motion";

const PageSlider = () => {
    const scrollToNextSection = () => {
        // Cherche d'abord par ID, puis par classe, puis par sélecteur générique
        const nextSection = document.getElementById('apropos-text') ||
                           document.querySelector('[data-component="apropos-text"]') ||
                           document.querySelector('section:nth-of-type(2)');

        if (nextSection) {
            // Calcule la position avec un offset pour un meilleur affichage
            const offsetTop = nextSection.offsetTop - 80; // 80px d'offset depuis le haut
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="w-full h-screen bg-[url('/resources/images/bg-apropos.jpg')] bg-cover bg-center relative after:absolute after:w-full after:h-full after:bg-black/60 after:top-0 after:left-0 overflow-hidden">
            <div className="w-full h-full flex justify-center items-center flex-col relative z-10">
                <h1 className="text-6xl text-white font-bold uppercase py-2">Milcent Lesage</h1>
                <span className="text-5xl text-white font-medium">artisans plombiers-chauffagistes à Ingré</span>
                <ButtonLink href="/contact" className="bg-[#00ADEF] rounded-full mt-20 flex justify-center items-center text-md font-bold py-5 px-6 text-white transition-all duration-500 hover:bg-[#FF43AF]">Contactez notre équipe</ButtonLink>
                <motion.button
                    onClick={scrollToNextSection}
                    className="w-14 h-14 cursor-pointer rounded-full border-[3px] border-white flex justify-center items-center transition-all duration-500 hover:scale-110 hover:bg-white absolute bottom-10 group"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.8, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    whileHover={{
                        scale: 1.3,
                        transition: { duration: 0.3 }
                    }}
                    whileTap={{
                        scale: 0.9,
                        transition: { duration: 0.1 }
                    }}
                >
                    <motion.div
                        animate={{
                            y: [0, -3, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <ArrowDown className="w-8 h-8 text-white group-hover:text-[#222021]" />
                    </motion.div>
                </motion.button>
            </div>

        </section>
     );
}

export default PageSlider;