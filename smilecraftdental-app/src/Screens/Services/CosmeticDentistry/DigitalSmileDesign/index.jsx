import Header from "../../../../Components/Header";
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
import DigitalSmileDesignBannerImage from "../../../../assets/banner-images/digital-smile-design-image.png";

const faqsArray = [
    {
        question: "Can I see my smile before treatment?",
        answer: (
            <>
                Yes. <b>Digital Smile Design (DSD)</b> allows you to preview your smile digitally before any dental work begins.
            </>
        )
    },
    {
        question: "Is Digital Smile Design only for cosmetic dentistry?",
        answer: (
            <>
                While commonly used for <b>cosmetic treatments</b>, DSD also supports <b>functional and restorative planning</b>.
            </>
        )
    },
    {
        question: "Does Digital Smile Design add extra treatment time?",
        answer: (
            <>
                No. DSD improves <b>planning efficiency</b> and often reduces treatment adjustments later, saving time overall.
            </>
        )
    },
    {
        question: "Is Digital Smile Design suitable for everyone?",
        answer: (
            <>
                Most patients considering smile improvements can benefit. Your dentist will advise if it’s appropriate for your case.
            </>
        )
    },
    {
        question: "Does Digital Smile Design guarantee results?",
        answer: (
            <>
                While no treatment can guarantee outcomes, DSD significantly improves <b>predictability and patient satisfaction</b>.
            </>
        )
    }
];

function DigitalSmileDesign() {
    return (
        <div className="services-screen">
            <Header />
            <Hero
                title={"DIGITAL SMILE DESIGN IN Tuncurry"}
                subheading={`
                    At Smile Craft Dental, we use Digital Smile Design (DSD) to help patients visualise their new smile before treatment begins. 
                    DSD combines digital photography, facial analysis, and smile simulation to create a personalised, predictable smile makeover.
                    Our experienced team ensures you feel confident and informed every step of the way.
                `}
                media={DigitalSmileDesignBannerImage}
            />
            <div className="services-container">
                <div className="services-content">
                    <section className="services-landing">
                        <div className="services-intro">
                            <div className="services-section">
                                <h2>What Is Digital Smile Design?</h2>
                                <p>
                                    Digital Smile Design is a modern dental planning approach that uses <b>digital scans, photographs, and specialised software</b> 
                                    to design a smile that complements your facial features, lip line, bite, and personality.
                                </p>
                                <p>DSD allows you to:</p>
                                <ul>
                                    <li>See a <b>preview of your new smile</b></li>
                                    <li>Understand treatment stages clearly</li>
                                    <li>Participate in the <b>design process</b></li>
                                    <li>Make <b>informed decisions</b> with confidence</li>
                                </ul>
                            </div>

                            <div className="services-section">
                                <h2>Why Choose Digital Smile Design?</h2>
                                <p>Patients choose DSD because it offers:</p>
                                <ul>
                                    <li><b>Predictable outcomes</b> with visual planning</li>
                                    <li><b>Personalised smile aesthetics</b></li>
                                    <li><b>Improved communication</b> between dentist and patient</li>
                                    <li><b>Greater confidence</b> before starting treatment</li>
                                    <li><b>Enhanced accuracy</b> for cosmetic and restorative procedures</li>
                                </ul>
                                <p>DSD places you at the centre of the smile design process.</p>
                            </div>

                            <div className="services-section">
                                <h2>What Treatments Can Be Planned with Digital Smile Design?</h2>
                                <p>DSD is commonly used to plan:</p>
                                <ul>
                                    <li><b>Dental Veneers</b></li>
                                    <li><b>Dental Crowns</b></li>
                                    <li><b>Invisalign</b></li>
                                    <li><b>Teeth Whitening</b></li>
                                    <li><b>Smile Makeovers</b> and combination treatments</li>
                                </ul>
                                <p>This ensures all treatments work together harmoniously for a <b>balanced, natural-looking smile</b>.</p>
                            </div>

                            <div className="services-section">
                                <h2>What to Expect During a Digital Smile Design Consultation</h2>
                                <ul>
                                    <li><b>1. Consultation & Smile Goals Discussion</b></li>
                                    <li><b>2. High-Quality Photos & Digital Scans</b></li>
                                    <li><b>3. Facial & Smile Analysis</b></li>
                                    <li><b>4. Digital Smile Simulation & Preview</b></li>
                                    <li><b>5. Treatment Planning & Timeline Explanation</b></li>
                                </ul>
                                <p>You’ll have the opportunity to review, discuss, and refine your smile design before treatment begins.</p>
                            </div>

                            <div className="services-section">
                                <h2>Benefits of Digital Smile Design for Patients</h2>
                                <ul>
                                    <li>See your smile before committing to treatment</li>
                                    <li>Increased confidence in <b>cosmetic decisions</b></li>
                                    <li>Better alignment between <b>expectations and outcomes</b></li>
                                    <li>Reduced surprises during treatment</li>
                                    <li>Enhanced long-term satisfaction</li>
                                </ul>
                                <p>DSD is especially valuable for patients considering <b>cosmetic dentistry or smile makeovers</b>.</p>
                            </div>
                            <div className="services-section">
                                <h2>Is Digital Smile Design Right for You</h2>
                                <ul>
                                    <li>Want to improve your smile but feel unsure about outcomes</li>
                                    <li>Are considering <b>veneers, crowns, or Invisalign</b></li>
                                    <li>Want a <b>customised and predictable smile makeover</b></li>
                                    <li>Value <b>visual planning and informed decision-making</b></li>
                                </ul>
                                <p>During your consultation, we’ll guide you through how DSD fits into your treatment options.</p>
                            </div>
                        </div>
                        <Banner />
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

export default DigitalSmileDesign;
