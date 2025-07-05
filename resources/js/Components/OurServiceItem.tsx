interface OurServiceItemProps {
    title: string;
    description: string;
    icon: string;
    link: string;
    linkTitle?: string;
}

const OurServiceItem = ({ title, description, icon, link, linkTitle }: OurServiceItemProps) => {
    return (
        <div className="bg-white rounded-3xl drop-shadow-lg flex flex-col items-center justify-center py-8 px-5 hover:drop-shadow-2xl transition-all duration-500 group hover:bg-[#00ADEF0D] hover:scale-105">
            <div className="p-6 flex flex-col items-center justify-center gap-y-8">
                <img src={icon} alt={title} className="w-16 h-16 mb-4" />
                <h3 className="text-3xl font-bold text-[#00ADEF] mb-2">{title}</h3>
                <p className="text-sm text-[#222021] text-center mb-4 leading-5">{description}</p>
                <a href={link} className="bg-[#00ADEF] rounded-full py-4 px-5 text-white text-sm font-bold transition-all duration-500 hover:bg-[#FF43AF]">{linkTitle || "En savoir plus"}</a>
            </div>
        </div>
     );
}

export default OurServiceItem