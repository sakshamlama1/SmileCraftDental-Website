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
import DentalBridgeVideo from "../../../../assets/videos/DentalBridge.mp4";
import Hero from "../../../../Components/Hero";
import WhyChooseUs from "../../../../Components/WhyChooseUs";
import Banner from "../../../../Components/Banner";
import FAQComponent from "../../../../Components/FAQComponent";
import DentalBridgeBannerImage from "../../../../assets/banner-images/dental-bridge-banner-image.png";

const faqsArray = [
    {
        question: "How long does a dental bridge last?",
        answer: (
            <>
              With good oral hygiene and regular check-ups, dental bridges can last <b>10–15 years or longer.</b>
            </>
        )
    },
    {
        question: "Does getting a dental bridge hurt?",
        answer: (
            <>
                No. Local anaesthetic ensures a <b>comfortable procedure</b>, and most patients adapt quickly.
            </>
        )
    },
    {
        question: "Will my bridge look natural?",
        answer: (
            <>
              Yes. Bridges are <b>custom-made and colour-matched</b> to blend seamlessly with your natural teeth.
            </>
        )
    },
    {
        question: "Can a dental bridge replace multiple missing teeth?",
        answer: (
            <>
              Yes. Dental bridges can replace <b>one or several teeth</b> depending on the design.
            </>
        )
    },
    {
        question: "What happens if I don’t replace a missing tooth?",
        answer: (
            <>
              Leaving gaps can lead to <b>tooth movement, bite issues, bone loss, and further dental problems</b> over time.
            </>
        )
    }
];

function DentalBridge() {

    return (
        <div className="services-screen">
            <Header />
            <Hero 
                title={"DENTAL BRIDGES IN ELERMORE VALE"}
                subheading={`
                    Missing teeth can affect far more than just your smile. At Crafted Smiles Studio, we offer custom dental bridges to restore your bite, improve confidence, and help you enjoy everyday activities like eating and speaking with ease again.
                    A dental bridge is a reliable, long-lasting solution for replacing one or more missing teeth — helping you regain both function and appearance while preventing future dental problems.
                `}
                media={DentalBridgeBannerImage}
            />
            <div className="services-container">
                <div className="services-content">
                    <section className="services-landing">
                        <div className="services-intro">
                            <div className="services-section">
                                <h2>What Is a Dental Bridge?</h2>
                                <p>
                                   A dental bridge is a fixed dental restoration used to <b>replace missing teeth</b> by anchoring an artificial tooth (or teeth) to 
                                   neighbouring natural teeth or crowns. Once placed, a bridge becomes a <b>stable and natural-looking part of your smile.</b>
                                </p>
                                <p>
                                    Unlike removable options, dental bridges are <b>cemented in place</b>, offering confidence, comfort, and long-term reliability.
                                </p>
                            </div>
                            <div className="services-section">
                                <h2>Why Replacing Missing Teeth Matters</h2>
                                <p>Leaving gaps in your smile can lead to:</p>
                                <ul>
                                    <li>
                                        <b>Shifting of surrounding teeth</b>
                                    </li>
                                    <li>
                                        <b>Bite problems and jaw discomfort</b>
                                    </li>
                                    <li>
                                        <b>Difficulty chewing or speaking</b>
                                    </li>
                                    <li>
                                        <b>Bone loss in the jaw</b>
                                    </li>
                                    <li>
                                        <b>Changes in facial structure</b>
                                    </li>
                                    <li>
                                        <b>Reduced confidence when smiling</b>
                                    </li>
                                </ul>
                                <p>A dental bridge helps <b>restore balance</b>, protecting your remaining teeth and supporting long-term oral health.</p>
                            </div>
                            <div className="services-section">
                                <h2>Benefits of Choosing a Dental Bridge</h2>
                                <p>Patients often choose dental bridges because they:</p>
                                <ul>
                                    <li>
                                        Restore <b>natural appearance and smile confidence</b>
                                    </li>
                                    <li>
                                        Improve <b>chewing and speaking ability</b>
                                    </li>
                                    <li>
                                        Prevent neighbouring teeth from shifting
                                    </li>
                                    <li>
                                        Help maintain <b>jawbone and facial structure</b>
                                    </li>
                                    <li>
                                        Provide a <b>fixed, stable solution</b>
                                    </li>
                                    <li>
                                        Blend seamlessly with natural teeth
                                    </li>
                                </ul>
                                <p>At <b>Crafted Smiles Studio</b>, every bridge is <b>custom-designed</b> to suit your smile, bite, and lifestyle.</p>
                            </div>
                            <div className="services-section services-split">
                                <ServiceSection video={DentalBridgeVideo} />
                            </div>
                            <div className="services-section">
                                <h2>Types of Dental Bridges</h2>
                                <p>Your dentist will recommend the most suitable option based on your oral health and goals:</p>
                                <ul>
                                    <li>
                                        <b>Traditional Dental Bridges:</b> Supported by crowns on adjacent teeth
                                    </li>
                                    <li>
                                        <b>Cantilever Bridges:</b> Used when support is available on one side only
                                    </li>
                                    <li>
                                        <b>Implant-Supported Bridges:</b> Anchored to dental implants for added stability (may require specialist referral)
                                    </li>
                                </ul>
                                <p>Each option is carefully planned to ensure <b>long-term comfort and durability.</b></p>
                            </div>
                            <div className="services-section">
                                <h2>What to Expect During a Dental Bridge Procedure</h2>
                                <p>We make the process smooth and comfortable:</p>
                                <p><b>1. Assessment & Planning:</b> Evaluation, X-rays, and discussion of treatment options.</p>
                                <p><b>2. Tooth Preparation:</b> Supporting teeth are prepared to hold the bridge.</p>
                                <p><b>3. Impressions:</b> Digital or traditional impressions for precise design.</p>
                                <p><b>4. Temporary Bridge:</b> Protects teeth while your custom bridge is made.</p>
                                <p><b>5. Final Placement:</b> The bridge is fitted, adjusted, and cemented securely.</p>
                                <p>Our focus is on <b>precision, comfort, and natural aesthetics</b> at every stage.</p>
                            </div>
                            <div className="services-section">
                                <h2>Is a Dental Bridge Right for You?</h2>
                                <p>
                                    If you are missing one or more teeth and want a <b>fixed, natural-looking solution</b>, a dental bridge may be an excellent option. 
                                    During your consultation, your dentist will discuss <b>all suitable treatments</b> and help you choose the option that best supports 
                                    your oral health and long-term goals.
                                </p>
                            </div>
                        </div>
                        <Banner />
                        <div className="services-section">
                            <h2>DENTAL PROBLEMS DENTAL BRIDGE CAN ADDRESS</h2>
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

export default DentalBridge;
