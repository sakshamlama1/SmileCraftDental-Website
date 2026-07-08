import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import PriceListForm from "../../Components/PriceListForm";
import Hero from "../../Components/Hero";
import Carousel from "../../Components/Carousel";
import SpecialOffers from "../../Components/SpecialOffersCarousel"
import images from "../../utils/carouselImages";
import WhyChooseUs from "../../Components/WhyChooseUs";
import GetInTouch from "../../Components/GetInTouch";
import Banner from "../../Components/Banner";

function PriceList() {
    return (
        <div className="price-list-screen">
            <Header />
            <Hero 
                title={"PRICE LIST"} 
                subheading={`At Crafted Smiles Studio, we provide transparent pricing for all dental treatments, from routine check-ups and fillings to cosmetic and restorative procedures. 
                Our goal is to make quality dental care accessible, so you can plan your treatment with confidence. Share your details in the form below to download and receive our price list via email.`}
            />
            <div className="price-list-screen-container">
                <div className="price-list-information">
                    <PriceListForm />
                </div>
            </div>
            <Carousel images={images} />
            <SpecialOffers />
            <WhyChooseUs />
            <GetInTouch />
            <Banner />
            <Footer />
        </div>
    );
}

export default PriceList;
