import "./index.css";
import Header from "../../../../Components/Header";
import { NavLink } from "react-router-dom";
import Footer from "../../../../Components/Footer";
import GetInTouch from "../../../../Components/GetInTouch";
import PriceListButton from "../../../../Components/PriceListButton";
import Carousel from "../../../../Components/Carousel";
import imageList from "../../../../utils/carouselImages";
import SpecialOffersCarousel from "../../../../Components/SpecialOffersCarousel";
import offersList from "../../../../utils/specialOffers";
import CrownBefore from "../../../../assets/CrownBefore.png";
import CrownAfter from "../../../../assets/CrownAfter.png";
import Hero from "../../../../Components/Hero";
import WhyChooseUs from "../../../../Components/WhyChooseUs";
import Banner from "../../../../Components/Banner";
import FAQComponent from "../../../../Components/FAQComponent";
import DentalCrownsBannerImage from "../../../../assets/banner-images/dental-crowns-banner-image.png";

const faqsArray = [
    {
        question: "What is a dental crown?",
        answer: (
            <>
              A dental crown is a <b>custom-made cap</b> that covers a damaged tooth to <b>restore strength, function, and appearance.</b>
            </>
        )
    },
    {
        question: "How long does a crown last?",
        answer: (
            <>
               With proper oral care, crowns can last <b>10–15 years or longer</b>, depending on the material and maintenance.
            </>
        )
    },
    {
        question: "What is a same-day crown?",
        answer: (
            <>
              Using <b>digital scanning and CAD/CAM technology</b>, a crown can be <b>designed, milled, and fitted in a single visit</b>, saving time without compromising quality.
            </>
        )
    },
    {
        question: "Which type of crown is best?",
        answer: (
            <>
              The best crown depends on <b>tooth location, function, and aesthetics</b>. Your dentist will guide you on the ideal choice for your needs.
            </>
        )
    },
    {
        question: "Does getting a crown hurt?",
        answer: (
            <>
              No. Local anaesthetic ensures a <b>comfortable, pain-free procedure</b>, and most patients experience minimal discomfort afterward.
            </>
        )
    }
];
                
function DentalCrowns() {
    return (
        <div className="services-screen">
            <Header />
            <Hero 
                title={"DENTAL CROWNS IN Tuncurry"}
                subheading={`
                    At Smile Craft Dental, we provide expert dental crown treatments to restore, protect, and strengthen damaged teeth. 
                    Whether you have a tooth that is cracked, worn, decayed, or weakened after root canal treatment, a dental crown can reinforce your tooth and restore your smile.
                `}
                media={DentalCrownsBannerImage}
            />
            <div className="services-container">
                <div className="services-content">
                    <section className="services-landing">
                        <div className="services-intro">
                            <div className="services-section">
                                <h2>Why Dental Crowns Are Important</h2>
                                <p>
                                    Dental crowns are custom-made restorations that <b>cover and protect a damaged tooth</b>, 
                                    preventing further deterioration while restoring <b>strength, function, and appearance</b>. Crowns can:
                                </p>
                                <ul>
                                    <li>
                                        Protect weakened teeth from <b>fracture or further decay</b>
                                    </li>
                                    <li>
                                        Restore <b>chewing function</b> and bite alignment
                                    </li>
                                    <li>
                                        Enhance <b>aesthetic appearance</b>, matching the natural colour of your teeth
                                    </li>
                                    <li>
                                        Reinforce <b>teeth after large fillings or root canal treatments</b>
                                    </li>
                                </ul>
                                <p>At <b>Smile Craft Dental</b>, our goal is to combine <b>durability and aesthetics</b> to ensure your crown not only functions well but looks natural too.</p>
                            </div>
                            <div className="services-section">
                                <h2>Types of Dental Crowns We Offer</h2>
                                <p>We provide a range of crown materials to suit different needs and preferences:</p>
                                <ul>
                                    <li>
                                        <b>Metal Crowns:</b> Extremely durable, ideal for back teeth where strength is the priority
                                    </li>
                                    <li>
                                        <b>Porcelain-Fused-to-Zirconia Crowns:</b> Combines strength with a natural tooth-like appearance
                                    </li>
                                    <li>
                                        <b>Full Zirconia Crowns:</b> Highly durable, biocompatible, and excellent for a natural look
                                    </li>
                                    <li>
                                        <b>Emax Crowns:</b> Strong, aesthetic, and ideal for front teeth or areas requiring a natural translucency
                                    </li>
                                    <li>
                                        <b>Same-Day Crowns:</b> Using modern CAD/CAM technology, some crowns can be <b>designed, milled, and fitted in a single visit</b>, reducing treatment time without compromising quality
                                    </li>
                                </ul>
                                <p>Your dentist will recommend the <b>best crown type</b> based on the tooth’s location, condition, and your personal preferences.</p>
                            </div>
                            <div className="services-section">
                                <h2>What to Expect During a Dental Crown Procedure</h2>
                                <p>At <b>Smile Craft Dental</b>, the crown process is designed to be <b>comfortable, precise, and efficient:</b></p>
                                <p><b>1. Examination & Planning:</b> Assessment of the tooth, X-rays if needed, and discussion of crown options.</p>
                                <p><b>2. Tooth Preparation:</b> Damaged or decayed areas are removed, and the tooth is shaped to fit the crown.</p>
                                <p><b>3. Impression & Design:</b> For traditional crowns, an impression is taken for the lab. For same-day crowns, digital scans are used.</p>
                                <p><b>4. Crown Placement:</b> The crown is fitted, adjusted for bite, and cemented securely in place.</p>
                                <p><b>5. Follow-Up:</b> Ensures the crown fits comfortably and functions properly.</p>
                                <p><b>Same-day crowns</b> allow patients to leave the clinic with a <b>fully restored tooth in just one visit</b>, ideal for busy schedules.</p>
                            </div>
                            <div className="services-section">
                                <h2>Benefits of Dental Crowns</h2>
                                <ul>
                                    <li>
                                        <b>Protect & Reinforce Teeth:</b> Prevent further damage or fracture
                                    </li>
                                    <li>
                                        <b>Enhance Appearance:</b> Colour and shape can be matched for a natural smile
                                    </li>
                                    <li>
                                        <b>Long-Lasting:</b> With proper care, crowns can last <b>many years</b>
                                    </li>
                                </ul>
                            </div>
                            <div className="services-section services-split">
                                <div className="services-section-images">
                                    <div className="crown-image-card">
                                        <img src={CrownBefore} alt="Before Crown" />
                                        <span className="crown-label">BEFORE CROWN</span>
                                    </div>
                                    <div className="crown-image-card">
                                        <img src={CrownAfter} alt="After Crown" />
                                        <span className="crown-label">AFTER CROWN</span>
                                    </div>
                                </div>
                            </div>
                            <div className="services-section">
                                <h2>Are Dental Crowns Are Right for You</h2>
                                <p>
                                    Dental crowns are a versatile solution for restoring and protecting teeth that are <b>damaged, weakened, or worn</b>. They help <b>reinforce tooth strength, restore chewing function, and enhance appearance</b> by matching the natural colour and shape of your teeth. Crowns are ideal for teeth with large fillings, after root canal treatment, or for improving aesthetics while maintaining long-term oral health. At <b>Smile Craft Dental</b>, we focus on <b>durable, natural-looking results</b> that blend seamlessly with your smile.
                                </p>
                            </div>
                            <div className="services-section">
                                <h2>Considering Other Smile Enhancement Options?</h2>
                                <p>
                                    Every smile is unique, and the best treatment depends on your goals, tooth condition, and long-term oral health. 
                                    At <b>Smile Craft Dental</b>, we offer a range of solutions to help enhance your smile:
                                </p>
                                <ul>
                                    <li><b>Dental Veneers</b> – A cosmetic option ideal for improving tooth shape, colour, minor gaps, and overall smile aesthetics</li>
                                    <li><b>Invisalign</b> – An orthodontic option for discreetly straightening crooked or misaligned teeth</li>
                                    <li><b>Dental Crowns</b> – Recommended when teeth need extra strength, protection, or restoration after damage or decay</li>
                                </ul>
                                <p>
                                    During your consultation, your dentist will explain how <b>veneers, invisalign, or crowns</b> can address your specific needs and guide you toward the best combination of cosmetic and functional results.
                                </p>
                            </div>
                        </div>
                        <Banner />
                        <div className="services-section">
                            <h2>DENTAL PROBLEMS DENTAL CROWN CAN ADDRESS</h2>
                        </div>
                        <div className="services-tiles" id="sub-services-tiles">
                            <div className="service-tile">
                                <h3>Missing Teeth</h3>
                                <p>Replace missing teeth to restore function, confidence, and your smile.</p>
                                <NavLink to="/help-me-with/missing-teeth" className="tile-link">LEARN MORE →</NavLink>
                            </div>
                            <div className="service-tile">
                                <h3>Tooth Staining</h3>
                                <p>Brighten discoloured teeth for a cleaner, whiter, more confident smile.</p>
                                <NavLink to="/help-me-with/tooth-staining" className="tile-link">LEARN MORE →</NavLink>
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

export default DentalCrowns;
