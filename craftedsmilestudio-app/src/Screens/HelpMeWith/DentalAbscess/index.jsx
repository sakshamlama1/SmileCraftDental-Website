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
import DentalAbscessImage from "../../../assets/help-me-with-images/Dental abscess.png";

function DentalAbscess() {
    return (
        <div className="services-screen">
            <Header />
            <Hero 
                title={"HELP ME WITH - DENTAL ABSCESS"}
                subheading={`Experiencing severe tooth pain, swelling, or a bad taste in your mouth?
                    You may have a dental abscess — a serious infection that requires prompt care.
                    Learn what causes dental abscesses and how they can be treated.
                `}
                media={DentalAbscessImage}
            />

            <div className="help-me-with-container">
                <div className="help-me-with-content">
                    <section className="help-me-with-landing">

                        <div className="help-me-with-section">
                            <h2>Dental Abscess: Symptoms, Causes & Treatment</h2>
                            <p>
                                A dental abscess is a painful infection caused by a buildup of pus inside a tooth or in the surrounding gums. 
                                It usually occurs when bacteria enter the tooth through decay, cracks, or gum disease. A dental abscess is a serious condition 
                                that requires prompt treatment to prevent the infection from spreading.
                            </p>
                        </div>

                        <div className="help-me-with-section">
                            <h2>What Is a Dental Abscess?</h2>
                            <p>
                                A dental abscess is a pocket of pus caused by a bacterial infection. It can develop in different areas:
                            </p>
                            <ul>
                                <li><strong>Periapical abscess:</strong> Forms at the tip of the tooth root</li>
                                <li><strong>Periodontal abscess:</strong> Occurs in the gums beside a tooth</li>
                                <li><strong>Gingival abscess:</strong> Affects the gum tissue only</li>
                            </ul>
                            <p>
                                Without treatment, the infection can spread to nearby tissues and even other parts of the body.
                            </p>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Symptoms of a Dental Abscess</h2>
                            <ul>
                                <li>Severe, persistent toothache</li>
                                <li>Sensitivity to hot or cold</li>
                                <li>Pain when biting or chewing</li>
                                <li>Swelling in the face, cheek, or jaw</li>
                                <li>Red, swollen gums</li>
                                <li>Pus discharge or bad taste in the mouth</li>
                                <li>Bad breath</li>
                                <li>Fever or feeling unwell</li>
                                <li>Difficulty opening the mouth or swallowing (in severe cases)</li>
                            </ul>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Common Causes</h2>
                            <ul>
                                <li>Untreated tooth decay (cavities)</li>
                                <li>Cracked or chipped teeth allowing bacteria in</li>
                                <li>Gum disease (periodontitis)</li>
                                <li>Poor oral hygiene</li>
                                <li>Previous dental work that has failed</li>
                            </ul>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Risk Factors</h2>
                            <ul>
                                <li>High sugar diet</li>
                                <li>Infrequent brushing and flossing</li>
                                <li>Dry mouth</li>
                                <li>Smoking</li>
                                <li>Weakened immune system</li>
                            </ul>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Why It’s Serious</h2>
                            <p>
                                A dental abscess will not heal on its own. If left untreated, it can:
                            </p>
                            <ul>
                                <li>Spread infection to the jaw, neck, or brain</li>
                                <li>Lead to tooth loss</li>
                                <li>Cause systemic illness</li>
                            </ul>
                            <p>
                                Seek urgent dental care if you have symptoms.
                            </p>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Diagnosis</h2>
                            <p>Your dentist will:</p>
                            <ul>
                                <li>Examine your teeth and gums</li>
                                <li>Check for swelling or tenderness</li>
                                <li>Take dental X-rays to determine the extent of infection</li>
                            </ul>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Treatment Options</h2>
                            <p>
                                Treatment focuses on removing the infection and saving the tooth where possible:
                            </p>
                            <ul>
                                <li><strong>Drainage of the abscess:</strong> Releases pus and reduces pressure</li>
                                <li><strong>Root canal treatment:</strong> Removes infected pulp and preserves the tooth</li>
                                <li><strong>Tooth extraction:</strong> Required if the tooth cannot be saved</li>
                                <li><strong>Antibiotics:</strong> May be prescribed if the infection has spread or is severe</li>
                            </ul>
                        </div>

                        <div className="help-me-with-section">
                            <h2>What to Do If You Have a Dental Abscess</h2>
                            <p>While waiting for your dental appointment:</p>
                            <ul>
                                <li>Rinse with warm salt water several times a day</li>
                                <li>Take over-the-counter pain relief (as directed)</li>
                                <li>Avoid very hot, cold, or sugary foods</li>
                                <li>Do not attempt to pop or drain the abscess yourself</li>
                            </ul>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Prevention Tips</h2>
                            <ul>
                                <li>Brush twice daily with fluoride toothpaste</li>
                                <li>Floss daily</li>
                                <li>Visit your dentist regularly for check-ups and cleans</li>
                                <li>Limit sugary and acidic foods</li>
                                <li>Treat dental issues early before they worsen</li>
                            </ul>
                        </div>

                        <div className="help-me-with-section">
                            <h2>When to Seek Urgent Care</h2>
                            <p>
                                Contact a dentist immediately or seek emergency care if you experience:
                            </p>
                            <ul>
                                <li>Severe swelling in the face or jaw</li>
                                <li>Difficulty breathing or swallowing</li>
                                <li>High fever</li>
                                <li>Rapidly worsening pain</li>
                            </ul>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Final Note</h2>
                            <p>
                                A dental abscess is a dental emergency that should never be ignored. With prompt treatment, the infection can be controlled, 
                                pain relieved, and your oral health restored.
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

export default DentalAbscess;
