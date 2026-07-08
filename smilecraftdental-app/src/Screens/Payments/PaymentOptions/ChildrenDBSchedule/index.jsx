import React from "react";
import Header from "../../../../Components/Header";
import Footer from "../../../../Components/Footer";
import GetInTouch from "../../../../Components/GetInTouch";
import PriceListButton from "../../../../Components/PriceListButton";
import Carousel from "../../../../Components/Carousel";
import imageList from "../../../../utils/carouselImages";
import SpecialOffersCarousel from "../../../../Components/SpecialOffersCarousel";
import offersList from "../../../../utils/specialOffers";
import Hero from "../../../../Components/Hero";
import WhyChooseUs from "../../../../Components/WhyChooseUs";
import Banner from "../../../../Components/Banner";
import ChildDentalBenefitImage from "../../../../assets/banner-images/child-dental-benefit-image.png";

function ChildrenDBSchedule() {
    return (
        <div className="payment-options-screen">
            <Header />
            <Hero 
                title={"CHILD DENTAL BENEFIT SCHEDULE"}
                media={ChildDentalBenefitImage}
                subheading={`The Child Dental Benefits Schedule (CDBS) is a government-funded program that provides eligible children aged 0–17 
                    with access to essential dental services, helping families manage costs while maintaining their child’s oral health.`}
            />
            <div className="payment-options-container">
                <div className="payment-options-content">
                    <section className="payments-landing">
                        <div className="payments-intro">
                            <div className="payments-section">
                                <h2>What is the CDBS?</h2>
                                <p>
                                    The Child Dental Benefits Schedule (CDBS) is a government-funded program providing eligible children aged 0–17 with access to basic dental services. It helps families manage dental costs and maintain their child’s oral health.
                                </p>
                                <p>
                                    At <strong>Smile Craft Dental</strong>, we proudly offer bulk billing under the CDBS so you won’t be out-of-pocket for covered services.
                                </p>
                            </div>

                            <div className="payments-section">
                                <h2>Who is Eligible?</h2>
                                <p>Children must meet the following criteria:</p>
                                <ul>
                                    <li>Be aged 0–17 years for at least one day of the calendar year</li>
                                    <li>Be eligible for Medicare</li>
                                    <li>Receive a relevant government payment like Family Tax Benefit Part A</li>
                                </ul>
                            </div>

                            <div className="payments-section">
                                <h2>What’s Included?</h2>
                                <p>Eligible children can claim up to <strong>$1,132</strong> over two calendar years for services such as:</p>
                                <ul>
                                    <li>Check-ups</li>
                                    <li>X-rays</li>
                                    <li>Cleaning</li>
                                    <li>Fissure sealing</li>
                                    <li>Fillings</li>
                                    <li>Extractions</li>
                                    <li>Root canals</li>
                                </ul>
                            </div>

                            <div className="payments-section">
                                <h2>Checking Eligibility and Balance</h2>
                                <p>To check your child’s eligibility and remaining CDBS balance, you have a few easy options:</p>
                                <span className="payments-section-span">
                                    <p>
                                        <strong>1. Sign in</strong> to your Medicare online account via:
                                        <a
                                            href="https://my.gov.au"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="tile-link"
                                        >
                                            myGov
                                        </a>
                                    </p>
                                </span>
                                <span className="payments-section-span">
                                    <p>
                                        <strong>2. </strong>Navigate to <strong>History and Statements</strong>, then select{' '} <strong>Child Dental Benefits Schedule</strong>. Alternatively, call the Medicare Program line at:
                                        <a href="tel:132011" className="tile-link">
                                            132 011
                                        </a>
                                    </p>
                                    
                                </span>
                                <span className="payments-section-span">
                                    <p>
                                        <strong>3. </strong>For more detailed information, visit the:
                                         <a
                                            href="https://www.servicesaustralia.gov.au/child-dental-benefits-schedule"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="tile-link"
                                        >
                                            Services Australia website
                                        </a>
                                    </p>
                                </span>
                                <span className="payments-section-span">
                                    <p>
                                        Still unsure? <strong>We’re here to help</strong> — feel free to <b>call our clinic</b> and our friendly team will assist you.
                                    </p>
                                </span>
                            </div>
                        </div>
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

export default ChildrenDBSchedule;
