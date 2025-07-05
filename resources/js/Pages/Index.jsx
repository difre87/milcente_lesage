
import { Head } from '@inertiajs/react';
import Header from '../Components/Header';
import Slider from '../Components/Slider';
import AboutUs from '../Components/AboutUs';
import OurService from '../Components/OurSercives';
import Service from '../Components/Service';
import Testimonies from '../Components/Testimonies';
import ContactezNous from '../Components/ContactezNous';
import Partner from '../Components/Partner';
import Footer from '../Components/Footer';

export default function Index({ laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="" />
            <Header />
            <Slider />
            <AboutUs />
            <OurService />
            <Service />
            <Testimonies />
            <ContactezNous />
            <Partner />
            <Footer />
        </>
    );
}
