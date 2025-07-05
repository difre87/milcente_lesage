interface TitleProps {
    title: string;
    className?: string;
}

const Title = ({title, className}: TitleProps) => {
    return (
        <div className="w-full flex justify-center items-center">
            <h1 className={`text-[#00ADEF] text-4xl font-bold ${className}`}>{title}</h1>
        </div>
     );
}

export default Title;