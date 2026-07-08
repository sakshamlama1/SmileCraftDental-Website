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
import SevereToothAcheImage from "../../../assets/help-me-with-images/Tooth ache.png";

function SevereToothAche() {
    return (
        <div className="services-screen">
            <Header />
            <Hero 
                title={"HELP ME WITH - SEVERE TOOTHACHE"}
                subheading={`Experiencing constant or sharp tooth pain that won’t go away?
                    Severe toothache can be a sign of infection or damage inside the tooth.
                    Learn the causes, warning signs, and treatment options to relieve pain and protect your oral health.
                `}
                media={SevereToothAcheImage}
            />

            <div className="help-me-with-container">
                <div className="help-me-with-content">
                    <section className="help-me-with-landing">

                        <div className="help-me-with-section">
                            <h2>Severe Toothache (Dental Pain)</h2>
                            <p>
                                A severe toothache is often a sign that something is wrong inside the tooth or surrounding tissues. 
                                It can range from constant, throbbing pain to sharp pain when biting or with hot and cold foods. 
                                Common causes include deep decay, infection, a cracked tooth, or gum disease.
                            </p>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Common Causes</h2>
                            <ul>
                                <li><strong>Tooth decay (cavities):</strong> Deep decay can reach the inner nerve of the tooth and cause intense pain.</li>
                                <li><strong>Dental infection (abscess):</strong> A bacterial infection can form a pocket of pus, leading to swelling and severe, throbbing pain.</li>
                                <li><strong>Cracked or fractured tooth:</strong> A crack can expose sensitive inner layers of the tooth.</li>
                                <li><strong>Damaged fillings or crowns:</strong> If a filling or crown is loose or missing, the tooth underneath becomes sensitive and painful.</li>
                                <li><strong>Gum disease:</strong> Inflammation or infection of the gums can cause pain and discomfort.</li>
                            </ul>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Signs You Shouldn’t Ignore</h2>
                            <ul>
                                <li>Persistent, severe, or worsening pain</li>
                                <li>Swelling in the face, jaw, or gums</li>
                                <li>Pain when biting or chewing</li>
                                <li>Sensitivity to hot, cold, or sweet foods</li>
                                <li>Fever or a bad taste in the mouth (possible infection)</li>
                                <li>Visible swelling or pus near the tooth</li>
                            </ul>
                        </div>

                        <div className="help-me-with-section">
                            <h2>What You Can Do at Home (Temporary Relief)</h2>
                            <ul>
                                <li>Rinse your mouth with warm salt water to help reduce bacteria and soothe irritation</li>
                                <li>Use over-the-counter pain relief (e.g., ibuprofen or paracetamol, if suitable for you)</li>
                                <li>Apply a cold compress to the outside of your cheek to reduce swelling</li>
                                <li>Avoid chewing on the painful side</li>
                                <li>Keep the area clean by gently brushing and flossing</li>
                            </ul>
                            <p>
                                These are only temporary measures — they do not fix the underlying problem.
                            </p>
                        </div>

                        <div className="help-me-with-section">
                            <h2>When to See a Dentist Immediately</h2>
                            <p>
                                You should seek urgent dental care if you experience:
                            </p>
                            <ul>
                                <li>Severe or throbbing pain that doesn’t improve</li>
                                <li>Swelling in the face or gums</li>
                                <li>Fever or signs of infection</li>
                                <li>Difficulty swallowing or breathing (emergency)</li>
                                <li>A broken tooth or exposed nerve</li>
                            </ul>
                            <p>
                                Delaying treatment can allow the problem to worsen and may lead to more serious infection or tooth loss.
                            </p>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Possible Dental Treatments</h2>
                            <p>
                                A dentist will diagnose the cause and may recommend:
                            </p>
                            <ul>
                                <li>Filling or replacement restoration for decay or a lost filling</li>
                                <li>Root canal treatment if the tooth nerve is infected</li>
                                <li>Tooth extraction in severe or non-restorable cases</li>
                                <li>Antibiotics if there is a spreading infection (in some cases)</li>
                                <li>Crown placement if the tooth needs protection after treatment</li>
                            </ul>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Prevention</h2>
                            <ul>
                                <li>Brush twice daily with fluoride toothpaste</li>
                                <li>Floss daily to remove plaque between teeth</li>
                                <li>Visit your dentist regularly for check-ups and cleaning</li>
                                <li>Avoid excessive sugary foods and drinks</li>
                                <li>Wear a mouthguard if you grind your teeth</li>
                            </ul>
                            <p>
                                Severe toothache should always be taken seriously. If you’re experiencing strong or persistent pain, 
                                seeing a dentist as soon as possible is the best way to prevent complications and relieve discomfort.
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

export default SevereToothAche;
