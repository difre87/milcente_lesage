import { Link } from "@inertiajs/react";

const Logo = () => {
    return (
        <Link href="/" className="flex items-center">
            <img src="/assets/images/logo.svg" alt="Milecent Lesage" className="w-42" />
        </Link>
     );
}

export default Logo;