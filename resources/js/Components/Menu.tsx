import { Link, usePage } from "@inertiajs/react";
import { ChevronDown } from "lucide-react";
import { debouchageMenus, menus } from "../types/data";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MenuProps {
    isProjectPage?: boolean;
    isMobile?: boolean;
}

const Menu = ({ isProjectPage=false, isMobile=false }: MenuProps) => {
    const { url } = usePage();
    const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);
    const [openMobileMenu, setOpenMobileMenu] = useState<number | null>(null);
    const timeoutRef = useRef<number | null>(null);
    const menuSite = isProjectPage==true ? debouchageMenus : menus;

    const isActive = (menuUrl: string) => {
        if (menuUrl === '/') {
            return url === '/';
        }
        return url.startsWith(menuUrl);
    };

    const hasSubmenus = (menu: any) => {
        return (menu as any).submenus && (menu as any).submenus.length > 0;
    };

    const handleMouseEnter = (index: number) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setHoveredMenu(index);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setHoveredMenu(null);
        }, 150); // Délai de 150ms avant de fermer
    };

    const handleMobileMenuClick = (index: number) => {
        setOpenMobileMenu(openMobileMenu === index ? null : index);
    };

    // Fermer le menu mobile quand on passe en desktop
    useEffect(() => {
        if (!isMobile) {
            setOpenMobileMenu(null);
        }
    }, [isMobile]);

    // Variants pour l'animation du sous-menu
    const submenuVariants = {
        hidden: {
            opacity: 0,
            y: -10,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                staggerChildren: 0.05
            }
        },
        exit: {
            opacity: 0,
            y: -10,
            scale: 0.95
        }
    };

    // Variants pour chaque item du sous-menu
    const submenuItemVariants = {
        hidden: {
            opacity: 0,
            x: -10
        },
        visible: {
            opacity: 1,
            x: 0
        }
    };

    return (
        <div className={`flex-1 flex flex-col md:flex-row md:items-center  gap-x-10 ${isProjectPage ? "justify-end" : "justify-between"}`}>
            <nav className={`flex md:flex-row flex-col gap-x-12 ${isMobile ? 'gap-y-2' : 'gap-y-4'} md:gap-y-0 mb-10 md:mb-0 md:items-center justify-center`}>
                {
                    menuSite.map((menu, index) => (
                        <div
                            key={index}
                            className="relative"
                            onMouseEnter={() => !isMobile && handleMouseEnter(index)}
                            onMouseLeave={() => !isMobile && handleMouseLeave()}
                        >
                            {hasSubmenus(menu) && isMobile ? (
                                // Sur mobile, afficher un bouton cliquable pour les menus avec sous-menus
                                <button
                                    onClick={() => handleMobileMenuClick(index)}
                                    className={`transition-all duration-500 text-md flex items-center gap-1 w-full text-left ${
                                        isActive(menu.url)
                                            ? "text-[#00ADEF] font-bold"
                                            : "text-white hover:text-[#00ADEF]"
                                    }`}
                                >
                                    {menu.title}
                                    <motion.div
                                        animate={{
                                            rotate: openMobileMenu === index ? 180 : 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown className="w-4 h-4" />
                                    </motion.div>
                                </button>
                            ) : (
                                // Sur desktop ou menu sans sous-menus, afficher un lien normal
                                <Link
                                    href={menu.url}
                                    className={`transition-all duration-500 text-md flex items-center gap-1 ${
                                        isActive(menu.url)
                                            ? "text-[#00ADEF] font-bold"
                                            : "text-white hover:text-[#00ADEF]"
                                    }`}
                                >
                                    {menu.title}
                                    {hasSubmenus(menu) && !isMobile && (
                                        <motion.div
                                            animate={{
                                                rotate: hoveredMenu === index ? 180 : 0
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown className="w-4 h-4" />
                                        </motion.div>
                                    )}
                                </Link>
                            )}

                            {/* Sous-menu avec animation */}
                            <AnimatePresence>
                                {hasSubmenus(menu) && ((isMobile && openMobileMenu === index) || (!isMobile && hoveredMenu === index)) && (
                                    <motion.div
                                        className={`${
                                            isMobile
                                                ? "static w-full mt-2 py-2 bg-gray-800/90 rounded-lg border border-gray-600"
                                                : "absolute top-full left-0 mt-2 py-2 bg-white rounded-lg shadow-xl border border-gray-100 min-w-[250px] z-50 overflow-hidden"
                                        }`}
                                        variants={submenuVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeOut"
                                        }}
                                        onMouseEnter={() => !isMobile && handleMouseEnter(index)}
                                        onMouseLeave={() => !isMobile && handleMouseLeave()}
                                        style={!isMobile ? {
                                            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)"
                                        } : {}}
                                    >
                                        {(menu as any).submenus?.map((submenu: any, subIndex: number) => (
                                            <motion.div
                                                key={subIndex}
                                                variants={submenuItemVariants}
                                                transition={{
                                                    duration: 0.3,
                                                    delay: subIndex * 0.05
                                                }}
                                            >
                                                <Link
                                                    href={submenu.url}
                                                    className={`block px-4 py-3 text-sm transition-all duration-300 ${
                                                        isActive(submenu.url)
                                                            ? isMobile
                                                                ? "text-[#00ADEF] font-semibold bg-[#00ADEF]/20"
                                                                : "text-[#00ADEF] font-semibold bg-[#00ADEF0D]"
                                                            : isMobile
                                                                ? "text-gray-200 hover:text-[#00ADEF] hover:bg-gray-700"
                                                                : "text-gray-700 hover:text-[#00ADEF] hover:bg-gray-50"
                                                    }`}
                                                >
                                                    {submenu.title}
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))
                }
            </nav>
            {
                isProjectPage ? (
                    <Link
                        href={"/contact"}
                        className={`text-white font-bold bg-[#FF43AF] rounded-full transition-all duration-500 hover:bg-[#00ADEF] ${
                            isMobile ? 'px-4 py-3 text-sm mt-4' : 'px-6 py-4 text-sm'
                        }`}
                    >
                        Demande d'intervention
                    </Link>
                ) :
                <Link
                    href={"/contact"}
                    className={`text-white font-bold bg-[#00ADEF] rounded-full transition-all duration-500 hover:bg-[#FF43AF] ${
                        isMobile ? 'px-4 py-3 text-sm mt-4' : 'px-6 py-3 text-md'
                    }`}
                >
                    Rendez-vous
                </Link>
            }

        </div>
     );
}

export default Menu;