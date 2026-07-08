import './index.css';
import BannerImage from "../../assets/banner-images/banner-image.png";

function Banner() {
    return (
        <section className="banner">
            <div className="banner-container">
                <div className='banner-content'>
                    <p>BEGIN YOUR JOURNEY TO A BEAUTIFUL SMILE AT CRAFTED SMILES STUDIO</p>
                    <div className="banner-cta-buttons">
                        <a
                            href="https://booking.au.hsone.app/soe/new/%20?pid=AUETL01"
                            className="banner-cta"
                            aria-label="Book a dental appointment at Crafted Smiles Studio"
                        >
                            BOOK AN APPOINTMENT
                        </a>
                        <a href="tel:+61480026382" className="banner-cta secondary">
                            CALL: 0480026382
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
