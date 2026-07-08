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
import Hero from "../../Components/Hero";
import WhyChooseUs from "../../Components/WhyChooseUs";
import Banner from "../../Components/Banner";

function Services() {
    return (
        <div className="services-screen">
            <Header />
            <Hero 
                title={"SERVICES"} 
                subheading={`At Crafted Smiles Studio, we offer comprehensive dental services for the whole family — 
                    from preventative and general care to cosmetic and restorative treatments designed to keep your smile healthy, confident, and long-lasting. Proudly caring for patients across 
                    Elermore Vale, Newcastle, Wallsend, Rankin Park, Cardiff, Kotara, and surrounding areas.
                `}
            />
            <div className="services-container">
                <div className="services-content">
                    <section className="services-landing">
                        <p className="services-intro-description">
                            <b>At Crafted Smiles Studio, we offer a wide range of services</b>
                        </p>
                        <div className="services-tiles">
                            {/* General Dentistry Tile */}
                            <div className="service-tile">
                                <h3>General Dentistry</h3>
                                <p>Comprehensive dental care focused on oral hygiene, prevention, and treatment of dental diseases for the whole family.</p>
                                <NavLink to="/services/general" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            {/* Cosmetic Dentistry Tile */}
                            <div className="service-tile">
                                <h3>Cosmetic Dentistry</h3>
                                <p>Enhance your smile with modern cosmetic treatments — from Teeth Whitening to Invisalign and Dental Veneers.</p>
                                <NavLink to="/services/cosmetic" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            {/* Restorative Dentistry Tile */}
                            <div className="service-tile">
                                <h3>Restorative Dentistry</h3>
                                <p>Enhance your smile with modern restorative treatments — from Dentures to Dental Bridges and Crowns.</p>
                                <NavLink to="/services/restorative" className="tile-link">LEARN MORE →</NavLink>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Carousel images={imageList} />
            <SpecialOffersCarousel offers={offersList}/>
            <WhyChooseUs />
            <PriceListButton />
            <GetInTouch />
            <Banner />
            <Footer />
        </div>
    );
}
export default Services;
