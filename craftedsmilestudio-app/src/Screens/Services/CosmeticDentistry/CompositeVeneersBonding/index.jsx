import Header from "../../../../Components/Header";
import Footer from "../../../../Components/Footer";
import GetInTouch from "../../../../Components/GetInTouch";
import PriceListButton from "../../../../Components/PriceListButton";
import Carousel from "../../../../Components/Carousel";
import imageList from "../../../../utils/carouselImages";
import SpecialOffersCarousel from "../../../../Components/SpecialOffersCarousel";
import offersList from "../../../../utils/specialOffers";
import ServiceSection from "../../../../Components/ServiceSection";
import CompositeVeneersBondingVideo from "../../../../assets/videos/CompositeVeneersBonding.mp4";
import Hero from "../../../../Components/Hero";
import WhyChooseUs from "../../../../Components/WhyChooseUs";
import Banner from "../../../../Components/Banner";
import FAQComponent from "../../../../Components/FAQComponent";
import CompositeVeneersBondingBannerImage from "../../../../assets/banner-images/composite-veneers-bonding-image.png";

const faqsArray = [
    {
        question: "How long do composite veneers and bonding last?",
        answer: (
            <>
                With proper care, <b>composite veneers and bonding can last 5–10 years</b>. Longevity depends on oral hygiene, diet, and avoiding habits like biting hard objects.
            </>
        )
    },
    {
        question: "Is the procedure painful?",
        answer: (
            <>
                Most patients experience <b>minimal discomfort</b>. Composite veneers and bonding are <b>minimally invasive</b> with little to no enamel removal, making it a comfortable procedure.
            </>
        )
    },
    {
        question: "Can composite veneers or bonding be repaired if damaged?",
        answer: (
            <>
                Yes. Composite material can be <b>easily repaired or touched up</b> without needing to replace the entire veneer, making it a flexible cosmetic option.
            </>
        )
    },
    {
        question: "Will my veneers or bonding look natural?",
        answer: (
            <>
                Absolutely. We use <b>advanced composite resin materials</b> that are <b>colour-matched and shaped</b> to your teeth for a <b>natural, seamless appearance</b>.
            </>
        )
    },
    {
        question: "Are composite veneers and bonding suitable for everyone?",
        answer: (
            <>
                They are ideal for patients with <b>minor chips, cracks, gaps, discoloration, or uneven teeth</b>. Your dentist will assess your smile to determine if this is the best cosmetic solution for you.
            </>
        )
    }
];


function CompositeVeneers() {
    return (
        <div className="services-screen">
            <Header />
            <Hero
                title={"COMPOSITE VENEERS & BONDING IN ELERMORE VALE"}
                subheading={`
                    At Crafted Smiles Studio, we provide custom composite veneers and dental bonding to enhance the appearance of your smile quickly, affordably, and with minimal alteration to your natural teeth. 
                    Our treatments are designed to correct minor chips, gaps, discoloration, and uneven teeth, helping you achieve a beautiful, natural-looking smile.
                `}
                media={CompositeVeneersBondingBannerImage}
            />
            <div className="services-container">
                
                <div className="services-content">
                    <section className="services-landing">
                        <div className="services-intro">
                            <div className="services-section">
                                <h2>Affordable, Natural-Looking Smile Enhancements</h2>
                                <p>
                                    If you're looking to improve your smile quickly, affordably, and without major dental work, <b>composite veneers and dental bonding</b> could be the ideal solution. These treatments can <b>enhance the shape, size, and colour</b> of your teeth with minimal preparation and <b>no permanent alteration</b> to your natural tooth structure.
                                </p>
                                <p>
                                    At Crafted Smiles Studio, we use <b>advanced composite resin materials</b> to achieve <b>beautiful, natural-looking results—often in a single appointment</b>.
                                </p>
                            </div>

                            <div className="services-section">
                                <h2>What Are Composite Veneers?</h2>
                                <p>
                                    Composite veneers are made from <b>tooth-coloured resin</b>, the same material used in white fillings. The resin is applied directly to your teeth, then sculpted and polished to enhance your smile.
                                </p>
                                <p><b>This treatment is:</b></p>
                                <ul>
                                    <li><b>Minimally invasive</b> – little to no enamel removal</li>
                                    <li><b>Custom-shaped</b> while you’re in the chair</li>
                                    <li><b>Completed in one visit</b> (or two, depending on the number of teeth)</li>
                                    <li><b>More affordable</b> than porcelain veneers</li>
                                </ul>
                                <p><b>Ideal for:</b></p>
                                <ul>
                                    <li>Discoloured or uneven teeth</li>
                                    <li>Minor chips or cracks</li>
                                    <li>Small gaps between teeth</li>
                                    <li>Teeth that are too short or worn</li>
                                    <li>Slightly misaligned or misshaped teeth</li>
                                </ul>
                            </div>

                            <div className="services-section">
                                <h2>What Is Dental Bonding?</h2>
                                <p>
                                    Dental bonding is a cosmetic procedure that uses composite resin to <b>fix small imperfections</b>. It’s <b>quick, cost-effective, and versatile</b>—perfect for patients wanting <b>subtle changes without more extensive treatment</b>.
                                </p>
                                <p><b>Bonding can be used to:</b></p>
                                <ul>
                                    <li>Repair chipped or cracked teeth</li>
                                    <li>Fill small gaps</li>
                                    <li>Improve tooth shape or length</li>
                                    <li>Cover discolouration</li>
                                    <li>Make minor alignment corrections</li>
                                </ul>
                                <p>
                                    The resin is applied in layers, hardened with a curing light, then shaped and polished for a <b>smooth, natural finish</b>. Most procedures take <b>under an hour per tooth</b>.
                                </p>
                            </div>
                            
                            <div className="services-section services-split">
                                <ServiceSection video={CompositeVeneersBondingVideo} />
                            </div>

                            <div className="services-section">
                                <h2>How to Care for Composite Veneers & Bonding</h2>
                                <p><b>Maintain your results</b> with good oral hygiene and mindful habits:</p>
                                <ul>
                                    <li>Brush twice daily with fluoride toothpaste</li>
                                    <li>Floss daily to remove plaque</li>
                                    <li>Avoid biting on hard items like pens or ice</li>
                                    <li>Limit staining foods and drinks (e.g. coffee, red wine)</li>
                                    <li>Avoid smoking to prevent discolouration</li>
                                    <li>Attend regular dental check-ups and cleans</li>
                                </ul>
                                <p>
                                    Composite resin is <b>more prone to staining than porcelain</b>, so caring for your smile is key to keeping it looking great.
                                </p>
                            </div>
                            <div className="services-section">
                                <h2>Is Composite Veneers & Bonding right for You?</h2>
                                <p>
                                    <b>Composite veneers</b> and <b>bonding</b> are great if you're looking for:
                                </p>
                                <ul>
                                    <li>A <b>fast cosmetic solution</b></li>
                                    <li>A <b>budget-friendly alternative</b> to porcelain veneers</li>
                                    <li>A <b>non-invasive option</b> with little or no enamel removal</li>
                                    <li>A <b>reversible treatment</b> with natural-looking results</li>
                                </ul>
                                <p>
                                    We’ll assess your teeth, discuss your goals, and help you choose between <b>composite or porcelain veneers</b>—or another cosmetic option that suits your needs.
                                </p>
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

export default CompositeVeneers;
