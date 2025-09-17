import { Link } from "@inertiajs/react";

const Logo = () => {
    return (
        <Link href="/" className="flex items-center">
            <img src="/assets/images/logo.svg" alt="Milecent Lesage" className="md:w-42 w-24" />
        </Link>
     );
}

export default Logo;