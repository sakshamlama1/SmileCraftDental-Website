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
import FillingsHelpImage from "../../../assets/help-me-with-images/Filling.png";

function FillingsHelp() {
    return (
        <div className="services-screen">
            <Header />
            <Hero 
                title={"HELP ME WITH - DENTAL FILLINGS"}
                subheading={`Noticed sensitivity, pain, or damage in your tooth?
                    You may need a dental filling — a common treatment to restore and protect your teeth.
                    Learn when fillings are needed and what to expect.
                `}
                media={FillingsHelpImage}
            />

            <div className="help-me-with-container">
                <div className="help-me-with-content">
                    <section className="help-me-with-landing">

                        <div className="help-me-with-section">
                            <h2>Dental Fillings: What You Need to Know</h2>
                            <p>
                                Dental fillings are one of the most common treatments used to repair teeth damaged by decay, cracks, or wear. 
                                They restore the tooth’s shape, strength, and function while preventing further damage.
                            </p>
                        </div>

                        <div className="help-me-with-section">
                            <h2>What Are Dental Fillings?</h2>
                            <p>
                                A dental filling is a material used to “fill” a cavity or damaged area in a tooth after the decay has been removed. 
                                Fillings help restore your tooth so you can eat and chew normally.
                            </p>
                        </div>

                        <div className="help-me-with-section">
                            <h2>When Do You Need a Filling?</h2>
                            <p>You may need a filling if you have:</p>
                            <ul>
                                <li>Tooth decay (cavities)</li>
                                <li>A chipped or cracked tooth</li>
                                <li>Worn teeth from grinding (bruxism)</li>
                                <li>Small fractures or damage</li>
                            </ul>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Signs You Might Need a Filling</h2>
                            <ul>
                                <li>Toothache or sensitivity</li>
                                <li>Pain when eating or drinking</li>
                                <li>Visible holes or dark spots on a tooth</li>
                                <li>Food getting stuck in certain areas</li>
                                <li>Rough or damaged tooth surface</li>
                            </ul>
                            <p>
                                Some cavities don’t cause symptoms, which is why regular dental check-ups are important.
                            </p>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Types of Filling Materials</h2>
                            <p>
                                Your dentist will recommend the best material based on your needs:
                            </p>
                            <ul>
                                <li><strong>Composite (tooth-coloured):</strong> Blends naturally with your teeth; ideal for front and visible areas</li>
                                <li><strong>Amalgam (silver):</strong> Strong and durable; often used for back teeth</li>
                                <li><strong>Ceramic (porcelain):</strong> Highly aesthetic and stain-resistant</li>
                                <li><strong>Glass ionomer:</strong> Releases fluoride and is often used for children or near the gumline</li>
                            </ul>
                        </div>

                        <div className="help-me-with-section">
                            <h2>The Filling Procedure</h2>
                            <p>
                                Getting a filling is a straightforward process:
                            </p>
                            <p>1. The area is numbed for comfort</p>
                            <p>2. Decay or damaged tooth structure is removed</p>
                            <p>3. The tooth is cleaned and prepared</p>
                            <p>4. Filling material is placed and shaped</p>
                            <p>5. The filling is hardened (if required) and polished</p>
                            <p>
                                Most fillings can be completed in a single visit.
                            </p>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Aftercare & Recovery</h2>
                            <ul>
                                <li>Mild sensitivity may occur for a few days</li>
                                <li>Avoid very hard or sticky foods immediately after treatment</li>
                                <li>Maintain good oral hygiene (brushing and flossing)</li>
                                <li>Attend regular dental check-ups</li>
                            </ul>
                            <p>
                                If pain persists or your bite feels uneven, contact your dentist.
                            </p>
                        </div>

                        <div className="help-me-with-section">
                            <h2>How Long Do Fillings Last?</h2>
                            <p>
                                The lifespan depends on the material and care:
                            </p>
                            <ul>
                                <li><strong>Composite:</strong> 5–10 years</li>
                                <li><strong>Amalgam:</strong> 10–15+ years</li>
                                <li><strong>Ceramic:</strong> 10–15 years or more</li>
                            </ul>
                            <p>
                                Good oral hygiene and regular dental visits can extend their lifespan.
                            </p>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Preventing the Need for Fillings</h2>
                            <ul>
                                <li>Brush twice daily with fluoride toothpaste</li>
                                <li>Floss daily</li>
                                <li>Limit sugary foods and drinks</li>
                                <li>Visit your dentist regularly</li>
                                <li>Address dental issues early</li>
                            </ul>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Final Note</h2>
                            <p>
                                Dental fillings are a simple and effective way to restore damaged teeth and prevent further decay. 
                                Early treatment helps maintain your natural teeth and keeps your smile healthy and strong.
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

export default FillingsHelp;
