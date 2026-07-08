import './index.css';
import IntroVideoLink from '../../assets/videos/IntroVideo.mp4';

function IntroVideo() {
    return (
        <section className="clinic-intro-video">
            <div className="container">
                <h2 className="intro-video-heading">WELCOME TO Crafted Smiles Studio</h2>
                <div className="intro-video-content">
                    <div className="intro-text">
                        <p>
                            <b>Welcome to Crafted Smiles Studio, Elermore Vale:</b> where your smile is our priority. We combine gentle, patient-focused care with modern dental technology to provide personalised treatments for patients of all ages. From routine check-ups and hygiene care to cosmetic and advanced restorative treatments, every visit is tailored to your unique needs. Our dedicated team takes the time to listen, guide, and make you feel comfortable, ensuring a positive experience while supporting your journey to a healthy, confident smile.
                        </p>

                        <div className="intro-cta-buttons">
                            <a
                                href="https://booking.au.hsone.app/soe/new/%20?pid=AUETL01"
                                className="intro-cta"
                            >
                                BOOK AN APPOINTMENT
                            </a>

                            <a href="tel:+61480026382" className="intro-cta secondary">
                                CALL: 0480026382
                            </a>
                        </div>
                    </div>

                    <div className="video-wrapper">
                        <video
                        src={IntroVideoLink}
                        loop
                        playsInline
                        controls
                        className="intro-video"
                        />
                    </div>
                 </div>
            </div>
        </section>

    );
};

export default IntroVideo;
