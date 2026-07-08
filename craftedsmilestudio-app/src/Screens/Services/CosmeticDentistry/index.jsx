import React from "react";
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
import WhyChooseUs from "../../../Components/WhyChooseUs";
import Banner from "../../../Components/Banner";
import CosmeticDentistryImage from "../../../assets/cosmetic-dentistry.png";

function CosmeticDentistry() {
    return (
        <div className="cosmetic-dentistry-screen">
            <Header />
            <Hero
                title={"COSMETIC DENTISTRY IN ELERMORE VALE"}
                subheading={`
                    At Crafted Smiles Studio, our cosmetic dentistry focuses on enhancing the appearance of your smile while supporting long-term dental health.
                    From subtle refinements to complete smile transformations, we offer personalized cosmetic dentistry designed to enhance your smile’s natural beauty.
                    Combining advanced techniques with thoughtful, patient-focused care. Our clinic welcomes patients, providing cosmetic dental care across 
                    Elermore Vale, Newcastle, Wallsend, Rankin Park, Cardiff, Kotara, and surrounding areas.
                `}
                media={CosmeticDentistryImage}
            />
            <div className="cosmetic-dentistry-container">
                <div className="cosmetic-dentistry-content">
                    <section className="services-landing">
                        <div className="services-section">
                            <h2>Elevate Your Smile with Our Cosmetic Dentistry Treatments</h2>
                            <p>
                                Your smile is often the first thing people notice—and feeling confident in it can change the way you show up every day. 
                                If you’re unhappy with the appearance of your teeth, cosmetic dentistry can help 
                                you achieve a smile that looks natural, healthy, and radiant.
                            </p>
                            <p>
                                While regular dental care is essential, some concerns such as discoloration, uneven teeth, gaps, or worn enamel 
                                require more than routine hygiene. That’s where expertly planned cosmetic treatments can make a lasting difference.
                            </p>
                            <p>
                                At <b>Crafted Smiles Studio</b>, we specialize in customized cosmetic dentistry designed around your goals. 
                                Our experienced team takes the time to understand what you want to improve and creates a treatment plan 
                                tailored specifically for you. From professional teeth whitening and veneers to complete smile makeovers, 
                                we focus on results that enhance both appearance and confidence.
                            </p>
                            <p>
                                We also offer <b>Digital Smile Design</b>, allowing you to preview your new smile before treatment begins—so you can 
                                move forward with clarity and confidence. Book your consultation today and take the first step 
                                toward a smile you’ll love showing off.
                            </p>
                        </div>
                        <p className="services-intro-description">
                            <b>At Crafted Smiles Studio, we offer a wide range of cosmetic dental treatments</b>
                        </p>
                        <div className="services-tiles">
                            {/* Aligners */}
                            <div className="service-tile">
                                <h3>Aligners</h3>
                                <p>Straighten your teeth discreetly with clear, removable aligners that fit seamlessly into your lifestyle.</p>
                                <NavLink to="/services/cosmetic/aligners" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            {/* Composite Veneers / Bonding */}
                            <div className="service-tile">
                                <h3>Composite Veneers/Bonding</h3>
                                <p>Achieve a natural, polished smile by reshaping or repairing teeth with composite veneers in a single visit.</p>
                                <NavLink to="/services/cosmetic/composite-veneers-bonding" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            {/* Veneers */}
                            <div className="service-tile">
                                <h3>Dental Veneers</h3>
                                <p>Transform your smile with custom-made porcelain veneers that cover imperfections and deliver a flawless look.</p>
                                <NavLink to="/services/cosmetic/dental-veneers" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            <div className="service-tile">
                                <h3>Digital Smile Design</h3>
                                <p>Transform your smile with our advanced digital smile design technology, creating a customized treatment plan for optimal results.</p>
                                <NavLink to="/services/cosmetic/digital-smile-design" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            {/* Teeth Whitening */}
                            <div className="service-tile">
                                <h3>Teeth Whitening</h3>
                                <p>Brighten your smile with professional whitening treatments that safely lift stains and boost confidence.</p>
                                <NavLink to="/services/cosmetic/teeth-whitening" className="tile-link">LEARN MORE →</NavLink>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
             <Carousel images={imageList}/>
            <SpecialOffersCarousel offers={offersList}/>
            <WhyChooseUs />
            <PriceListButton />
            <GetInTouch />
            <Banner />
            <Footer />
        </div>
    );
}

export default CosmeticDentistry;
