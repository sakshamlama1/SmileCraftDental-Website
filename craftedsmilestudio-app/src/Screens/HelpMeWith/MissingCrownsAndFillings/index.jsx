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
import MissingCrownsAndFillingsImage from "../../../assets/help-me-with-images/Missing crown and fillings.png";

function MissingCrownsAndFillings() {
    return (
        <div className="services-screen">
            <Header />
            <Hero 
                title={"HELP ME WITH - MISSING CROWNS & FILLINGS"}
                subheading={`Lost a crown or filling and noticing sensitivity or discomfort?
                    When restorations come loose or fall out, the underlying tooth is left vulnerable.
                    Learn the causes, risks, and treatment options to restore your tooth quickly.
                `}
                media={MissingCrownsAndFillingsImage}
            />

            <div className="help-me-with-container">
                <div className="help-me-with-content">
                    <section className="help-me-with-landing">
                        <div className="help-me-with-section">
                            <h2>Missing Crowns and Dental Fillings: Causes, Treatment & Care</h2>
                            <p>
                                A dental crown or filling is a type of restorative dental treatment used to repair and protect damaged or decayed teeth. 
                                When a crown or filling becomes loose, breaks, or goes missing, it can expose the underlying tooth structure — leading to pain, 
                                sensitivity, and a greater risk of decay or further damage.
                            </p>
                        </div>

                        <div className="help-me-with-section">
                            <h2>What Are Dental Crowns and Fillings?</h2>

                            <p><strong>Dental Crowns:</strong></p>
                            <p>
                                A dental crown — sometimes called a cap — fits over a weakened, cracked, or worn tooth to restore its shape, strength and function. 
                                Crowns can be made from metal, porcelain, resin or ceramic, and are custom-made to fit your tooth.
                            </p>

                            <p><strong>Dental Fillings</strong></p>
                            <p>
                                Dental fillings are materials your dentist uses to repair cavities (holes in teeth caused by decay) or small chips and cracks. 
                                The dentist removes the decayed or damaged portion of the tooth and fills the space with a durable material such as composite resin, 
                                amalgam, or porcelain.
                            </p>

                        </div>

                        <div className="help-me-with-section">
                            <h2>Why Crowns or Fillings Might Go Missing</h2>
                            <p>
                                A crown or filling can come off for several reasons:
                            </p>
                            <ul>
                                <li><strong>Wear and tear:</strong> Over time, biting and chewing can loosen a restoration.</li>
                                <li><strong>Decay around the restoration:</strong> New decay can weaken the tooth-restoration interface, causing it to fall out.</li>
                                <li><strong>Trauma:</strong> A hard impact, chewing hard foods or clenching/grinding can dislodge or break restorations.</li>
                                <li><strong>Poor fit or cement failure:</strong> If the restoration wasn’t seated perfectly or the bonding material fails, it may loosen.</li>
                            </ul>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Signs You’ve Lost a Crown or Filling</h2>
                            <p>You might notice:</p>
                            <ul>
                                <li>A gap or hole where the restoration used to be.</li>
                                <li>Sharp or rough edges on the exposed tooth.</li>
                                <li>Sensitivity to hot, cold, or sweet foods.</li>
                                <li>Pain when chewing or biting.</li>
                                <li>A loose or dangling restoration in your mouth.</li>
                            </ul>
                        </div>

                        <div className="help-me-with-section">
                            <h2>What to Do If a Crown or Filling Is Missing</h2>

                            <p><strong>Short-Term Steps (Before You See a Dentist)</strong></p>
                            <ul>
                                <li>Save the restoration if you still have it — your dentist may be able to reattach it.</li>
                                <li>Rinse your mouth with warm water to clean the area.</li>
                                <li>Use dental wax or sugar-free gum to cover any sharp edges and protect your tongue and cheek.</li>
                                <li>Avoid chewing on that side of your mouth.</li>
                            </ul>
                            <p>
                                These are temporary measures — you still need a dental appointment as soon as possible.
                            </p>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Dental Treatment Options</h2>
                            <p><strong>For a Missing Crown:</strong></p>
                            <ul>
                                <li>Re-cementation: If the crown is intact and undamaged, your dentist may be able to re-cement it.</li>
                                <li>New crown: If the old crown is broken or doesn’t fit well, a new crown will be made.</li>
                                <li>Alternative restorations: In some cases, a larger restoration like an onlay or even extraction with replacement may be needed.</li>
                            </ul>
                            <p><strong>For a Missing Filling:</strong></p>
                            <ul>
                                <li>Replacement filling: Your dentist will clean the cavity and place a new filling.</li>
                                <li>Inlay or onlay: For larger defects, a more durable indirect restoration may be used.</li>
                            </ul>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Risks of Leaving It Untreated</h2>
                            <p>
                                If a lost crown or filling isn’t addressed:
                            </p>
                            <ul>
                                <li>Decay can progress rapidly in the exposed tooth.</li>
                                <li>Infection and abscess risk increases.</li>
                                <li>Tooth fracture becomes more likely.</li>
                                <li>Chewing and bite problems may develop.</li>
                            </ul>
                        </div>

                        <div className="help-me-with-section">
                            <h2>Aftercare and Prevention</h2>
                            <p>
                                To help prevent restorations from failing:
                            </p>
                            <ul>
                                <li>Brush twice daily and floss daily to reduce decay risk.</li>
                                <li>Avoid very hard or sticky foods that can dislodge restorations.</li>
                                <li>Wear a mouthguard if you grind your teeth.</li>
                                <li>Regular dental checkups help catch problems early.</li>
                            </ul>
                        </div>

                        <div className="help-me-with-section">
                            <h2>When to Call Your Dentist Right Away</h2>
                            <p>
                                Seek urgent dental care if you experience:
                            </p>
                            <ul>
                                <li>Severe pain that doesn’t improve with pain relievers.</li>
                                <li>Signs of infection such as swelling, fever, or discharge.</li>
                                <li>A broken tooth beneath the missing restoration.</li>
                            </ul>
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

export default MissingCrownsAndFillings;
