import Header from "../../Components/Header";
import Hero from "../../Components/Hero";
import "./index.css";
import specialOffers from "../../utils/specialOffers";
import Footer from "../../Components/Footer";
import Carousel from "../../Components/Carousel";
import images from "../../utils/carouselImages";
import WhyChooseUs from "../../Components/WhyChooseUs";
import PriceListButton from "../../Components/PriceListButton"
import GetInTouch from "../../Components/GetInTouch";
import Banner from "../../Components/Banner";

function SpecialOffers() {
  return (
    <div className="special-offers-screen">
        <Header />
        <Hero 
            title={"SPECIAL OFFERS"}
            subheading={`At Crafted Smiles Studio, we provide exclusive dental offers designed to make quality dental care more accessible. 
                Take advantage of our limited-time promotions on treatments ranging from general check-ups to cosmetic and restorative procedures, 
                helping you achieve a healthy, confident smile at a great value.`
            }
        />
        <div className="special-offers-screen-container">
            <div className="special-offers-screen-content">
                <div className="special-offers-screen-features">
                    {specialOffers.map((feature, idx) => (
                        <div className="special-offers-screen-box" key={idx}>
                            <img src={feature.image} alt={feature.title} />
                            <h3>{feature.title}</h3>
                            <p className="special-offers-price">{feature.price}</p>
                            <p className="special-offers-description">{feature.description[0]}</p>
                            <p className="special-offers-description">{feature.description[1]}</p>
                            <div className="special-offers-screen-learn-more">
                                <a href="https://booking.au.hsone.app/soe/new/%20?pid=AUETL01">
                                    Book Now → (For Online Booking Only)
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Carousel images={images} />
        <WhyChooseUs />
        <PriceListButton />
        <GetInTouch />
        <Banner />
        <Footer />
    </div>
  );
}

export default SpecialOffers;
