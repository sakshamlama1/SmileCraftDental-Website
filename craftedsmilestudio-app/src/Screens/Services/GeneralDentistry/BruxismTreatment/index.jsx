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
import SleepApneaMouthguardVideo from "../../../../assets/videos/SleepApneaMouthguard.mp4";
import Hero from "../../../../Components/Hero";
import Banner from "../../../../Components/Banner";
import WhyChooseUs from "../../../../Components/WhyChooseUs";
import BruxismTreatmentImage from "../../../../assets/banner-images/bruxism-treatment-banner-image.png";

const faqsArray = [
  {
    question: "What is the most common cause of bruxism?",
    answer: (
      <>
        Stress and anxiety are common triggers, but <b>misaligned teeth, sleep disorders, and lifestyle factors</b> can also contribute.
      </>
    )
  },
  {
    question: "How do I know if I grind my teeth at night?",
    answer: (
      <>
        Signs include <b>worn teeth, jaw pain, headaches, and disturbed sleep</b>. A dentist at <b>Crafted Smiles Studio</b> can diagnose bruxism during a checkup.
      </>
    )
  },
  {
    question: "What is an occlusal splint and how does it work?",
    answer: (
      <>
        An <b>occlusal splint</b> is a custom-fitted mouthguard that protects teeth and jaw muscles by <b>absorbing grinding forces during sleep</b>.
      </>
    )
  },
  {
    question: "Can bruxism cause permanent dental damage?",
    answer: (
      <>
        Yes. Untreated bruxism can lead to <b>worn, cracked, or chipped teeth, damage to dental work, gum issues, and TMJ disorders</b>.
      </>
    )
  },
  {
    question: "Are children affected by bruxism?",
    answer: (
      <>
        Yes, bruxism can occur in children. Early detection and <b>custom-fitted splints</b> can prevent tooth damage and jaw pain.
      </>
    )
  }
];

function BruxismTreatment() {
  return (
    <div className="services-screen">
      <Header />

      <Hero
        title="BRUXISM TREATMENT IN ELERMORE VALE"
        media={BruxismTreatmentImage}
        subheading={`Protect your teeth, jaw, and long-term oral health with expert bruxism treatment at Crafted Smiles Studio. 
            Teeth grinding and clenching—often occurring during sleep—can go unnoticed until it causes tooth wear, jaw pain, headaches, or cracked teeth. Our experienced team focuses on early diagnosis and personalised treatment to stop damage before it becomes serious.
            Schedule for customised bruxism solutions designed to relieve discomfort, protect your smile, and prevent long-term complications.
        `}
      />

      <div className="services-container">
        <div className="services-content">
          <section className="services-landing">
            {/* Occlusal Splints */}
            <div className="services-section">
              <h2>Occlusal Splints – The Key Bruxism Treatment</h2>
              <p>
                An <b>occlusal splint</b> (also called a night guard) is a custom-fitted dental appliance designed to protect your teeth and jaw from the damaging effects of bruxism.
              </p>
              <h3>Benefits of an Occlusal Splint:</h3>
              <ul>
                <li>Prevents <b>tooth wear and fractures</b></li>
                <li>Reduces <b>jaw muscle strain and TMJ discomfort</b></li>
                <li>Improves <b>sleep quality</b> by minimising grinding at night</li>
                <li>Protects existing dental work, including <b>crowns and fillings</b></li>
                <li>Customised for <b>maximum comfort and fit</b></li>
              </ul>
              <p>
                At Crafted Smiles Studio, our occlusal splints are tailored for each patient, ensuring long-lasting protection and optimal comfort.
              </p>
            </div>

            {/* Intro & Video */}
            <div className="services-section services-split">
                <ServiceSection video={SleepApneaMouthguardVideo} />
            </div>
            
            <div className="services-section">
                <h2>What to Expect During Bruxism Treatment</h2>
                <p><b>1. Comprehensive Examination:</b> Examination of teeth, jaw, and bite</p>
                <p><b>2. Diagnosis:</b> Diagnosis using clinical evaluation and dental impressions</p>
                <p><b>3. Treatment Planning:</b> Treatment Planning – occlusal splints, bite adjustment, stress management, or combined therapy</p>
                <p><b>4. Custom Occlusal Splint Fabrication:</b> Custom Occlusal Splint Fabrication for a perfect fit</p>
                <p><b>5. Fitting and Follow-Up:</b> Fitting and Follow-Up – adjustments and ongoing monitoring</p>
            </div>
            <Banner />
            <div className="services-section">
              <h2>DENTAL PROBLEMS BRUXISM TREATMENT CAN ADDRESS</h2>
            </div>
            <div className="services-tiles" id="sub-services-tiles">
                {/* Bruxism Treatment */}
                <div className="service-tile">
                    <h3>Bruxism</h3>
                    <p>Manage teeth grinding and jaw clenching to relieve pain and prevent long-term damage.</p>
                    <NavLink to="/help-me-with/bruxism" className="tile-link">LEARN MORE →</NavLink>
                </div>

                {/* Children Dentistry */}
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

export default BruxismTreatment;
