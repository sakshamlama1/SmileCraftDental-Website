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
import ChippedTeethImage from "../../../assets/help-me-with-images/Chipped teeth.png";

function ChippedTeeth() {
    return (
        <div className="services-screen">
            <Header />
            <Hero 
                title={"HELP ME WITH - CHIPPED TOOTH"}
                subheading={`Noticed a rough edge, sensitivity, or a missing piece of your tooth?
                    You may have chipped a tooth — a common dental issue that can range from minor cosmetic damage to more serious concerns.
                    Learn what causes chipped teeth and how they can be treated.
                `}
                media={ChippedTeethImage}
            />

            <div className="help-me-with-container">
                <div className="help-me-with-content">
                    <section className="help-me-with-landing">

                        <div className="help-me-with-section">
                            <h2>Chipped Tooth: Symptoms, Causes & Treatment</h2>
                            <p>
                                A chipped tooth occurs when a small portion of the tooth’s outer layer (enamel) breaks off. 
                                This can happen suddenly due to injury or from biting something hard. While minor chips may only affect appearance, 
                                more serious damage can expose sensitive inner layers and require treatment.
                            </p>
                        </div>

                        <div className="help-me-with-section">
                            <h2>What Is a Chipped Tooth?</h2>
                            <p>
                                Tooth enamel is the strong outer layer that protects your teeth. Although durable, it isn’t indestructible. 
                                A fall, sports injury, or even biting down on something hard can cause a piece to break off.
                            </p>
                            <ul>
                                <li><strong>Minor chips:</strong> Usually cosmetic, with little to no pain</li>
                                <li><strong>Severe chips:</strong> May expose nerves, causing pain and sensitivity</li>
                            </ul>
                            <p>
                                Even if it feels minor, it’s important to have it checked by a dental professional.
                            </p>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Chipped vs. Cracked Tooth</h2>
                            <ul>
                                <li><strong>Chipped tooth:</strong> A piece of enamel breaks off</li>
                                <li><strong>Cracked tooth:</strong> A fracture runs through the tooth</li>
                            </ul>
                            <p>
                                Both conditions vary in severity and should be assessed by a dentist.
                            </p>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Symptoms of a Chipped Tooth</h2>
                            <ul>
                                <li>Visible missing piece of tooth</li>
                                <li>Rough or sharp edge</li>
                                <li>Tooth sensitivity (hot, cold, or sweet foods)</li>
                                <li>Pain when biting or chewing (in more serious cases)</li>
                            </ul>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Common Causes</h2>
                            <ul>
                                <li>Facial injuries (falls, accidents, sports)</li>
                                <li>Biting hard foods (ice, candy, hard fruits)</li>
                                <li>Using teeth to open packaging</li>
                                <li>Teeth grinding (bruxism)</li>
                                <li>Nail biting</li>
                            </ul>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Risk Factors</h2>
                            <p>You may be more likely to chip a tooth if you have:</p>
                            <ul>
                                <li>Tooth decay or weakened enamel</li>
                                <li>Frequent consumption of sugary or acidic foods</li>
                                <li>Acid reflux (GERD)</li>
                                <li>Large fillings or previous dental work</li>
                                <li>Long-term teeth grinding</li>
                                <li>Natural wear with age</li>
                            </ul>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Possible Complications</h2>
                            <p>
                                Small chips may not cause issues, but larger ones can:
                            </p>
                            <ul>
                                <li>Expose inner tooth layers</li>
                                <li>Increase risk of infection</li>
                                <li>Lead to pain and further damage</li>
                            </ul>
                            <p>
                                Early treatment helps prevent complications.
                            </p>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Diagnosis</h2>
                            <p>
                                Your dentist will examine the tooth and may take X-rays to assess the extent of the damage.
                            </p>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Treatment Options</h2>
                            <p>
                                Treatment depends on the size and location of the chip:
                            </p>
                            <ul>
                                <li><strong>Polishing:</strong> Smooths minor chips</li>
                                <li><strong>Bonding:</strong> Tooth-coloured resin repairs small chips</li>
                                <li><strong>Veneers:</strong> Improve appearance of front teeth</li>
                                <li><strong>Fillings:</strong> Restore structure, especially in back teeth</li>
                                <li><strong>Crowns:</strong> Protect severely damaged teeth</li>
                                <li><strong>Root canal:</strong> Needed if the nerve is exposed or infected</li>
                            </ul>
                        </div>

                        <div className="help-me-with-section">
                            <h2>What to Expect</h2>
                            <ul>
                                <li>Minor chips may only need smoothing</li>
                                <li>Moderate chips can be repaired quickly with bonding</li>
                                <li>Severe damage may require multiple visits and restorative treatment</li>
                            </ul>
                            <p>
                                Most chipped teeth can be restored effectively, both functionally and cosmetically.
                            </p>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Prevention Tips</h2>
                            <ul>
                                <li>Wear a mouthguard during sports</li>
                                <li>Use a night guard if you grind your teeth</li>
                                <li>Avoid chewing hard objects (ice, pens)</li>
                                <li>Limit sugary and acidic foods</li>
                                <li>Maintain regular dental check-ups</li>
                                <li>Use teeth only for eating—not opening packages</li>
                            </ul>
                        </div>

                        <div className="help-me-with-section">
                            <h2>What to Do If You Chip a Tooth</h2>
                            <p>While waiting to see a dentist:</p>
                            <ul>
                                <li>Rinse your mouth with warm water</li>
                                <li>Save any broken fragment in milk (if possible)</li>
                                <li>Cover sharp edges with dental wax or sugar-free gum</li>
                                <li>Eat soft foods and avoid chewing on the affected side</li>
                                <li>Use over-the-counter pain relief if needed</li>
                            </ul>
                        </div>

                        <div className="help-me-with-section">
                            <h2>When to See a Dentist</h2>
                            <p>
                                Book an appointment as soon as you notice the chip—even if it seems minor. 
                                Only a dental professional can determine the extent of damage and recommend the right treatment.
                            </p>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Questions to Ask Your Dentist</h2>
                            <ul>
                                <li>How serious is the chip?</li>
                                <li>Do I need treatment?</li>
                                <li>What are my treatment options?</li>
                                <li>How many visits will it take?</li>
                                <li>How can I prevent this in the future?</li>
                            </ul>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Final Note</h2>
                            <p>
                                A chipped tooth can be unsettling, but it’s a very common issue with effective treatment options available. 
                                Whether minor or severe, prompt care helps protect your tooth and restore your smile with confidence.
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

export default ChippedTeeth;
