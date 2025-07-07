import { Link, usePage } from "@inertiajs/react";
import { ChevronDown } from "lucide-react";
import { debouchageMenus, menus } from "../types/data";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MenuProps {
    isProjectPage?: boolean;
}

const Menu = ({ isProjectPage=false }: MenuProps) => {
    const { url } = usePage();
    const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const menuSite = isProjectPage==true ? debouchageMenus : menus;

    const isActive = (menuUrl: string) => {
        if (menuUrl === '/') {
            return url === '/';
        }
        return url.startsWith(menuUrl);
    };

    const hasSubmenus = (menu: any) => {
        return menu.submenus && menu.submenus.length > 0;
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
        <div className={`flex-1 flex items-center  gap-x-10 ${isProjectPage ? "justify-end" : "justify-between"}`}>
            <nav className="flex gap-x-12 items-center justify-center">
                {
                    menuSite.map((menu, index) => (
                        <div
                            key={index}
                            className="relative"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link
                                href={menu.url}
                                className={`transition-all duration-500 text-md flex items-center gap-1 ${
                                    isActive(menu.url)
                                        ? "text-[#00ADEF] font-bold"
                                        : "text-white hover:text-[#00ADEF]"
                                }`}
                            >
                                {menu.title}
                                {hasSubmenus(menu) && (
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

                            {/* Sous-menu avec animation */}
                            <AnimatePresence>
                                {hasSubmenus(menu) && hoveredMenu === index && (
                                    <motion.div
                                        className="absolute top-full left-0 mt-2 py-2 bg-white rounded-lg shadow-xl border border-gray-100 min-w-[250px] z-50 overflow-hidden"
                                        variants={submenuVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeOut"
                                        }}
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}
                                        style={{
                                            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)"
                                        }}
                                    >
                                        {menu.submenus?.map((submenu: any, subIndex: number) => (
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
                                                            ? "text-[#00ADEF] font-semibold bg-[#00ADEF0D]"
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
                    <Link href={"/contact"} className=" text-white px-6 py-4 font-bold text-sm bg-[#FF43AF] rounded-full transition-all duration-500 hover:bg-[#00ADEF]">
                        Demande d'intervention
                    </Link>
                ) :
                <Link href={"/contact"} className="text-white px-6 py-3 font-bold text-md bg-[#00ADEF] rounded-full transition-all duration-500 hover:bg-[#FF43AF]">
                    Rendez-vous
                </Link>
            }

        </div>
     );
}

export default Menu;