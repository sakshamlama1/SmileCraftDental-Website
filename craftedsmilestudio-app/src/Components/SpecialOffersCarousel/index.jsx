import "./index.css";
import { NavLink } from "react-router-dom";

const SpecialOffersCarousel = () => {
  return (
    <div className="special-offers">
      <div className="special-offers-container">
        <div className="special-offers-content">
          <h2>SPECIAL OFFERS</h2>
          <p>
            EXPLORE LIMITED-TIME DENTAL OFFERS DESIGNED TO MAKE YOUR PERFECT SMILE MORE ACCESSIBLE AND AFFORDABLE
          </p>
        </div>

        <div className="special-offers-cta">
          <NavLink
            className="special-offers-button"
            to="/special-offers"
          >
            VIEW AVAILABLE SPECIAL OFFERS
          </NavLink>
        </div>
      </div>
    </div>        
  );
};

export default SpecialOffersCarousel;
