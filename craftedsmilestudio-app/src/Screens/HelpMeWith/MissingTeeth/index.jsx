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
import MissingTeethImage from "../../../assets/help-me-with-images/Missing Teeth.png";

function MissingTeeth() {
    return (
        <div className="services-screen">
            <Header />
            <Hero 
                title={"HELP ME WITH - MISSING TEETH"}
                subheading={`
                    Restore Your Smile and Confidence
                    Missing teeth can affect your appearance, comfort, and oral health.
                    Discover long-lasting tooth replacement solutions at Crafted Smiles Studio.
                `}
                media={MissingTeethImage}
            />
            <div className="help-me-with-container">
                <div className="help-me-with-content">
                    <section className="help-me-with-landing">
                        <div className="help-me-with-section">
                            <h2>Common Causes of Missing Teeth</h2>
                            <p>
                                Teeth can become missing for several reasons, often related to oral health, injury, or genetics. 
                                Understanding the cause of tooth loss helps in choosing the most appropriate missing teeth treatment.
                            </p>
                            <ul>
                                <li><b>Tooth Decay:</b> Tooth decay is the most common cause of tooth loss in adults. When decay is left untreated, it can progress into a deep cavity that weakens the tooth structure. If the damage becomes too extensive to repair, the tooth may need to be removed.</li>
                                <li><b>Gum Disease:</b> Gum disease develops when plaque and bacteria accumulate around the teeth, causing inflammation and infection of the gums. In advanced stages, it can damage the supporting bone, leading to loose teeth that may eventually fall out if not treated.</li>
                                <li><b>Injuries or Accidents:</b> Trauma such as falls, sports injuries, car accidents, or a direct blow to the mouth can result in teeth being knocked out or severely damaged. If a tooth is not replanted or treated promptly, saving it may not be possible.</li>
                                <li><b>Genetic Conditions:</b> Some people are born with genetic conditions that prevent certain teeth from developing. Conditions such as ectodermal dysplasia can result in missing teeth or, in rare cases, the absence of most or all teeth.</li>
                            </ul>
                        </div>
                        <div className="help-me-with-section">
                            <h2>Missing Teeth: Why Treatment and Replacement Are Essential</h2>
                            <p>
                                Missing teeth can have a significant impact on both your oral health and overall quality of life. 
                                The causes of missing teeth may include tooth decay, gum disease, injury, or natural wear over time. 
                                Gaps in teeth can lead to tooth loss problems such as difficulty chewing, speech changes, and reduced 
                                confidence—especially when missing front teeth affect appearance or missing back teeth make eating uncomfortable. 
                                If you don’t replace missing teeth, nearby teeth may begin shifting due to tooth loss, causing bite imbalance, 
                                jaw pain from missing teeth, and further dental complications. Over time, missing teeth and bone loss can occur 
                                as the jawbone weakens without proper stimulation, increasing the risk of facial collapse and long-term oral health issues. 
                                Choosing timely missing teeth treatment and exploring the best solution for missing teeth can help prevent these complications 
                                and support lasting tooth loss prevention.
                            </p>
                        </div>
                        <div className="help-me-with-section">
                            <h2>Tooth Replacement Options</h2>
                            <p>
                                At <b>Crafted Smiles Studio</b>, we offer a range of effective solutions to replace missing teeth based on your needs and lifestyle. 
                                Options include <b>dental implants</b> for a permanent, natural-looking replacement, <b>dental bridges</b> to fill gaps using 
                                neighbouring teeth, and <b>partial or full dentures</b> for restoring multiple missing teeth. Our team will create a 
                                personalised treatment plan to help you regain function, comfort, and a confident smile.
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

export default MissingTeeth;
