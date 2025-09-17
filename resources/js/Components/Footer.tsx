import ButtonLink from "./ButtonLink";
import Logo from "./Logo";
import { FaFacebookF,FaInstagram,FaLinkedinIn,FaSquareYoutube   } from "react-icons/fa6";

interface FooterProps {
    isPage?: boolean;
}

const Footer = ({ isPage }: FooterProps) => {
    return (
        <section className="w-full bg-[#222021] py-10  px-4 md:px-0">
            <div className="max-w-screen-xl mx-auto w-full">
                <div className="w-full md:grid grid-cols-3 flex flex-col gap-10">
                    <div className="flex flex-col">
                        <Logo />
                        <div className="flex flex-col gap-y-1 mt-5">
                            <span className="text-white md:text-lg text-sm">14 Rue de Muids - 45140 - Ingré</span>
                            <span className="text-white md:text-lg text-sm">02 38 73 24 07</span>
                        </div>
                        <div className="flex gap-x-5 mt-5">
                            <a href="" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-lg bg-white flex justify-center items-center ${isPage ? 'text-[#404CE6]' : 'text-[#00ADEF]'}`}><FaFacebookF/></a>
                            <a href="" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-lg bg-white flex justify-center items-center ${isPage ? 'text-[#404CE6]' : 'text-[#00ADEF]'}`}><FaInstagram/></a>
                            <a href="" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-lg bg-white flex justify-center items-center ${isPage ? 'text-[#404CE6]' : 'text-[#00ADEF]'}`}><FaLinkedinIn/></a>
                            <a href="" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-lg bg-white flex justify-center items-center ${isPage ? 'text-[#404CE6]' : 'text-[#00ADEF]'}`}><FaSquareYoutube/></a>
                        </div>

                    </div>
                    <div className="flex flex-col">
                        <h4 className="text-[#F9F9FF] md:text-2xl text-xl font-bold pb-6 pt-5">Horaires</h4>
                        <div className="w-full grid grid-cols-2 gap-4 mt-5">
                            <span className="text-white md:text-lg text-md">Lundi - Jeudi</span>
                            <span className="text-white md:text-md text-[12px]">8:30-12:00 | 13:00-17:00</span>
                            <span className="text-white md:text-lg text-md">Vendredi</span>
                            <span className="text-white md:text-md text-[12px]">8:30-12:00</span>
                            <span className="text-white md:text-lg text-md">Samedi - Dimanche</span>
                            <span className="text-white md:text-md text-[12px]">Fermé</span>
                        </div>
                    </div>
                    <div className=" flex justify-end  ">
                        <ButtonLink href="/contact" className={`bg-[#00ADEF] h-14 flex text-sm justify-between items-center text-white text-lg font-bold px-5 py-5 rounded-full  mt-8 text-right transition-all duration-500 hover:bg-[#FF43AF] ${isPage ? '!bg-[#404CE6]' : ''}`}>Je contacte un plombier</ButtonLink>
                    </div>
                </div>
                <div className="w-full mt-10 border-t border-[#D4D2E3] pt-5 flex justify-center flex-col items-center">
                    <span className={`text-[#00ADEF] md:text-sm text-[12px] ${isPage ? '!text-[#FF43AF]' : ''}`}>L'énergie est notre avenir, économisons-là !</span>
                    <p className="text-white text-sm md:text-sm text-[12px] text-center">Tous droits réservés © 2025 | SAS MILCENT LESAGE</p>
                    <p className="text-white text-sm md:text-sm text-[12px] text-center">Mentions légales - Vie privée - infos cookies - Réalisé par PerformanceBusiness.com</p>
                </div>
            </div>
        </section>
     );
}

export default Footer;