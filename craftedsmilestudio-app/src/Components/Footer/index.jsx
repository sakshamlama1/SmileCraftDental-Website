import "./index.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { NavLink } from "react-router-dom";

const position = [-32.91682107080406, 151.67469614021132];

// Custom Font Awesome Marker Icon
const customMarkerIcon = L.divIcon({
    html: '<i class="fa fa-map-marker fa-3x" style="color: #4096A6;"></i>',
    className: "custom-fa-marker",
    iconSize: [32, 32],
    iconAnchor: [16, 32]
});

function Footer() {
    return (
        <>
            <footer className="footer-component">

                {/* Areas We Serve */}
                <div className="footer-areas">
                    <h4>AREAS WE SERVE</h4>
                    <h6 className="areas-list-flex">
                        <span>Newcastle</span>
                        <span>Wallsend</span>
                        <span>Rankin Park</span>
                        <span>Cardiff</span>
                        <span>Kotara</span>
                        <span>Beresfield</span>
                        <span>Argenton</span>
                        <span>New Lambton Heights</span>
                    </h6>
                </div>

                {/* Main Footer Content */}
                <div className="footer-content">
                    <div className="footer-items">

                        {/* Column 1 */}
                        <div className="column">
                            <h4>Crafted Smiles Studio</h4>
                            <NavLink className="column-anchor" to="/about-us">About Us</NavLink>
                            <NavLink className="column-anchor" to="/faqs">FAQs</NavLink>
                            <NavLink className="column-anchor" to="/terms-and-conditions">Terms & Conditions</NavLink>
                            <NavLink className="column-anchor" to="/privacy-policy">Privacy Policy</NavLink>
                        </div>

                        {/* Column 2 */}
                        <div className="column">
                            <h4>
                                <NavLink id="single-footer-header" to="/services">Services</NavLink>
                            </h4>
                            <NavLink className="column-anchor" to="/services/general">General Dentistry</NavLink>
                            <NavLink className="column-anchor" to="/services/cosmetic">Cosmetic Dentistry</NavLink>
                            <NavLink className="column-anchor" to="/services/restorative">Restorative Dentistry</NavLink>
                        </div>

                        <div className="column">
                            <h4>
                                <NavLink id="single-footer-header" to="/payments">Payments</NavLink>
                            </h4>
                            <NavLink className="column-anchor" to="/payment-options">Payment Options</NavLink>
                            <NavLink className="column-anchor" to="/payment-plans">Payment Plans</NavLink>
                        </div>

                        <div className="column">
                            <h4>
                                <NavLink id="single-footer-header" to="/get-price-list">Price List</NavLink>
                            </h4>
                        </div>

                        <div className="column">
                            <h4>
                                <NavLink id="single-footer-header" to="/special-offers">Special Offers</NavLink>
                            </h4>
                        </div>

                        <div className="column">
                            <h4>
                                <NavLink id="single-footer-header" to="/help-me-with">Help Me With</NavLink>
                            </h4>
                        </div>

                        {/* Map Section */}
                        <div className="footer-map">
                            <h4>OUR LOCATION</h4>
                            <p>137 Croudace Rd, Elermore Vale NSW 2287</p>
                            <MapContainer
                                center={position}
                                zoom={30}
                                style={{ height: "175px", width: "100%", borderRadius: "10px" }}
                            >
                                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                <Marker position={position} icon={customMarkerIcon} />
                            </MapContainer>
                        </div>

                    </div>
                </div>
            </footer>
            {/* Copyright Section */}
            <div className="footer-copy">
                <p>© {new Date().getFullYear()} Crafted Smiles Studio. All Rights Reserved.</p>
            </div>
        </>    
    );
}

export default Footer;
