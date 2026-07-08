import "./index.css";
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

function HelpMeWith() {
    return (
        <div className="help-me-with-screen">
            <Header />
            <Hero 
                title="HELP ME WITH"
                subheading="At Smile Craft Dental find trusted guidance and solutions for common dental concerns, from tooth pain and sensitivity to missing or stained teeth."
            />
            <div className="help-me-with-container">
                <div className="help-me-with-content">
                    <section className="help-me-with-landing">
                        <p className="help-me-with-intro-description">
                            <b>
                                At Smile Craft Dental, we provide clear, trusted guidance to help you
                                understand and manage common dental concerns.
                            </b>
                        </p>

                        <div className="help-me-with-tiles">
                            <div className="help-me-with-tile">
                                <h3>Bruxism</h3>
                                <p>Manage teeth grinding and jaw clenching to relieve pain and prevent long-term damage.</p>
                                <NavLink to="/help-me-with/bruxism" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            <div className="help-me-with-tile">
                                <h3>Chipped Teeth</h3>
                                <p>Repair chipped or broken teeth to restore strength, comfort, and appearance.</p>
                                <NavLink to="/help-me-with/chipped-teeth" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            <div className="help-me-with-tile">
                                <h3>Crooked Teeth</h3>
                                <p>Straighten misaligned teeth with modern, comfortable orthodontic solutions.</p>
                                <NavLink to="/help-me-with/crooked-teeth" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            <div className="help-me-with-tile">
                                <h3>Dental Abscess</h3>
                                <p>Treat dental infections promptly to relieve pain and protect your oral health.</p>
                                <NavLink to="/help-me-with/dental-abscess" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            <div className="help-me-with-tile">
                                <h3>Fillings</h3>
                                <p>Restore cavities and damaged teeth with durable, natural-looking fillings.</p>
                                <NavLink to="/help-me-with/fillings" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            <div className="help-me-with-tile">
                                <h3>Missing Crowns & Fillings</h3>
                                <p>Replace lost crowns or fillings to protect teeth and prevent further decay.</p>
                                <NavLink to="/help-me-with/missing-crowns-fillings" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            <div className="help-me-with-tile">
                                <h3>Missing Teeth</h3>
                                <p>Replace missing teeth to restore function, confidence, and your smile.</p>
                                <NavLink to="/help-me-with/missing-teeth" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            <div className="help-me-with-tile">
                                <h3>Sensitivity</h3>
                                <p>Reduce sensitivity and discomfort when eating, drinking, or brushing.</p>
                                <NavLink to="/help-me-with/sensitivity" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            <div className="help-me-with-tile">
                                <h3>Severe Tooth Ache</h3>
                                <p>Relieve intense tooth pain by identifying and treating the root cause.</p>
                                <NavLink to="/help-me-with/severe-tooth-ache" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            <div className="help-me-with-tile">
                                <h3>Tooth Staining</h3>
                                <p>Brighten discoloured teeth for a cleaner, whiter, more confident smile.</p>
                                <NavLink to="/help-me-with/tooth-staining" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            <div className="help-me-with-tile">
                                <h3>Wisdom Teeth Pain</h3>
                                <p>Ease wisdom tooth pain and prevent complications with professional care.</p>
                                <NavLink to="/help-me-with/wisdom-teeth-pain" className="tile-link">LEARN MORE →</NavLink>
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

export default HelpMeWith;
