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
import BruxismImage from "../../../assets/help-me-with-images/Bruxism.png";

function Bruxism() {
    return (
        <div className="services-screen">
            <Header />
            <Hero 
                title={"HELP ME WITH - BRUXISM"}
                subheading={`Do you wake up with jaw pain, headaches, or sensitive teeth?
                    You could be grinding your teeth at night without realizing it — a condition known as bruxism. 
                    Learn what causes bruxism and how it can be treated.
                `}
                media={BruxismImage}
            />
            <div className="help-me-with-container">
                <div className="help-me-with-content">
                    <section className="help-me-with-landing">
                        <div className="help-me-with-section">
                            <h2>What Is Bruxism</h2>
                            <p>
                                Bruxism is a condition where you unconsciously grind or clench your teeth, either during sleep or while awake. 
                                Many people are unaware they have bruxism until symptoms like jaw pain, headaches, or tooth damage begin to appear. 
                                When left untreated, ongoing grinding can place excessive stress on your teeth, jaw joints, and facial muscles, 
                                leading to long-term oral health concerns.
                            </p>
                        </div>
                        <div className="help-me-with-section">
                            <h2>Common Causes of Bruxism</h2>
                            <p>
                                Bruxism can develop due to a combination of physical, emotional, and lifestyle factors, including:
                            </p>
                            <ul>
                                <li>Stress and anxiety, which often trigger unconscious jaw clenching</li>
                                <li>Sleep disorders, such as sleep apnoea</li>
                                <li>Bite misalignment or uneven teeth, causing excess pressure while chewing</li>
                                <li>Lifestyle habits, including caffeine, alcohol, or smoking</li>
                            </ul>
                            <p>
                                Identifying the underlying cause is key to effective treatment and long-term relief.
                            </p>
                        </div>
                        <div className="help-me-with-section">
                            <h2>The Effects of Untreated Bruxism</h2>
                            <p>Without timely care, bruxism can lead to progressive damage and ongoing discomfort, such as:</p>
                            <ul>
                                <li>Worn, chipped, or fractured teeth</li>
                                <li>Damage to crowns, fillings, or veneers</li>
                                <li>Jaw tension, TMJ disorders, and restricted mouth opening</li>
                                <li>Frequent headaches and facial muscle pain</li>
                                <li>Gum recession and increased tooth sensitivity</li>
                            </ul>
                        </div>
                        <div className="help-me-with-section">
                            <h2>Protect Your Smile with Early Treatment</h2>
                            <p>
                                At Smile Craft Dental, we focus on early diagnosis and personalised bruxism treatment to protect your teeth and relieve discomfort. 
                                From custom mouth guards to targeted bite and jaw solutions, our approach helps prevent further damage and restores long-term oral health. 
                                Seeking treatment early can make a significant difference in preserving your smile and overall comfort.
                            </p>
                        </div>
                    </section>
                    <Banner />
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

export default Bruxism;
