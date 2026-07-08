import { NavLink } from "react-router-dom";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import GetInTouch from "../../../Components/GetInTouch";
import PriceListButton from "../../../Components/PriceListButton";
import Carousel from "../../../Components/Carousel";
import imageList from "../../../utils/carouselImages";
import SpecialOffersCarousel from "../../../Components/SpecialOffersCarousel";
import offersList from "../../../utils/specialOffers";
import Hero from "../../../Components/Hero";
import Banner from "../../../Components/Banner";
import WhyChooseUs from "../../../Components/WhyChooseUs";

function PaymentOptions() {
    return (
        <div className="payment-options-screen">
            <Header />
            <Hero 
                title={"Payment Options"} 
                subheading={"At Smile Craft Dental, we believe quality dental care should be accessible to everyone. That’s why we offer a range of flexible payment options — from everyday health cover support to government-funded programs — to help make your visits as affordable as they are stress-free."} 
            />
            <div className="payment-options-container">
                <div className="payment-options-content">
                    <section className="payments-landing">
                        <div className="payments-tiles">
                            {/* Child Dental Benefit Schedule */}
                            <div className="payment-tile">
                                <h3>Child Dental Benefit Schedule</h3>
                                <p>Bulk-billed dental services for eligible children under Medicare's Child Dental Benefits Schedule (CDBS).</p>
                                <NavLink to="/payment-options/child-dental-benefit" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            {/* Veterans' Affairs */}
                            <div className="payment-tile">
                                <h3>Department of Veterans' Affairs</h3>
                                <p>We proudly accept Department of Veterans' Affairs (DVA) patients and provide covered dental care services.</p>
                                <NavLink to="/payment-options/veterans-affairs" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            {/* Health Funds */}
                            <div className="payment-tile">
                                <h3>Health Funds</h3>
                                <p>Claim on the spot with HICAPS for all major health funds, making your visit quick and hassle-free.</p>
                                <NavLink to="/payment-options/healthfunds" className="tile-link">LEARN MORE →</NavLink>
                            </div>                
                        </div>
                    </section>
                </div>
            </div>
            <Carousel images={imageList} />
            <SpecialOffersCarousel offers={offersList} />
            <WhyChooseUs />
            <PriceListButton />
            <GetInTouch />
            <Banner />
            <Footer />
        </div>
    );
}

export default PaymentOptions;
