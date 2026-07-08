import "./index.css";
import { useState, useEffect } from "react";
import title from '../../assets/title.png';
import { NavLink } from "react-router-dom";
import CallUsButton from "../CallUsButton";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        const handleResize = () => {
            if (window.innerWidth > 1300 && menuOpen) {
                setMenuOpen(false); // auto-close mobile menu
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [menuOpen]);


    return (
        <div className={`header-component ${scrolled ? "header-solid" : "header-blend"}`}>
            <div className='header-items'>
                {/* 1. SERVICES (DROPDOWN) */}   
                <div className="dropdown">
                    <button className="btn dropdown-toggle header-anchor" data-bs-toggle="dropdown">
                        SERVICES
                    </button>
                    <ul className="dropdown-menu">
                        <div className="row">
                            <div className="col-6">
                                <li><NavLink className="dropdown-item" id="dropdown-header" to="/services/general">General Dentistry</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/general/bruxism-treatment">Bruxism Treatment</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/general/children-dentistry">Children Dentistry</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/general/custom-mouth-guards">Custom Mouth Guards</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/general/dental-anxiety-nervous-patients">Dental Anxiety & Nervous Patients</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/general/dental-check-ups-cleaning">Dental Check Ups & Cleaning</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/general/dental-emergency">Dental Emergency</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/general/dental-fillings">Dental Fillings</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/general/gum-disease-treatment">Gum Disease Treatment</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/general/root-canal-treatment">Root Canal Treatment</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/general/tooth-extractions">Tooth Extractions</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/general/wisdom-teeth-removal">Wisdom Teeth Removal</NavLink></li>
                            </div>

                            <div className="col-6">
                                <li><NavLink className="dropdown-item" id="dropdown-header" to="/services/cosmetic">Cosmetic Dentistry</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/cosmetic/aligners">Aligners</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/cosmetic/composite-veneers-bonding">Composite Veneers/Bonding</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/cosmetic/dental-veneers">Dental Veneers</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/cosmetic/digital-smile-design">Digital Smile Design</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/cosmetic/teeth-whitening">Teeth Whitening</NavLink></li>
                            </div>

                             <div className="col-6">
                                <li><NavLink className="dropdown-item" id="dropdown-header" to="/services/restorative">Restorative Dentistry</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/restorative/dental-bridge">Dental Bridges</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/restorative/dental-crown">Dental Crowns</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/restorative/dentures">Dentures</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/restorative/full-mouth-rehabilitation">Full Mouth Rehabilitation</NavLink></li>
                            </div>
                        </div>
                    </ul>
                </div>

                {/* 2. ABOUT US */}
                <div className='header-buttons'>
                    <NavLink to="/about-us" className="header-anchor">ABOUT US</NavLink>
                </div> 

                {/* 3. PAYMENTS (DROPDOWN) */}
                <div className="dropdown">
                    <button className="btn dropdown-toggle header-anchor" data-bs-toggle="dropdown" aria-expanded="false">
                        PAYMENTS
                    </button>
                    <ul className="dropdown-menu">
                        <div className="row">
                            <div className="col-6">
                                <li><NavLink className="dropdown-item" id="dropdown-header" to="/payment-options">Payment Options</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/payment-options/child-dental-benefit">Child Dental Benefit Schedule</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/payment-options/veterans-affairs">Department of Veterans' Affairs</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/payment-options/healthfunds">Healthfunds</NavLink></li>
                            </div>
                            <div className="col-6">
                                <li><NavLink className="dropdown-item" id="dropdown-header" to="/payment-plans">Payment Plans</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/payment-plans/afterpay">Afterpay</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/payment-plans/humm">HUMM</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/payment-plans/smile-right">Smile Right</NavLink></li>
                            </div>
                        </div>
                    </ul>
                </div>

                {/* 5. HELP ME WITH */}
                <div className="dropdown">
                    <button className="btn dropdown-toggle header-anchor" data-bs-toggle="dropdown" aria-expanded="false">
                        HELP ME WITH
                    </button>
                    <ul className="dropdown-menu">
                        <div className="row">
                            <div className="col-6">
                                <li><NavLink className="dropdown-item" to="/help-me-with/bruxism">Bruxism</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/help-me-with/chipped-tooth">Chipped Tooth</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/help-me-with/crooked-teeth">Crooked Teeth</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/help-me-with/dental-abscess">Dental Abscess</NavLink></li>
                                {/* <li><NavLink className="dropdown-item" to="/">Bad Breath</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/">Bleeding Gums</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/">Gum Disease</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/">Dry Socket</NavLink></li> */}
                            </div>
                            <div className="col-6">
                                <li><NavLink className="dropdown-item" to="/help-me-with/dental-fillings">Dental Fillings</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/help-me-with/missing-crowns-fillings">
                                Missing Crowns and Fillings
                                </NavLink></li>
                                <li><NavLink className="dropdown-item" to="/help-me-with/missing-teeth">Missing Teeth</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/help-me-with/sensitivity">Sensitivity</NavLink></li>
                                {/* <li><NavLink className="dropdown-item" to="/">Tooth Gaps</NavLink></li> */}
                            </div>
                            <div className="col-6">
                                {/* <li><NavLink className="dropdown-item" to="/">Bite Problems</NavLink></li> */}
                                <li><NavLink className="dropdown-item" to="/help-me-with/severe-tooth-ache">Severe Tooth Ache</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/help-me-with/tooth-staining">Tooth Staining</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/help-me-with/wisdom-teeth-pain">Wisdom Teeth Pain</NavLink></li>
                                {/* <li><NavLink className="dropdown-item" to="/">Knocked Out Tooth</NavLink></li> */}
                            </div>
                        </div>
                    </ul>
                </div>
            </div>


            {/* 6. TITLE / LOGO */}
            <div className='head-title'>
                <NavLink to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src={title} alt="Smile Craft Dental" />
                </NavLink>
            </div>
            <div className="header-buttons-container">
                <div className='header-buttons'>
                    <div className="header-call-us-button">
                        <CallUsButton />
                    </div>
                    <a id="booking-btn-id" className="navlink-r" href="https://booking.au.hsone.app/soe/new/%20?pid=AUSAL01" target="_blank" rel="noopener noreferrer">
                        <button className='btn' id='secondary'>BOOK AN APPOINTMENT</button>  
                    </a>    
                </div>
                <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>

            {menuOpen && (
                <div className="mobile-menu">
                    <div className="mobile-menu-buttons">
                        <a className="booking-appointment-mobile-menu-anchor" href="https://booking.au.hsone.app/soe/new/%20?pid=AUSAL01" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Book An Appointment</a>
                        <div id="menu-booking-btn-id" className="mobile-menu-anchor">
                            <CallUsButton isMobileHeader={true} />
                        </div>
                        <NavLink to="/services" className="mobile-menu-anchor" onClick={() => setMenuOpen(false)}>Services</NavLink>
                        <NavLink to="/about-us" className="mobile-menu-anchor" onClick={() => setMenuOpen(false)}>About Us</NavLink>
                        <NavLink to="/payments" className="mobile-menu-anchor" onClick={() => setMenuOpen(false)}>Payments</NavLink>
                        <NavLink to="/special-offers" className="mobile-menu-anchor" onClick={() => setMenuOpen(false)}>Special Offers</NavLink>
                        <NavLink to="/help-me-with" className="mobile-menu-anchor" onClick={() => setMenuOpen(false)}>Help Me With</NavLink>
                        
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
