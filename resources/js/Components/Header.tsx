import Logo from "./Logo";
import Menu from "./Menu";
import { TruckIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface HeaderProps {
    isInsidePage?: boolean;
}

const Header = ({ isInsidePage=true }: HeaderProps) => {
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
                <div className="max-w-screen-xl mx-auto flex items-center justify-between h-full gap-x-28">
                    <Logo />
                    <Menu />
                </div>
            </section>
            {
                isInsidePage && (
                    <section className="bg-[#00ADEF] h-12 w-full flex items-center justify-center">
                        <span className="text-md text-white pr-3 relative after:absolute after:h-[18px] after:w-[1px] after:bg-white after:right-0 after:top-[3px]">Découvrez nos solutions de <b>débouchage de canalisations</b></span>
                        <span className="px-3 text-md text-white relative after:absolute after:h-[18px] after:w-[1px] after:bg-white after:right-0 after:top-[3px]">En ligne</span>
                        <span className="px-3 text-md text-[#222021] relative font-bold flex gap-x-2">Livraison 24h <TruckIcon/></span>
                    </section>
                )
            }

        </>

     );
}

export default Header;