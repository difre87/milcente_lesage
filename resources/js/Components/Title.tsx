interface TitleProps {
    title: string;
    className?: string;
}

const Title = ({title, className}: TitleProps) => {
    return (
        <div className="w-full flex justify-center items-center">
            <h1 className={`text-[#00ADEF] md:text-4xl text-xl text-center font-bold ${className}`}>{title}</h1>
        </div>
     );
}

export default Title;