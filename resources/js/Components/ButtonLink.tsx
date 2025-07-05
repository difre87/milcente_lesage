import { Link } from "@inertiajs/react";

interface ButtonLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

const ButtonLink = ({href, children, className}:ButtonLinkProps) => {
    return (
        <Link href={href} className={`${className}`}>
            {children}
        </Link>
     );
}

export default ButtonLink;