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
import DentalVeneersVideo from "../../../../assets/videos/DentalVeneers.mp4";
import Hero from "../../../../Components/Hero";
import WhyChooseUs from "../../../../Components/WhyChooseUs";
import Banner from "../../../../Components/Banner";
import FAQComponent from "../../../../Components/FAQComponent";
import DentalVeneersBannerImage from "../../../../assets/banner-images/dental-veneers-banner-image.png";

const faqsArray = [
    {
        question: "How long do dental veneers last?",
        answer: (
            <>
              With proper care, veneers can last <b>10–15 years or longer</b>, depending on the material used.
            </>
        )
    },
    {
        question: "Do veneers damage natural teeth?",
        answer: (
            <>
               Veneers are a conservative treatment. Only minimal tooth preparation is required, and your dentist will preserve as much natural tooth structure as possible.
            </>
        )
    },
    {
        question: "Are veneers permanent?",
        answer: (
            <>
             Veneers are considered a long-term solution. Once placed, replacement may be needed in the future as part of normal dental maintenance.
            </>
        )
    },
    {
        question: "Will veneers look natural?",
        answer: (
            <>
              Yes. Veneers are <b>custom-designed and colour-matched</b> to blend seamlessly with your smile.
            </>
        )
    },
    {
        question: "Are veneers only for front teeth?",
        answer: (
            <>
              Veneers are most commonly used on front teeth but may be suitable for other visible teeth depending on your bite and needs.
            </>
        )
    }
];


function DentalVeneers() {
    return (
        <div className="services-screen">
            <Header />
            <Hero 
                title={"DENTAL VENEERS IN Tuncurry"}
                subheading={`At Smile Craft Dental, we offer custom dental veneers to help patients achieve a brighter, more confident smile. Veneers are a popular cosmetic dental treatment designed to improve the shape, colour, alignment, and overall appearance of teeth while maintaining a natural look.
                            If you are searching for smile makeover options, cosmetic veneers, or teeth veneers near Tuncurry, our experienced team is here to guide you through every step of your transformation.
                `}
                media={DentalVeneersBannerImage}
            />
            <div className="services-container">
                <div className="services-content">
                    <section className="services-landing">
                        <div className="services-intro">
                            <div className="services-section">
                                <h2>What Are Dental Veneers?</h2>
                                <p>
                                    Dental veneers are <b>thin, custom-made shells</b> that are bonded to the front surface of teeth. 
                                    They are designed to enhance aesthetics while preserving as much natural tooth structure as possible.
                                </p>
                                <p>Veneers are commonly used to address:</p>
                                <ul>
                                    <li>
                                        Discoloured or stained teeth
                                    </li>
                                    <li>
                                        Chipped or worn teeth
                                    </li>
                                    <li>
                                        Gaps between teeth
                                    </li>
                                    <li>
                                        Mildly crooked or uneven teeth
                                    </li>
                                    <li>
                                       Irregular tooth shape or size
                                    </li>
                                </ul>
                            </div>

                            <div className="services-section">
                                <h2>Types of Dental Veneers We Offer</h2>
                                <p>At <b>Smile Craft Dental</b>, we provide a range of veneer options to suit different goals and budgets:</p>
                                <ul>
                                    <li>
                                        <b>Porcelain Veneers:</b> Highly durable and stain-resistant, porcelain veneers offer a <b>natural, long-lasting aesthetic</b> and are ideal for smile makeovers.
                                    </li>
                                     <li>
                                        <b>Composite Veneers:</b> A more affordable option, composite veneers can be applied in a single visit and are suitable for minor repairs.   
                                    </li>
                                     <li>
                                        <b>No-Prep or Minimal-Prep Veneers:</b> In selected cases, veneers can be placed with <b>little to no tooth reduction</b>, preserving natural tooth structure.
                                    </li>
                                     <li>
                                        <b>Emax Veneers:</b> Made from high-strength ceramic, Emax veneers provide <b>excellent aesthetics and durability</b>, especially for front teeth.
                                    </li>
                                </ul>
                                <p>Your dentist will recommend the most suitable veneer type based on your smile goals, tooth condition, and long-term oral health.</p>
                            </div>
                            <div className="services-section">
                                <h2>Benefits of Dental Veneers</h2>
                                <p>
                                    Patients choose veneers because they can:
                                </p>
                                <ul>
                                    <li>
                                        Create a <b>whiter, brighter smile</b>
                                    </li>
                                    <li>
                                        Improve <b>tooth shape and symmetry</b>
                                    </li>
                                    <li>
                                        Close small gaps between teeth
                                    </li>
                                    <li>
                                        Restore worn or chipped teeth
                                    </li>
                                    <li>
                                       Enhance confidence in social and professional settings
                                    </li>
                                    <li>
                                       Provide long-lasting cosmetic results with proper care
                                    </li>
                                </ul>
                                <p>Veneers are carefully colour-matched to blend seamlessly with your natural teeth for a <b>balanced, harmonious smile.</b></p>
                            </div>
                            <div className="services-section services-split">
                                <ServiceSection video={DentalVeneersVideo} />
                            </div>
                            <div className="services-section">
                                <h2>What to Expect During a Dental Veneers Treatment</h2>
                                <p>
                                    The veneer process is comfortable and well-planned:
                                </p>
                                <p>
                                    <b>1. Consultation & Smile Assessment:</b> Discuss your goals and treatment options
                                </p>
                                <p>
                                    <b>2. Tooth Preparation:</b> Minimal reshaping of the tooth if required
                                </p>
                                <p>
                                    <b>3. Impressions or Digital Scans:</b> Used to design your custom veneers
                                </p>
                                <p>
                                    <b>4. Temporary Veneers:</b> Provided if needed while final veneers are crafted
                                </p>
                                <p>
                                    <b>5. Final Placement:</b>  Veneers are bonded, adjusted, and polished for a natural finish
                                </p>
                                <p>Our focus is always on <b>precision, comfort, and long-term satisfaction.</b></p>
                            </div>
                            <div className="services-section">
                                <h2>Are Dental Veneers Right for You?</h2>
                                <p>
                                    Dental veneers may be ideal if you want to enhance your smile without extensive dental treatment. 
                                    During your consultation, we will discuss <b>all suitable cosmetic options</b> and help you make an informed decision that aligns with your goals.

                                </p>
                            </div>
                            <div className="services-section">
                                <h2>Considering Other Smile Enhancement Options?</h2>
                                <p>
                                    Every smile is unique, and the best treatment depends on your goals, tooth condition, and long-term oral health. 
                                    At <b>Smile Craft Dental</b>, we offer a variety of cosmetic and restorative solutions to help you achieve your ideal smile:
                                </p>
                                <ul>
                                    <li><b>Dental Crowns</b> – An alternative for teeth that need extra strength, protection, or restoration after damage or decay</li>
                                    <li><b>Invisalign</b> – A discreet option for straightening crooked or misaligned teeth without traditional braces</li>
                                    <li><b>Dental Veneers</b> – Perfect for enhancing tooth shape, colour, minor gaps, and overall smile aesthetics</li>
                                </ul>
                                <p>
                                    During your consultation, your dentist will discuss how <b>crowns, invisalign or veneers</b> may suit your needs and guide you toward the solution that provides the best combination of cosmetic results and long-term oral health.
                                </p>
                            </div>
                        </div>
                        <Banner />
                        <div className="services-section">
                            <h2>DENTAL PROBLEMS DENTAL VENEERS CAN ADDRESS</h2>
                        </div>
                        <div className="services-tiles" id="sub-services-tiles">
                            <div className="service-tile">
                                <h3>Crooked Teeth</h3>
                                <p>Straighten misaligned teeth with modern, comfortable orthodontic solutions.</p>
                                <NavLink to="/help-me-with/crooked-teeth" className="tile-link">LEARN MORE →</NavLink>
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

export default DentalVeneers;
