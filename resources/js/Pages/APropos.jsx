import Header from '../Components/Header';
import PageSlider from '../Components/PageSlider';
import Testimonies from '../Components/Testimonies';
import Footer from '../Components/Footer';
import AproposText from '../Components/AproposText';
import Competence from '../Components/Apropos/Competence';
import ASavoir from '../Components/Apropos/ASavoir';
import Entretien from '../Components/Apropos/Entretien';
const Apropos = () => {
    return (
        <>
            <Header isInsidePage={false} />
            <PageSlider />
            <AproposText />
            <Competence />
            <ASavoir />
            <Entretien />
            <Testimonies />
            <Footer />
        </>
    );
}

export default Apropos;