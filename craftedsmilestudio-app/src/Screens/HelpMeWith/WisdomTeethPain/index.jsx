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
import WisdomTeethPainImage from "../../../assets/help-me-with-images/Wisdom teeth pain.png";

function WisdomTeethPain() {
    return (
        <div className="services-screen">
            <Header />
            <Hero 
                title={"HELP ME WITH - WISDOM TEETH PAIN"}
                subheading={`Are your wisdom teeth causing pain or discomfort?
                    Wisdom teeth often don’t have enough space to grow properly, leading to swelling, infection, or crowding.
                    Learn about symptoms, treatment options, and when removal may be necessary.
                `}
                media={WisdomTeethPainImage}
            />

            <div className="help-me-with-container">
                <div className="help-me-with-content">
                    <section className="help-me-with-landing">

                        <div className="help-me-with-section">
                            <h2>Wisdom Teeth (Third Molars)</h2>
                            <p>
                                Wisdom teeth are the last set of molars to develop, usually appearing in the back of the mouth 
                                during the late teens to early twenties. Many people have four wisdom teeth, but some may have fewer or none at all.
                            </p>
                        </div>

                        <div className="help-me-with-section">
                            <h2>What Are Wisdom Teeth?</h2>
                            <p>
                                Wisdom teeth are your third set of molars, located at the very back of your mouth. In many people, 
                                these teeth don’t have enough space to come through properly, which can lead to complications such as 
                                pain, infection, or misalignment.
                            </p>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Common Problems with Wisdom Teeth</h2>
                            <ul>
                                <li><strong>Impacted wisdom teeth:</strong> Teeth that are trapped beneath the gums or grow at an angle due to lack of space.</li>
                                <li><strong>Pain and swelling:</strong> Pressure as the teeth try to emerge can cause discomfort.</li>
                                <li><strong>Infection (pericoronitis):</strong> Bacteria can get trapped around a partially erupted tooth.</li>
                                <li><strong>Crowding or shifting:</strong> Wisdom teeth can push against other teeth and affect alignment.</li>
                                <li><strong>Cavities or decay:</strong> Hard-to-reach wisdom teeth are difficult to clean properly.</li>
                            </ul>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Symptoms of Problematic Wisdom Teeth</h2>
                            <p>You may notice:</p>
                            <ul>
                                <li>Pain or tenderness at the back of the mouth</li>
                                <li>Swollen or bleeding gums</li>
                                <li>Jaw stiffness or difficulty opening your mouth</li>
                                <li>Bad breath or an unpleasant taste</li>
                                <li>Headaches or ear pain</li>
                                <li>Swelling in the cheek or jaw</li>
                            </ul>
                        </div>

                        <div className="help-me-with-section">
                            <h2>When Is Removal Needed?</h2>
                            <p>
                                Wisdom teeth are often removed when they cause or are likely to cause problems, such as:
                            </p>
                            <ul>
                                <li>Repeated pain or infection</li>
                                <li>Damage to nearby teeth</li>
                                <li>Cysts or gum disease</li>
                                <li>Partial eruption that traps food and bacteria</li>
                            </ul>
                            <p>
                                The procedure, known as a wisdom tooth extraction, is one of the most common dental surgeries performed by dentists and oral surgeons.
                            </p>
                        </div>

                        <div className="help-me-with-section">
                            <h2>What to Expect During Removal</h2>
                            <p>
                                The process typically involves:
                            </p>
                            <p>1. Examination and X-rays to assess position and root structure</p>
                            <p>2. Local or general anaesthetic to keep you comfortable</p>
                            <p>3. Extraction, where the tooth is removed (sometimes in sections if impacted)</p>
                            <p>4. Stitches may be placed to help healing</p>
                            <p>
                                Recovery usually takes a few days, though complete healing of the gum may take a couple of weeks.
                            </p>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Recovery and Aftercare</h2>
                            <p>
                                After removal, you may experience swelling and mild pain. To help recovery:
                            </p>
                            <ul>
                                <li>Rest and avoid strenuous activity for 24–48 hours</li>
                                <li>Use ice packs to reduce swelling</li>
                                <li>Eat soft foods (e.g., yogurt, soup, mashed foods)</li>
                                <li>Avoid smoking and using straws (to prevent dry socket)</li>
                                <li>Follow your dentist’s instructions carefully</li>
                            </ul>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Possible Complications</h2>
                            <ul>
                                <li><strong>Dry socket:</strong> Painful condition when the blood clot is dislodged</li>
                                <li><strong>Infection:</strong> Signs include swelling, fever, or discharge</li>
                                <li><strong>Nerve irritation:</strong> Rare, but may cause temporary numbness</li>
                            </ul>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Do All Wisdom Teeth Need Removal?</h2>
                            <p>
                                Not everyone needs their wisdom teeth removed. If they:
                            </p>
                            <ul>
                                <li>Grow in properly</li>
                                <li>Do not cause pain or crowding</li>
                                <li>Are easy to clean</li>
                            </ul>
                            <p>
                                They may be left in place and monitored by your dentist.
                            </p>
                        </div>

                        <div className="help-me-with-section">
                            <h2>When to See a Dentist</h2>
                            <ul>
                                <li>Persistent pain at the back of your mouth</li>
                                <li>Swelling or signs of infection</li>
                                <li>Difficulty opening your mouth</li>
                                <li>Trouble chewing or biting</li>
                            </ul>
                            <p>
                                Early evaluation can help prevent complications and make treatment easier.
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

export default WisdomTeethPain;
