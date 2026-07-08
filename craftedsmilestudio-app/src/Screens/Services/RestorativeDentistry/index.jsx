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
import RestorativeDentistryImage from "../../../assets/banner-images/restorative-dentistry-image.png";

function RestorativeDentistry() {
    return (
        <div className="restorative-dentistry-screen">
            <Header />
            <Hero 
                title={"RESTORATIVE DENTISTRY IN ELERMORE VALE"} 
                subheading={`
                    Dental damage can impact more than just your smile. At Crafted Smiles Studio, we provide comprehensive restorative 
                    dentistry to repair damaged teeth, replace missing teeth, and restore the natural function and appearance of your smile.  
                    Providing trusted restorative dental care for patients in Elermore Vale, Newcastle, Wallsend, Rankin Park, Cardiff, Kotara, and surrounding suburbs.
                `}
                media={RestorativeDentistryImage}
            />
            <div className="restorative-dentistry-container">
                <div className="restorative-dentistry-content">
                    <section className="services-landing">
                        <div className="services-section">
                            <h2>Rebuild Your Smile with Expert Restorative Care</h2>
                            <p>
                                When a tooth is damaged or missing, everyday activities like eating, speaking, and smiling can 
                                become uncomfortable or stressful. Left untreated, dental problems can progress quietly — often 
                                leading to infection, shifting teeth, or more extensive procedures down the road.
                            </p>
                            <p>
                                Restorative dentistry is designed to bring your smile back to full strength and function. 
                                By repairing or replacing compromised teeth, we help protect your oral health while restoring balance, 
                                comfort, and confidence.
                            </p>
                            <p>
                                At <b>Crafted Smiles Studio</b>, restorative care is never one-size-fits-all. We create tailored treatment plans 
                                using modern solutions such as same-day crowns, bridges, and dentures that are crafted to look natural 
                                and feel secure. Our focus is on results that blend seamlessly with your smile and support long-term dental health.
                            </p>
                            <p>
                                From your first consultation, our team prioritizes clarity, comfort, and trust. 
                                We’ll walk you through your options and help you choose the right solution for your lifestyle and needs. 
                                Take action today—book a consultation and start rebuilding a healthier, more confident smile.
                            </p>
                        </div>
                        <p className="services-intro-description">
                            <b>At Crafted Smiles Studio, we offer a wide range of restorative dental treatments, including:</b>
                        </p>
                        <div className="services-tiles">
                            {/* Dental Bridge */}
                            <div className="service-tile">
                                <h3>Dental Bridge</h3>
                                <p>Restore your smile and bite by replacing missing teeth with a natural-looking dental bridge.</p>
                                <NavLink to="/services/general/dental-bridge" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            {/* Dental Crown */}
                            <div className="service-tile">
                                <h3>Dental Crowns</h3>
                                <p>Protect damaged or weakened teeth with durable, custom-made dental crowns that match your smile.</p>
                                <NavLink to="/services/general/dental-crown" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            {/* Dentures */}
                            <div className="service-tile">
                                <h3>Dentures</h3>
                                <p>Comfortable and natural-looking dentures designed to restore function and confidence in your smile.</p>
                                <NavLink to="/services/restorative/dentures" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                             {/* Full Mouth Rehabilitation */}
                            <div className="service-tile">
                                <h3>Full Mouth Rehabilitation</h3>
                                <p>Comprehensive treatment plans to restore function, aesthetics, and overall oral health.</p>
                                <NavLink to="/services/restorative/full-mouth-rehabilitation" className="tile-link">LEARN MORE →</NavLink>
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

export default RestorativeDentistry;
