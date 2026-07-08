import Header from "../../../../Components/Header";
import { NavLink } from "react-router-dom";
import Footer from "../../../../Components/Footer";
import GetInTouch from "../../../../Components/GetInTouch";
import PriceListButton from "../../../../Components/PriceListButton";
import Carousel from "../../../../Components/Carousel";
import imageList from "../../../../utils/carouselImages";
import SpecialOffersCarousel from "../../../../Components/SpecialOffersCarousel";
import offersList from "../../../../utils/specialOffers";
import ServiceSection from "../../../../Components/ServiceSection";
import DenturesVideo from "../../../../assets/videos/Dentures.mp4";
import Hero from "../../../../Components/Hero";
import WhyChooseUs from "../../../../Components/WhyChooseUs";
import Banner from "../../../../Components/Banner";
import FAQComponent from "../../../../Components/FAQComponent";
import DenturesBannerImage from "../../../../assets/banner-images/dentures-banner-image.png";

const faqsArray = [
    {
        question: "What is the difference between full and partial dentures?",
        answer: (
            <>
              Full dentures replace all teeth in the upper or lower jaw, while partial dentures replace some missing teeth and attach to remaining natural teeth for stability.
            </>
        )
    },
    {
        question: "How long do dentures last?",
        answer: (
            <>
                With proper care, dentures can last <b>5–10 years</b>, but adjustments may be needed due to natural changes in the mouth.
            </>
        )
    },
    {
        question: "Are flexible dentures better than acrylic or metal dentures?",
        answer: (
            <>
              Flexible dentures are more comfortable and less rigid, but may wear faster and are not suitable for all tooth replacement cases.
            </>
        )
    },
    {
        question: "Can dentures affect speech or eating?",
        answer: (
            <>
              Initially, some patients may notice minor changes in speech or chewing, but with practice, most adapt quickly.
            </>
        )
    },
    {
        question: "How do I care for my dentures?",
        answer: (
            <>
              Clean daily with a soft brush and mild denture cleaner, soak overnight in water or a denture solution, and visit <b>Smile Craft Dental</b> for regular checkups and adjustments.
            </>
        )
    }
];

function Dentures() {

    return (
        <div className="services-screen">
            <Header />
            <Hero 
                title={"DENTURES IN ELERMORE VALE"}
                subheading={`Restore your smile, confidence, and chewing ability with custom dentures from Smile Craft Dental. we offer personalised denture solutions for adults of all ages.
                    Dentures help restore a natural, confident smile while improving chewing and speech. They support facial structure to prevent a sunken appearance and help maintain proper oral 
                    health by replacing missing teeth. With the right dentures, you can enjoy life fully and regain both function and confidence.
                `}
                media={DenturesBannerImage}
            />
            <div className="services-container">
                <div className="services-content">
                    <section className="services-landing">
                        <div className="services-intro">
                            <div className="services-section">
                                <h2>Types of Dentures We Offer</h2>
                                <ul>
                                    <li>
                                        <b>Full Dentures:</b> Replace all teeth in the upper or lower jaw. Restore speech, chewing, and facial appearance.
                                    </li>
                                    <li>
                                        <b>Partial Dentures:</b> Replace one or more teeth and prevent shifting of remaining teeth.
                                    </li>
                                    <li>
                                        <b>Metal Dentures:</b> Strong and durable with a slim, natural design.
                                    </li>
                                    <li>
                                        <b>Acrylic Dentures:</b> Lightweight and affordable, suitable for full or partial dentures.
                                    </li>
                                    <li>
                                        <b>Flexible Dentures:</b> Comfortable and natural-looking, ideal for sensitive gums or irregular jaw shapes.
                                    </li>
                                </ul>
                            </div>

                            <div className="services-section">
                                <h2>What to Expect During a Dentures Treatment</h2>
                                <p><b>1. Consultation & Assessment:</b> We assess your oral health, jaw, and gums to determine the best denture option.</p>
                                <p><b>2. Impressions:</b> Precise impressions are taken for a customised fit.</p>
                                <p><b>3. Trial & Adjustment:</b> Temporary dentures may be fitted to test comfort and function.</p>
                                <p><b>4. Final Denture Fitting:</b> The final denture is polished, adjusted, and tested for proper bite and comfort.</p>
                                <p><b>5. Follow-Up Care:</b> We provide guidance on cleaning, maintenance, and adjustments to ensure long-term satisfaction.</p>
                            </div>
                            <div className="services-section services-split">
                                <ServiceSection video={DenturesVideo} />
                            </div>
                            <div className="services-section">
                                <h2>Are Dentures Right for You</h2>
                                <p>
                                    Dentures are an effective solution if you have <b>missing teeth</b>, want to restore <b>chewing and speaking ability</b>, or aim to maintain <b>facial structure</b> and overall oral health. 
                                    Whether you need full, partial, or flexible dentures, they can help you regain <b>confidence in your smile</b> and improve day-to-day comfort, while being <b>custom-designed</b> to fit your mouth and lifestyle.
                                </p>
                            </div>
                        </div>
                        <Banner />
                        <div className="services-section">
                            <h2>DENTAL PROBLEMS DENTURES CAN ADDRESS</h2>
                        </div>
                        <div className="services-tiles" id="sub-services-tiles">
                            <div className="service-tile">
                                <h3>Missing Teeth</h3>
                                <p>Replace missing teeth to restore function, confidence, and your smile.</p>
                                <NavLink to="/help-me-with/missing-teeth" className="tile-link">LEARN MORE →</NavLink>
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

export default Dentures;
