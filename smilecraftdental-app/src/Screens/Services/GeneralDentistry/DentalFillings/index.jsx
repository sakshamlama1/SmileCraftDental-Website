import { NavLink } from "react-router-dom"; 
import Header from "../../../../Components/Header";
import Footer from "../../../../Components/Footer";
import GetInTouch from "../../../../Components/GetInTouch";
import PriceListButton from "../../../../Components/PriceListButton";
import Carousel from "../../../../Components/Carousel";
import imageList from "../../../../utils/carouselImages";
import SpecialOffersCarousel from "../../../../Components/SpecialOffersCarousel";
import offersList from "../../../../utils/specialOffers";
import FAQComponent from "../../../../Components/FAQComponent";
import ServiceSection from "../../../../Components/ServiceSection";
import DentalFillingsVideo from "../../../../assets/videos/DentalFillings.mp4";
import Hero from "../../../../Components/Hero";
import Banner from "../../../../Components/Banner";
import WhyChooseUs from "../../../../Components/WhyChooseUs";
import DentalFillingsBannerImage from "../../../../assets/banner-images/dental-fillings-banner-image.png";

const faqsArray = [
  {
    question: "How do I know if I need a dental filling?",
    answer: (
      <>
        If you have <b>tooth decay, cavities, or a small fracture</b>, a dental filling may be recommended. 
        Regular dental check-ups at <b>Smile Craft Dental</b> help detect issues early before they become more serious.
      </>
    )
  },
  {
    question: "What types of dental fillings do you offer?",
    answer: (
      <>
        We provide <b>composite (white) fillings, silver amalgam fillings, glass ionomer fillings, gold and porcelain inlays,</b> and <b>temporary fillings</b>. 
        Your dentist will recommend the best option for <b>durability, appearance, and oral health</b>.
      </>
    )
  },
  {
    question: "Are dental fillings painful?",
    answer: (
      <>
        No. We use <b>local anaesthetic</b> and <b>gentle techniques</b> to ensure your comfort. Most patients experience <b>little to no discomfort</b> during treatment.
      </>
    )
  },
  {
    question: "How long do dental fillings last?",
    answer: (
      <>
        The lifespan depends on the <b>material, location,</b> and your <b>oral habits</b>. 
        Composite fillings typically last <b>5–10 years</b>, amalgam fillings <b>10–15 years</b>, 
        and gold or porcelain inlays can last <b>15 years or more</b> with proper care.
      </>
    )
  },
  {
    question: "Can children receive dental fillings?",
    answer: (
      <>
        Absolutely. Our <b>family-focused dental care</b> ensures children receive <b>gentle, age-appropriate treatment</b>, helping them build <b>positive dental habits</b>.
      </>
    )
  },
  {
    question: "How much does a dental filling cost in Tuncurry?",
    answer: (
      <>
        Costs vary depending on the <b>type of filling</b> and the <b>tooth treated</b>. 
        <b>Smile Craft Dental</b> provides <b>transparent pricing</b> and discusses all options before treatment begins.
      </>
    )
  }
];

function DentalFillings() {
  return (
    <div className="services-screen">
      <Header />

      <Hero
        title="DENTAL FILLINGS IN Tuncurry"
        subheading={`Restore your smile with confidence at Smile Craft Dental. 
        We use the latest dental techniques and premium-quality materials to deliver strong, natural-looking fillings with a gentle, family-friendly touch. 
        Comfort, care, and long-lasting results — every visit.
        Book your appointment today and smile with confidence.`}
        media={DentalFillingsBannerImage}
      />

      <div className="services-container">
        <div className="services-content">
          <section className="services-landing">

            {/* Why Dental Fillings */}
            <div className="services-section">
              <h2>Why Dental Fillings Are Important</h2>
              <p>
                Dental fillings repair damage caused by <b>tooth decay, cavities, or small fractures</b>. 
                Untreated cavities can lead to <b>pain, infection,</b> or the need for more extensive dental procedures. 
                Regular check-ups at <b>Smile Craft Dental</b> help detect issues early and keep your teeth <b>strong and healthy</b> for years to come.
              </p>
            </div>

            {/* Intro Section */}
            <div className="services-section services-split">
              <ServiceSection video={DentalFillingsVideo} />
            </div>

            {/* Procedure */}
            <div className="services-section">
              <h2>Dental Filling Procedure: What to Expect</h2>
              <p>
                At <b>Smile Craft Dental</b>, we make dental fillings <b>simple, comfortable, and stress-free</b> for the whole family. 
                Your dentist begins with a careful examination and diagnosis, sometimes using X-rays to identify decay or damage. 
                A <b>local anaesthetic</b> is applied for a <b>pain-free experience</b>. 
                The decayed or damaged portion of the tooth is carefully removed, and the tooth is cleaned and prepared for the filling.
              </p>
              <p>
                Depending on the material — whether <b>composite, amalgam, glass ionomer, or gold/porcelain inlay</b> — the filling is placed, shaped, and, if needed, hardened with a curing light. 
                Finally, your bite is checked and adjusted to ensure <b>comfort and proper function</b>. 
                This precise, gentle process restores your tooth’s <b>strength and appearance</b> while keeping your visit as easy and pleasant as possible.
              </p>
            </div>

            <Banner />
            <div className="services-section">
                <h2>DENTAL PROBLEMS DENTAL FILLINGS CAN ADDRESS</h2>
            </div>
            <div className="services-tiles" id="sub-services-tiles">
                <div className="service-tile">
                    <h3>Sensitivity</h3>
                    <p>Reduce sensitivity and discomfort when eating, drinking, or brushing.</p>
                    <NavLink to="/help-me-with/sensitivity" className="tile-link">LEARN MORE →</NavLink>
                </div>
            </div>
            <FAQComponent faqs={faqsArray} />
          </section>
        </div>
      </div>

      <Carousel images={imageList} />
      <SpecialOffersCarousel offers={offersList} />
      <WhyChooseUs />
      <PriceListButton />
      <GetInTouch />
      <Banner />
      <Footer />
    </div>
  );
}

export default DentalFillings;
