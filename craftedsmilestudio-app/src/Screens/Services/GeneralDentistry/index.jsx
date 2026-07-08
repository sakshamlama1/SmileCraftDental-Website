import React from "react";
import { NavLink } from "react-router-dom";
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
import GeneralDentistryImage from "../../../assets/banner-images/general-dentistry.png";

function GeneralDentistry() {
    return (
        <div className="general-dentistry-screen">
            <Header />
            <Hero 
                title={"GENERAL DENTISTRY IN ELERMORE VALE"}
                subheading={`
                    Welcome to Crafted Smiles Studio, a trusted family dentist in Elermore Vale NSW, 
                    where personalised care, comfort, and clinical excellence come together. We provide high-quality dental care for children, adults, and seniors in a calm, 
                    welcoming environment designed to put the whole family at ease. If you’re searching for a gentle, experienced dentist near Elermore Vale, 
                    our dedicated team at Crafted Smiles Studio is here to support your oral health at every stage of life.
                `}
                media={GeneralDentistryImage}
            />
            <div className="general-dentistry-container">
                <div className="general-dentistry-content">
                    <section className="services-landing">
                        <div className="services-section">
                            <h2>Caring, Family Dentist in Elermore Vale for One Stop Solutions</h2>
                            <p>
                                At <b>Crafted Smiles Studio</b>, we provide <b>comprehensive dental care for the whole family</b> in a modern, welcoming environment. 
                                From <b>children’s dental check-ups and preventive care to wisdom teeth removal, and general dental treatments</b>, 
                                our team delivers safe, effective, and personalised solutions for every stage of life.
                            </p>
                            <p> 
                                Our <b>Elermore Vale dental clinic</b> combines <b>advanced technology</b> with a <b>patient-focused approach</b>, ensuring a comfortable and reassuring experience 
                                for children, teens, and adults alike. We focus on <b>preventive dentistry, oral health education, and long-term dental wellness</b>, helping 
                                families maintain healthy, confident smiles.
                            </p>
                            <p>
                                With years of experience, our dedicated team builds <b>lasting relationships with patients</b>, offering tailored treatment 
                                plans that meet your unique needs. Proudly serving <b>Elermore Vale, Newcastle, Wallsend, Rankin Park, Cardiff, Kotara,
                                and surrounding areas</b>, we are committed to providing <p>exceptional family dentistry, cosmetic dentistry, and restorative dental care you can trust.</p>
                            </p>
                        </div>
                        <p className="services-intro-description">
                            <b>At Crafted Smiles Studio, we offer a wide range of general dental treatments</b>
                        </p>
                        <div className="services-tiles">
                            {/* Bruxism Treatment */}
                            <div className="service-tile">
                                <h3>Bruxism Treatment</h3>
                                <p>We provide custom mouthguards to improve sleep quality.</p>
                                <NavLink to="/services/general/bruxism-treatment" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            {/* Children Dentistry */}
                            <div className="service-tile">
                                <h3>Children Dentistry</h3>
                                <p>We offer gentle, friendly care in a relaxed setting to help kids feel at ease.</p>
                                <NavLink to="/services/general/children-dentistry" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            {/* Custom Mouth Guards */}
                            <div className="service-tile">
                                <h3>Custom Mouth Guards</h3>
                                <p>Custom-fitted mouth guards to protect teeth from injury during sports or prevent grinding at night.</p>
                                <NavLink to="/services/general/custom-mouth-guards" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            {/* Dental Anxiety and Nervous Patients */}
                            <div className="service-tile">
                                <h3>Dental Anxiety & Nervous Patients</h3>
                                <p>We provide a calm, caring environment and gentle treatments tailored for anxious or nervous patients.</p>
                                <NavLink to="/services/general/dental-anxiety-nervous-patients" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            {/* Dental Check Ups & Cleaning */}
                            <div className="service-tile">
                                <h3>Dental Check Ups & Cleaning</h3>
                                <p>Regular check-ups and professional cleaning to maintain optimal oral health and catch any issues early.</p>
                                <NavLink to="/services/general/dental-check-ups-cleaning" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            {/* Dental Emergency */}
                            <div className="service-tile">
                                <h3>Dental Emergency</h3>
                                <p>Prompt care for dental emergencies—relieving pain and addressing urgent dental issues fast.</p>
                                <NavLink to="/services/general/dental-emergency" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            {/* Dental Fillings */}
                            <div className="service-tile">
                                <h3>Dental Fillings</h3>
                                <p>Repair cavities or minor fractures in your teeth using modern, safe, and aesthetic filling materials.</p>
                                <NavLink to="/services/general/dental-fillings" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            {/* Gum Disease Treatment */}
                            <div className="service-tile">
                                <h3>Gum Disease Treatment</h3>
                                <p>Protect your oral health and prevent tooth loss with personalised gum disease treatment and expert dental care.</p>
                                <NavLink to="/services/general/gum-disease-treatment" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            {/* Root Canal Treatment */}
                            <div className="service-tile">
                                <h3>Root Canal Treatment</h3>
                                <p>Save an infected tooth with expert root canal therapy to relieve pain and restore function.</p>
                                <NavLink to="/services/general/root-canal-treatment" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            {/* Tooth Extractions */}
                            <div className="service-tile">
                                <h3>Tooth Extractions</h3>
                                <p>Gentle tooth extractions to remove damaged or problematic teeth and protect your oral health.</p>
                                <NavLink to="/services/general/tooth-extractions" className="tile-link">LEARN MORE →</NavLink>
                            </div>

                            {/* Wisdom Teeth Removal */}
                            <div className="service-tile">
                                <h3>Wisdom Teeth Removal</h3>
                                <p>Gentle and effective extraction of problematic wisdom teeth to prevent pain and misalignment.</p>
                                <NavLink to="/services/general/wisdom-teeth-removal" className="tile-link">LEARN MORE →</NavLink>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Carousel images={imageList}/>
            <SpecialOffersCarousel offers={offersList}/>
            <WhyChooseUs />
            <PriceListButton />
            <GetInTouch />
            <Banner />
            <Footer />
        </div>
    );
}

export default GeneralDentistry;
