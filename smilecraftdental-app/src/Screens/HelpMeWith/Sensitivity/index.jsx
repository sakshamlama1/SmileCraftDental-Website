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
import SensitivityImage from "../../../assets/help-me-with-images/Sensitivity.png";

function Sensitivity() {
    return (
        <div className="services-screen">
            <Header />
            <Hero 
                title={"HELP ME WITH - SENSITIVITY"}
                subheading={`
                    Sensitive Teeth? You Don’t Have to Live With It.
                    Get gentle, effective care designed to restore your comfort.
                `}
                media={SensitivityImage}
            />
            <div className="help-me-with-container">
                <div className="help-me-with-content">
                    <section className="help-me-with-landing">
                        <div className="help-me-with-section">
                            <h2>How We Can Help</h2>
                            <p>
                                Tooth sensitivity should not interfere with your daily life. 
                                At <b>Smile Craft Dental</b>, we offer personalized care using modern techniques to help reduce 
                                discomfort and protect your smile.
                            </p>
                            <p>
                                Our approach may include:
                            </p>
                            <ul>
                                <li>Desensitizing treatments to strengthen enamel</li>
                                <li>Customized oral care recommendations</li>
                                <li>Treatment of cavities, worn enamel, or gum concerns</li>
                                <li>Long-term preventive care plans tailored to your needs</li>
                            </ul>
                            <p>
                                Early diagnosis can make a significant difference. Schedule a consultation with <b>Smile Craft Dental</b>, 
                                and let our experienced dental team help you enjoy eating, drinking, and smiling comfortably again.
                            </p>
                        </div>
                        <div className="help-me-with-section">
                            <h2>Common Causes of Tooth Sensitivity</h2>
                            <p>
                                Tooth sensitivity can affect one or multiple teeth and may have several causes. 
                                Understanding the source is key to effective treatment and lasting relief.
                            </p>
                            <ul>
                                <li><b>Aggressive Brushing:</b> Brushing too hard or using hard bristles can wear down enamel and irritate gums, exposing sensitive tooth layers.</li>
                                <li><b>Enamel Erosion:</b> Acidic foods and drinks like soda, citrus, coffee, and sports drinks can thin enamel, increasing sensitivity.</li>
                                <li><b>Tooth Decay or Damaged Fillings:</b> Cavities, cracks, or loose fillings allow bacteria to reach inner tooth layers, irritating the nerve.</li>
                                <li><b>Gum Recession:</b> Gum disease or improper flossing can cause gums to recede, exposing tooth roots that are more sensitive.</li>
                                <li><b>Bite Imbalance or Jaw Pressure:</b> Uneven bite forces can strain certain teeth, causing localized sensitivity.</li>
                                <li><b>Recent Dental Procedures:</b> Cleanings, fillings, crowns, or whitening may cause temporary sensitivity that usually fades.</li>
                            </ul>
                            <p>
                                Persistent or worsening sensitivity may signal an underlying issue. 
                                An exam at <b>Smile Craft Dental</b> can identify the cause and help prevent further damage.
                            </p>
                        </div>
                        <Banner />
                    </section>
                </div>
            </div>
            <Carousel images={imageList} />
            <SpecialOffersCarousel offers={offersList}/>
            <WhyChooseUs />
            <PriceListButton />
            <GetInTouch />
            <Banner />
            <Footer />
        </div>
    );
}

export default Sensitivity;
