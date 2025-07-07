import ButtonLink from "../Components/ButtonLink";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import SliderDebouchage from "../Components/SliderDebouchage";
import Testimonies from "../Components/Testimonies";
import Title from "../Components/Title";
import { dataDebouchage, dataIntervention } from "../types/data";
import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";


const DebouchageCanalisation = () => {
    return (
        <>
            <Header isInsidePage={false} isProjectPage={true} />
            <main className="relative top-14">
                <SliderDebouchage />
                <motion.section
                    className="w-full  bg-[#C7CFF61A] py-20 relative top-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.img
                        src="/assets/images/debouchage/left.svg"
                        alt="Technicien"
                        className="absolute w-[450px] top-0 left-0"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    />
                    <motion.img
                        src="/assets/images/debouchage/right.svg"
                        alt="Technicien"
                        className="absolute w-[500px] bottom-0 right-0"
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    />
                    <motion.div
                        className="max-w-screen-xl mx-auto px-4 w-full"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <Title title="Nos différents types de canalisation" className="text-[#404CE6] pb-6" />
                        <div className="w-[800px] mx-auto flex justify-center items-center">
                            <p className="text-center">
                                Nos experts introduisent une caméra endoscopique, d'une longueur de 30 mètres,
                                à l'intérieur des parois pour l'inspection des canalisations et la visualisation de la nature du bouchon.
                                Ces informations essentielles déterminent le type d'intervention à mettre en place.
                            </p>
                        </div>
                        <div className="w-full grid grid-cols-3 gap-16 px-20 mt-10">
                            {
                                dataDebouchage.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white rounded-3xl drop-shadow-md px-6  h-96 hover:drop-shadow-2xl hover:bg-[#C7CFF6] transition-all duration-500 flex flex-col justify-center items-center gap-y-5"
                                        initial={{ y: 80, opacity: 0, scale: 0.9 }}
                                        whileInView={{ y: 0, opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -10, scale: 1.05 }}
                                    >
                                        <img src={item.icon} alt={item.title} className="w-20 h-20 mb-4" />
                                        <h3 className="text-3xl font-bold">{item.title}</h3>
                                        <p className="text-[#222021] text-center text-sm">{item.description}</p>
                                    </motion.div>
                                ))
                            }
                        </div>
                        <motion.div
                            className="w-full flex justify-center items-center mt-10"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <motion.a
                                href="/contact"
                                className="bg-[#404CE6] px-5 py-4 font-semibold transition-all duration-300 hover:drop-shadow-2xl hover:bg-[#FF43AF] text-white rounded-full flex justify-center items-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Demande d'intervention
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </motion.section>
                <Testimonies isPage={true} />
                <motion.section
                    className="w-full  bg-[#C7CFF61A] py-20 relative top-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.img
                        src="/assets/images/debouchage/left.svg"
                        alt="Technicien"
                        className="absolute w-[450px] top-0 left-0"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    />
                    <motion.img
                        src="/assets/images/debouchage/right.svg"
                        alt="Technicien"
                        className="absolute w-[500px] bottom-0 right-0"
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    />
                    <motion.div
                        className="max-w-screen-xl mx-auto px-4 w-full"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <Title title="Nos différents types d'interventions" className="text-[#404CE6] pb-6" />

                        <div className="w-full grid grid-cols-3 gap-16 px-20 mt-10">
                            {
                                dataIntervention.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white rounded-3xl overflow-hidden drop-shadow-md group  h-96 hover:drop-shadow-3xl transition-all duration-500 flex flex-col justify-center items-center gap-y-5"
                                        initial={{ y: 80, opacity: 0, scale: 0.9 }}
                                        whileInView={{ y: 0, opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.03 }}
                                    >
                                        <img src={item.icon} alt={item.title} className="object-cover w-full h-full rounded-3xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-5" />
                                        <div className="absolute top-0 left-0 w-full h-full rounded-3xl bg-gradient-to-t from-[#000000] to-[#0000005] rounded-t-3xl">
                                            <div className="w-full h-full relative z-10 flex flex-col justify-between p-6">
                                                <a href="/contact" className="flex w-[200px] px-3 py-4 bg-white text-[#FF43AF] rounded-full text-sm font-bold transition-all duration-500 hover:bg-[#FF43AF] hover:text-white">Demande d'intervention</a>
                                                <div className="flex flex-col gap-y-2">
                                                    <h3 className="text-3xl font-bold text-white">{item.title}</h3>
                                                    <p className=" text-white  text-sm font-light">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </motion.div>
                </motion.section>
                <motion.section
                    className="bg-nous-contactez w-full relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.img
                        src="/assets/images/debouchage/technicien.png"
                        alt="Contactez Nous"
                        className="absolute w-[550px] bottom-0 left-[15%]"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    />
                    <div className="w-full h-full py-10 min-h-[300px] flex justify-end bg-gradient-to-r from-[#181652] to-[#7B179098]">
                        <div className="max-w-screen-xl w-full mx-auto h-full flex justify-end flex-col">
                            <motion.div
                                className="pl-[32rem] flex flex-col"
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-white text-3xl font-bold">
                                    Nos Avantages
                                </h2>
                                <ul className="list-disc pl-5 text-white text-sm font-light mt-2">
                                    <li>Prise de rendez-vous en 20 minutes</li>
                                    <li>Intervention dans les 24 heures</li>
                                    <li>Devis offert</li>
                                    <li>Appel et dépannage 7j/7 et 24h/24</li>
                                    <li>Tarifs fixes et sans surprise</li>
                                    <li>Pas de frais de déplacement ni de majoration le soir, week-end ou jour férié</li>
                                </ul>
                                <div className="flex flex-col gap-x-10  mt-5">
                                    <h4 className="text-[#FF43AF] text-2xl font-bold">Contactez-nous</h4>
                                    <div className="flex items-center gap-x-5 mb-4">
                                        <span className="flex text-white text-light">
                                            <Phone strokeWidth={0.6} className="mr-2 w-6 h-6" /> Appelez le&nbsp; <b> &nbsp;02 38 73 24 07</b>
                                        </span>
                                        <span className="text-white">ou</span>
                                        <div>
                                            <ButtonLink href="" className="bg-[#FF43AF] text-white text-sm font-bold flex justify-center items-center rounded-full px-4 py-4 transition-all duration-300 hover:bg-white hover:text-[#FF43AF]">
                                                Rendez-vous en ligne <ArrowRight className="w-4 h-4 ml-2" />
                                            </ButtonLink>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>
                <motion.section
                    className="w-full bg-[#F9F9FF] py-20 relative"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="max-w-screen-xl mx-auto px-4 w-full"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-full grid grid-cols-2 gap-26 items-center">
                            <motion.div
                                className="h-[580px]"
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <img src="/assets/images/debouchage/voiture-intervention-2.png" alt="" className="w-full h-full object-cover rounded-3xl" />
                            </motion.div>
                            <motion.div
                                className="flex flex-col gap-y-5"
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-[#404CE6] text-3xl font-bold">Milcent Lesage, votre expert<br /> en débouchage de canalisation à Orléans et ses environs</h2>
                                <p className="text-[#222021] text-sm font-light">
                                    Faites appel à Milcent Lesage, votre spécialiste du débouchage en urgence dans toute la région orléanaise.
                                    📍 Que vous soyez dans le centre-ville d'Orléans, du côté de Saint-Marceau, Saint-Jean-de-Braye, ou encore dans une zone artisanale comme celle de Saran, Jérôme Milcent, avec son pick-up rose et bleu parfaitement équipé, intervient rapidement pour vous dépanner.
                                </p>
                                <p className="text-[#222021] text-sm font-light">
                                    🚐 Intervention rapide dans tout le Loiret : Orléans, Fleury-les-Aubrais, Olivet, Saint-Jean-le-Blanc, Ingré, Saint-Pryvé-Saint-Mesmin, La Chapelle-Saint-Mesmin, Chécy, Meung-sur-Loire, Jargeau, Sandillon, Saint-Denis-en-Val, Beaugency, et bien d'autres communes autour d'Orléans.
                                </p>
                                <p className="text-[#222021] text-sm font-light">
                                    👉 Expertise, réactivité, et bonne humeur : c'est la marque de fabrique de votre artisan déboucheur local !
                                </p>
                                <div className="flex">
                                    <ButtonLink href="/contact" className="bg-[#FF43AF] text-white text-sm font-bold flex justify-center items-center rounded-full px-4 py-4 transition-all duration-300 hover:bg-white hover:text-[#FF43AF] hover:drop-shadow-2xl">
                                        Demander une intervention
                                    </ButtonLink>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.section>
                <Testimonies isPage={true} />
                <Footer isPage={true} />
            </main>
        </>

    );
}

export default DebouchageCanalisation;