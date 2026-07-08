import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import GetInTouch from "../../Components/GetInTouch";
import PriceListButton from "../../Components/PriceListButton";
import Carousel from "../../Components/Carousel";
import imageList from "../../utils/carouselImages";
import SpecialOffersCarousel from "../../Components/SpecialOffersCarousel";
import offersList from "../../utils/specialOffers";
import Hero from "../../Components/Hero";
import Banner from "../../Components/Banner";
import IntroVideo from "../../Components/IntroVideo";
import HeroImage from "../../assets/hero-image.png";
import WhyChooseUs from "../../Components/WhyChooseUs";
import ServicesSummary from "../../Components/ServicesSummary";

function LandingPage() {

    return (
        <div className="landing-page-screen">
            <div className="landing-page-container">
                <Header />
                <div className="landing-page-content">
                    <Hero 
                        title={"CARING FOR SMILES AT EVERY STAGE OF LIFE"} 
                        subheading={"Welcome to Smile Craft Dental, Tuncurry – where we combine gentle, expert dental care with modern technology to keep your smile healthy and confident. From your child’s first check-up to advanced cosmetic and restorative treatments, we’re here to support your family’s oral health at every stage of life. Our goal is to make every visit comfortable, positive, and tailored to your unique smile."} 
                        media={HeroImage}
                        isLandingPage={true}
                    />
                    <IntroVideo />
                    <Banner />
                    <ServicesSummary />
                    <Carousel images={imageList} />
                    <SpecialOffersCarousel offers={offersList} />
                    <WhyChooseUs />
                    <PriceListButton />
                    <GetInTouch />
                    <Banner />
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default LandingPage;