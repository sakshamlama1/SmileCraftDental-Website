import "./index.css";
import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import GetInTouch from "../../Components/GetInTouch";
import PriceListButton from "../../Components/PriceListButton";
import Carousel from "../../Components/Carousel";
import imageList from "../../utils/carouselImages";
import SpecialOffersCarousel from "../../Components/SpecialOffersCarousel";
import offersList from "../../utils/specialOffers";
import WhyChooseUs from "../../Components/WhyChooseUs";
import Hero from "../../Components/Hero";
import Banner from "../../Components/Banner";

function Payments() {
    return (
        <div className="payments-screen">
            <Header />
            <Hero 
                title={"Payments"} 
                subheading={"We believe everyone deserves access to quality dental care. At Crafted Smiles Studio, to make treatments more affordable and stress-free, we offer flexible payment options and interest-free payment plans."} 
            />
            <div className="payments-container">
                <div className="payments-content">
                    <section className="payments-landing">
                        <div className="payments-tiles">
                            {/* Payment Options Tile */}
                            <div className="payment-tile">
                                <h3>Payment Options</h3>
                                <p>Choose from a range of convenient payment methods for fast health fund claiming.</p>
                                <NavLink to={"/payment-options"} className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            {/* Payment Plans Tile */}
                            <div className="payment-tile">
                                <h3>Payment Plans</h3>
                                <p>Spread the cost of your dental treatment with interest-free payment plans tailored to your budget and lifestyle.</p>
                                <NavLink to={"/payment-plans"} className="tile-link">LEARN MORE →</NavLink>
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

export default Payments;
