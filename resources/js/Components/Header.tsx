import Logo from "./Logo";
import Menu from "./Menu";
import { TruckIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface HeaderProps {
    isInsidePage?: boolean;
    isProjectPage?: boolean;
}

const Header = ({ isInsidePage=true, isProjectPage=false }: HeaderProps) => {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <section className={`w-full bg-[#222021] h-24 fixed flex items-center z-50 ${isSticky ? "drop-shadow-2xl" : ""}`}>
                <div className={`max-w-screen-xl w-full mx-auto flex items-center justify-between h-full gap-x-28`}>
                    <Logo />
                    <Menu isProjectPage={isProjectPage} />
                </div>
            </section>
            {
                isInsidePage && (
                    <section className="bg-[#00ADEF] h-12 w-full flex items-center justify-center relative top-24">
                        <span className="text-md text-white pr-3 relative after:absolute after:h-[18px] after:w-[1px] after:bg-white after:right-0 after:top-[3px]">Découvrez nos solutions de <b>débouchage de canalisations</b></span>
                        <span className="px-3 text-md text-white relative after:absolute after:h-[18px] after:w-[1px] after:bg-white after:right-0 after:top-[3px]">En ligne</span>
                        <span className="px-3 text-md text-[#222021] relative font-bold flex gap-x-2">Livraison 24h <TruckIcon/></span>
                    </section>
                )
            }
            {
                isProjectPage && (
                    <section className="relative h-14 w-full flex items-center justify-center top-24 overflow-hidden">
                        {/* Effet dégradé principal - couleurs pures et vives */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#404CE6] via-[#4F4FEF] to-[#696AD9]"></div>

                        {/* Effet glossy très subtil pour juste un peu de brillance */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/8 to-transparent"></div>


                        {/* Contenu */}
                        <div className="relative z-10 flex items-center justify-center">
                            <span className="text-md text-white pr-3 relative after:absolute after:h-[18px] after:w-[1px] after:bg-white/60 after:right-0 after:top-[3px] font-medium">
                               Disponible <b className="text-white font-bold">24h/24 et 7j/7</b>
                            </span>
                            <span className="px-3 text-md text-white relative after:absolute after:h-[18px] after:w-[1px] after:bg-white/60 after:right-0 after:top-[3px] font-medium">
                                Orléans
                            </span>
                            <span className="px-3 text-md text-white relative font-bold flex gap-x-2">
                                Intervention immédiate
                            </span>
                        </div>
                    </section>
                )
            }

        </>

     );
}

export default Header;