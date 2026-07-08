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
import ToothStainingImage from "../../../assets/help-me-with-images/Stained teeth.png";

function ToothStaining() {
    return (
        <div className="services-screen">
            <Header />
            <Hero 
                title={"HELP ME WITH - TOOTH STAINING"}
                subheading={`
                    Tooth staining is a common concern that can affect your confidence and the appearance of your smile. 
                    We offer professional, personalised dental solutions to safely reduce discolouration and help restore a brighter, 
                    healthier-looking smile.
                `}
                media={ToothStainingImage}
            />
            <div className="help-me-with-container">
                <div className="help-me-with-content">
                    <section className="help-me-with-landing">
                        <div className="help-me-with-section">
                            <h2>Understanding Tooth Staining</h2>
                            <p>
                                Tooth staining can affect your confidence and make you hesitant to smile or speak freely. 
                                Feeling unhappy with the appearance of your teeth is common, but it doesn’t have to be permanent. 
                                With modern dental care, there are effective solutions available. 
                                At our office, we provide high-quality treatments designed to reduce discoloration 
                                and help restore a brighter, healthier-looking smile.
                            </p>
                        </div>
                        <div className="help-me-with-section">
                            <h2>Common Causes of Tooth Staining</h2>
                            <p>
                                One of the questions we hear most often is, “Why are my teeth discolored?” Tooth staining can happen for many reasons, 
                                and in most cases, it’s linked to everyday habits and lifestyle choices. Drinks like coffee, tea, and red wine are well-known 
                                for causing stains, as are smoking and other tobacco products.
                            </p>
                            <p>
                                Oral hygiene also plays a major role. When brushing and flossing aren’t consistent, 
                                plaque and tartar can build up on the teeth, allowing pigments from food and beverages to settle in more easily. 
                                Certain medications may also contribute to discoloration, especially those containing ingredients such as chlorhexidine or tetracycline. 
                                In some cases, dental materials like metal-based fillings or restorations can affect tooth color over time.
                            </p>
                            <p>
                                Natural aging is another factor. As we get older, tooth enamel gradually thins, revealing the darker dentin underneath. 
                                If you’re concerned about stained teeth, a dental professional can help identify the cause and recommend the most effective 
                                options for achieving a brighter, healthier-looking smile.
                            </p>
                        </div>
                        <div className="help-me-with-section">
                            <h2>Restore Your Confidence with a Brighter, Whiter Smile</h2>
                            <p>
                                Tooth discoloration can be uncomfortable and affect how confident you feel about your appearance. 
                                Many people experience stained teeth due to everyday factors such as certain foods and drinks, tobacco use, 
                                or specific medications. While common, this issue can take a toll on your self-esteem.
                            </p>
                            <p>
                                Fortunately, stained teeth can often be improved with professional dental care. 
                                A variety of whitening options and cosmetic treatments are available to safely lighten discoloration and enhance 
                                the appearance of your smile. With the right approach, noticeable results are well within reach.
                            </p>
                            <p>
                                At <b>Smile Craft Dental</b>, our goal is to help patients achieve healthy, radiant smiles they feel proud of. 
                                We offer personalized treatment options for stained teeth, including professional whitening, dental veneers, crowns, 
                                and complete smile makeovers. In addition, our preventive care services are designed to help protect your smile long-term. 
                                Schedule an appointment today and experience the difference our dental care can make.
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

export default ToothStaining;
