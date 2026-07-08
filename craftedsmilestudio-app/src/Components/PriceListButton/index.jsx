import "./index.css";
import { NavLink } from "react-router-dom";
import PriceListImage from "../../assets/price-list.png";

function PriceListButton() {
    return (
        <div className="price-list">
            <div className="price-list-container" >
                <div className="price-list-content">
                    <h2>PRICE LIST</h2>
                    <p>
                        EXPLORE COMPREHENSIVE DETAILS OF TREATMENT COSTS, SO YOU KNOW EXACTLY WHAT TO EXPECT FOR YOUR SMILE
                    </p>
                    <NavLink
                        className="price-list-button"
                        to="/get-price-list"
                    >
                        GET YOUR PRICE LIST
                    </NavLink>
                </div>


                <div className="price-list-image">
                    <img
                        src={PriceListImage}
                        alt="Price List"
                        className="price-list-img"
                    />
                </div>
            </div>
        </div>
    );
}

export default PriceListButton;
