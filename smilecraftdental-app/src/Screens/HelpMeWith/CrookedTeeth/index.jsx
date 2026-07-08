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
import CrookedTeethImage from "../../../assets/help-me-with-images/Crooked teeth.png";

function CrookedTeeth() {
    return (
        <div className="services-screen">
            <Header />
            <Hero 
                title={"HELP ME WITH - CROOKED TEETH"}
                subheading={`
                    Straighten your teeth and transform your smile with expert care at Smile Craft Dental.
                    We offer personalised dental solutions for healthier, more confident smiles.
                    Book your consultation today.
                `}
                media={CrookedTeethImage}
            />
            <div className="help-me-with-container">
                <div className="help-me-with-content">
                    <section className="help-me-with-landing">
                        <div className="help-me-with-section">
                            <h2>Achieve a Straighter, Healthier Smile with Our Dental Treatments</h2>
                            <p>
                                Crooked teeth can make many people feel self-conscious about their smile. 
                                They may develop for a variety of reasons, and choosing the right treatment can sometimes feel overwhelming.
                            </p>
                            <p>
                                Beyond appearance, misaligned teeth can lead to oral health concerns such as difficulty chewing or speaking, 
                                jaw discomfort, and challenges with proper cleaning. This increases the risk of tooth decay and gum disease.
                            </p>
                            <p>
                                At <b>Smile Craft Dental</b>, we offer a wide range of treatments designed to straighten teeth while enhancing 
                                both oral health and facial appearance. Our services include <b>dental veneers, crowns, smile makeovers, 
                                and clear aligners</b>. Our experienced team works closely with you to create a personalised treatment plan 
                                and help you choose the most suitable option. We also offer flexible payment plans 
                                to make quality dental care more accessible.
                            </p>
                            <p>
                                <b>Book your appointment today</b> and take the first step toward a confident, healthy smile.
                            </p>
                        </div>
                        <div className="help-me-with-section">
                            <h2>What Causes Crooked or Misaligned Teeth</h2>
                            <p>
                                There are several factors that can lead to crooked or misaligned teeth. 
                                Identifying the cause helps determine the most effective orthodontic solution, 
                                including clear aligners such as <b>Invisalign® and SureSmile®</b>.
                            </p>
                            <h3>
                                Common Causes
                            </h3>
                            <ul>
                                <li>
                                    <b>Genetics:</b> Crooked or crowded teeth can be inherited. Jaw size, tooth spacing, and bite alignment often run in families, 
                                    increasing the likelihood of misaligned teeth.
                                </li>
                                <li>
                                    <b>Poor Oral Hygiene:</b> Inadequate care can lead to tooth decay and gum disease, which may cause tooth loss. 
                                    When teeth shift into empty spaces, misalignment can occur, often requiring orthodontic treatment such as clear aligners.
                                </li>
                                <li>
                                    <b>Injury or Trauma:</b> Injuries to the mouth or face can damage teeth and jaw structures, 
                                    leading to changes in alignment that may require corrective treatment.
                                </li>
                                <li>
                                    <b>Childhood Habits & Early Tooth Loss:</b> Thumb sucking, tongue thrusting, and prolonged pacifier use 
                                    can affect tooth positioning. Early loss of baby teeth may also cause adult teeth to erupt without enough space, 
                                    resulting in crowding.
                                </li>
                            </ul>
                            <p>
                                At <b>Smile Craft Dental</b>, we offer advanced orthodontic solutions including <b>clear aligners, 
                                Invisalign®, and SureSmile®</b> to gently and effectively straighten teeth. 
                                Our team will assess your smile and create a personalised treatment plan to help you achieve long-lasting results.
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

export default CrookedTeeth;
