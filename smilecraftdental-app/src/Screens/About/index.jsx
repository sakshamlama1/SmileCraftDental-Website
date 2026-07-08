import "./index.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import GetInTouch from "../../Components/GetInTouch";
import Team from "../../Components/Team";
import Hero from "../../Components/Hero";
import AboutUsBannerImage from "../../assets/banner-images/about-us-banner-image.png";
import Banner from "../../Components/Banner";

function About() {
    return (
        <div className="about-screen">
            <Header />
            <Hero 
                title={"ABOUT US"} 
                subheading={
                    `At Smile Craft Dental, we combine modern dental expertise with a warm, patient-focused approach. 
                    From routine check-ups to advanced dental treatments, our experienced team is committed to helping you 
                    achieve and maintain a healthy, confident smile in a comfortable and welcoming environment. 
                    We proudly care for patients from Elermore Vale, Newcastle, Wallsend, Rankin Park, Cardiff, Kotara, and surrounding suburbs.`
            }
                media={AboutUsBannerImage} 
            />
            <main className="about-container">
                <section className="about-intro">
                    {/* <div className="about-left">
                        <img src={AboutImage} alt="About Smile Craft Dental" />
                    </div> */}
                    <div className="about-right">
                        <h2 className="section-heading">WHO WE ARE</h2>
                        <p>
                            Are you looking for a dentist in Elermore Vale? Smile Craft Dental would like to extend a very warm welcome to everyone visiting us. We understand visiting the dentist isn’t everyone’s favourite pastime, but we aim to make your experience with us as warm, friendly and affordable as possible. Our dentists offer a range of treatments depending on your individual circumstances and needs.
                        </p>
                        <p>
                            <b>From bulk billing to payment plans, get in touch with us today to learn how we can help.</b> 
                        </p>
                        <p>
                           At our Elermore Vale location, we have dentists offering care and services to patients throughout Newcastle, Elermore Vale, Wallsend, Cardiff, Rankin Park, New Lambton, and all surrounding areas. Whether it’s a dental emergency, considering cosmetic dentistry, or you’re merely needing a check-up, Smile Craft Dental are the dentist for you. Book an appointment online today!

                        </p>
                    </div>
                </section>

                <section className="what-we-do">
                    <h2 className="section-sub-heading">WHAT WE DO</h2>
                    <ul>
                        <li>Spend time listening to those we serve.</li>
                        <li>Earn patient trust and build professional relationships.</li>
                        <li>Treat everyone with compassion and respect.</li>
                        <li>Provide tailored treatment for individual needs.</li>
                        <li>Create strong, healthy teeth and beautiful smiles!</li>
                        <li>Encourage feedback and continuously improve.</li>
                    </ul>
                    <div className="section-divider" />
                    <h2 className="section-sub-heading">WHAT MAKES US DIFFERENT</h2>
                    <p className="section-sub-heading-text">
                        We stay on the cutting edge of modern dentistry while building personal connections with our patients. We’re here to provide solutions that suit you — whenever you need us.
                    </p>
                </section>

                
                <Team />
                <GetInTouch />
                <Banner />
            </main>
            <Footer />
        </div>
    );
}

export default About;
