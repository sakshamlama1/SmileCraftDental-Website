import Header from "../../../../Components/Header";
import { NavLink } from "react-router-dom";
import Footer from "../../../../Components/Footer";
import GetInTouch from "../../../../Components/GetInTouch";
import PriceListButton from "../../../../Components/PriceListButton";
import Carousel from "../../../../Components/Carousel";
import imageList from "../../../../utils/carouselImages";
import SpecialOffersCarousel from "../../../../Components/SpecialOffersCarousel";
import offersList from "../../../../utils/specialOffers";
import Hero from "../../../../Components/Hero";
import WhyChooseUs from "../../../../Components/WhyChooseUs";
import Banner from "../../../../Components/Banner";
import FAQComponent from "../../../../Components/FAQComponent";
import FullMouthRehabilitationBannerImage from "../../../../assets/banner-images/full-mouth-rehab-banner-image.png";

function FullMouthRehabilitation() {

    const faqsArray = [
        {
            question: "How long does full mouth rehabilitation take?",
            answer: (
                <>
                    The timeline varies depending on complexity and treatment stages. Some cases are completed over several months, while others may take longer to ensure proper healing and adaptation.
                </>
            )
        },
        {
            question: "Will I be able to eat normally during treatment?",
            answer: (
                <>
                    Yes. Treatment is planned to maintain function throughout, with temporary solutions used when needed to support everyday eating and comfort.
                </>
            )
        },
        {
            question: "Is full mouth rehabilitation painful?",
            answer: (
                <>
                    Most patients find the process very manageable. Modern techniques and gentle care help minimise discomfort, and your dentist will ensure you remain comfortable at every stage.
                </>
            )
        },
        {
            question: "Is full mouth rehabilitation purely cosmetic?",
            answer: (
                <>
                    No. While appearance improves, the primary focus is restoring function, bite balance, and oral health, with aesthetics naturally following.
                </>
            )
        },
        {
            question: "How do I know which treatments are included?",
            answer: (
                <>
                    Your treatment plan is fully personalised and explained in detail during your consultation, so you understand exactly what is involved before moving forward.
                </>
            )
        }
    ];

    return (
        <div className="services-screen">
            <Header />
            <Hero 
                title={"FULL MOUTH REHABILITATION IN ELERMORE VALE"}
                subheading={`
                    A comprehensive approach to rebuilding worn, damaged, or missing teeth to restore comfort, function, and confidence.
                    At Crafted Smiles Studio, full mouth rehabilitation is carefully planned to improve your bite, support facial structure,
                    and create a balanced, natural-looking smile tailored to your long-term oral health.
                `}
                media={FullMouthRehabilitationBannerImage}
            />
            <div className="services-container">
                <div className="services-content">
                    <section className="services-landing">
                        <div className="services-intro">
                            <div className="services-section">
                                <h2>Restore Your Smile with Full Mouth Rehabilitation</h2>
                                <p>
                                    When a tooth is damaged or missing, everyday activities like eating, speaking, and smiling can become uncomfortable or stressful. 
                                    Left untreated, dental problems can progress quietly—often leading to infection, shifting teeth, or 
                                    more extensive procedures down the road.
                                </p>
                                <p>
                                    Restorative dentistry is designed to bring your smile back to full strength and function. 
                                    By repairing or replacing compromised teeth, we help protect your oral 
                                    health while restoring balance, comfort, and confidence.
                                </p>
                                <p>
                                    At <b>Crafted Smiles Studio</b>, restorative care is never one-size-fits-all. We create tailored treatment 
                                    plans using modern solutions such as same-day crowns, bridges, and dentures that are crafted to look 
                                    natural and feel secure. Our focus is on results that blend seamlessly with your smile and support long-term dental health.
                                </p>
                                <p>
                                    From your first consultation, our team prioritizes clarity, comfort, and trust. We’ll walk you 
                                    through your options and help you choose the right solution for your lifestyle and needs. 
                                    Take action today—book a consultation and start rebuilding a healthier, more confident smile.
                                </p>
                            </div>
                        </div>
                        <Banner />
                        <div className="services-section">
                            <h2>DENTAL PROBLEMS FULL MOUTH REHABILITATION CAN ADDRESS</h2>
                        </div>
                        <div className="services-tiles" id="sub-services-tiles">
                            <div className="service-tile">
                                <h3>Crooked Teeth</h3>
                                <p>Straighten misaligned teeth with modern, comfortable orthodontic solutions.</p>
                                <NavLink to="/help-me-with/crooked-teeth" className="tile-link">LEARN MORE →</NavLink>
                            </div>
                        </div>
                        <FAQComponent faqs={faqsArray} />
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

export default FullMouthRehabilitation;
