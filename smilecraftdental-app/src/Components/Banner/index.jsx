import './index.css';
import BannerImage from "../../assets/banner-images/banner-image.png";

function Banner() {
    return (
        <section className="banner">
            <div className="banner-container">
                <div className='banner-content'>
                    <p>BEGIN YOUR JOURNEY TO A BEAUTIFUL SMILE AT SMILE CRAFT DENTAL</p>
                    <div className="banner-cta-buttons">
                        <a
                            href="https://booking.au.hsone.app/soe/new/%20?pid=AUSAL01"
                            className="banner-cta"
                            aria-label="Book a dental appointment at Smile Craft Dental"
                        >
                            BOOK AN APPOINTMENT
                        </a>
                        <a href="tel:+61265558989" className="banner-cta secondary">
                            CALL: (02) 6555 8989
                        </a>
                    </div>
                </div>
                <div className='banner-image'>
                    <img
                        src={BannerImage}
                        alt="Happy dental patient"
                    />
                </div>
                
            </div>
        </section>

    );
};

export default Banner;
