import Logo from "./Logo";
import Menu from "./Menu";
import { MenuIcon, TruckIcon, X, XIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface HeaderProps {
    isInsidePage?: boolean;
    isProjectPage?: boolean;
}

const Header = ({ isInsidePage=true, isProjectPage=false }: HeaderProps) => {
    const [isSticky, setIsSticky] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSidebarToggle = () => {
        // Logic to open sidebar
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <>
            <section className={`w-full bg-[#222021] md:h-24 py-3 md:py-0 md:fixed flex items-center z-50 ${isSticky ? "drop-shadow-2xl" : ""}`}>
                <div className={`hidden max-w-screen-xl w-full mx-auto md:flex items-center justify-between h-full gap-x-28`}>
                    <Logo />
                    <Menu isProjectPage={isProjectPage} />
                </div>
                <div className="md:hidden w-full px-4 flex items-center justify-between">
                    <MenuIcon onClick={handleSidebarToggle} className="text-white w-10 h-10"/>
                    <Logo />
                </div>
            </section>
            {
                isInsidePage && (
                    <section className="bg-[#00ADEF] px-3 md:px-0 h-12 w-full flex items-center justify-center relative md:top-24">
                        <span className="text-[10px] md:text-lg text-white pr-3 relative after:absolute after:h-[18px] after:w-[1px] after:bg-white after:right-0 after:top-[3px]">Découvrez nos solutions de <b>débouchage de canalisations</b></span>
                        <span className="px-3 text-[10px] md:text-lg text-white relative after:absolute after:h-[18px] after:w-[1px] after:bg-white after:right-0 after:top-[3px]">En ligne</span>
                        <span className="px-3 text-[10px] md:text-lg text-[#222021] relative font-bold flex gap-x-2">Livraison 24h <TruckIcon/></span>
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
        <div className={`w-[250px] h-full fixed top-0 left-0 bg-[#222021] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <XIcon onClick={handleSidebarToggle} className="text-white w-8 h-8 m-4 cursor-pointer"/>
            <div className="mt-10 px-5">
                <Menu isProjectPage={isProjectPage} isMobile={true} />
            </div>
        </div>
        </>

     );
}

export default Header;