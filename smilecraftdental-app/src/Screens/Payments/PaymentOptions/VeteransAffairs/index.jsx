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
import DVAImage from "../../../../assets/banner-images/dva-banner-image.png";

function VeteransAffairs() {
    return (
        <div className="payment-options-screen">
            <Header />
            <Hero
                title={"DEPARTMENT OF VETERANS' AFFAIRS"}
                media={DVAImage}
                subheading={`We provide eligible DVA Gold and White Card holders with access to a range of dental services, 
                    delivered in accordance with Department of Veterans’ Affairs guidelines and benefit entitlements.`}
            />
            <div className="payment-options-container">
                <div className="payment-options-content">
                    <section className="payments-landing">
                        <div className="payments-intro">
                            <div className="payments-section">
                                <h2>DVA Dental Benefits – Eligibility</h2>
                                <p>
                                    <strong>Gold Card holders:</strong> Eligible for most dental treatments —
                                    fully covered if there's a clinical need.
                                </p>
                                <p>
                                    <strong>White Card holders:</strong> Covered only for dental issues related
                                    to their accepted disability.
                                </p>
                            </div>

                            <div className="payments-section">
                                <h2>What’s Covered</h2>
                                <p><strong>No prior approval needed for:</strong> Examinations, X-rays, fillings, dentures.</p>
                                <p><strong>Approval required for:</strong> Crowns, dental implants, surgical procedures.</p>
                            </div>

                            <div className="payments-section">
                                <h2>Annual Limits</h2>
                                <p>
                                    Many standard treatments have <strong>no annual cap</strong>, but some do.
                                    Your dentist can check what services are limited and your remaining balance.
                                </p>
                                <p><strong>Exempt from limits:</strong></p>
                                <ul>
                                    <li>Ex-prisoners of war.</li>
                                    <li>
                                        White Card holders with a related accepted disability or a malignant tumour affecting the teeth, mouth, or gums.
                                    </li>
                                </ul>
                            </div>

                            <div className="payments-section">
                                <h2>Need Help?</h2>
                                <span className="payments-section-span">
                                    <p>
                                        <strong>Metro:</strong>{' '}
                                        <a href="tel:133254" className="tile-link">
                                            133 254
                                        </a>
                                    </p>
                                </span> 
                                <span className="payments-section-span">
                                    <p>
                                        <strong>Regional:</strong>
                                        <a href="tel:1800555254" className="tile-link">
                                            1800 555 254
                                        </a>
                                    </p>
                                </span> 
                                <span className="payments-section-span">
                                    <p>
                                        <strong>Email:</strong>
                                        <a href="mailto:generalenquiries@dva.gov.au" className="tile-link">
                                            generalenquiries@dva.gov.au
                                        </a>
                                    </p>
                                </span> 
                                <span className="payments-section-span">
                                    <p>
                                        <strong>For more details, visit the:</strong> 
                                        <a
                                            href="https://www.dva.gov.au/health-and-treatment-care/dental-and-oral-health"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="tile-link"
                                        >
                                            DVA Dental Services page
                                        </a>
                                        .
                                    </p>
                                </span> 
                            </div>
                        </div>
                    </section>
                </div>
                <Carousel images={imageList} />
                <SpecialOffersCarousel offers={offersList} />
                <WhyChooseUs />
                <PriceListButton />
                <GetInTouch />
                <Banner />
                <Footer />
            </div>
        </div>
    );
}

export default VeteransAffairs;
