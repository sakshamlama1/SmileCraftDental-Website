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
import RootCanalVideo from "../../../../assets/videos/DentalFillings.mp4"; // Replace with actual root canal video if available
import Hero from "../../../../Components/Hero";
import Banner from "../../../../Components/Banner";
import WhyChooseUs from "../../../../Components/WhyChooseUs";
import RootCanalTreatmentBannerImage from "../../../../assets/banner-images/root-canal-treatment-banner-image.png";

const faqsArray = [
  {
    question: "How do I know if I need a root canal?",
    answer: (
      <>
        Signs include <b>persistent toothache, sensitivity to hot or cold, swelling, or discomfort when chewing</b>. 
        A dental exam and X-rays at <b>Smile Craft Dental</b> confirm the need for treatment.
      </>
    )
  },
  {
    question: "Is root canal treatment painful?",
    answer: (
      <>
        No. We use <b>local anaesthetic and gentle techniques</b> to make the procedure comfortable. Most patients experience <b>relief from discomfort after treatment</b>.
      </>
    )
  },
  {
    question: "How long does a root canal take?",
    answer: (
      <>
        Treatment is typically completed in <b>1–2 visits</b>, depending on the tooth and complexity.
      </>
    )
  },
  {
    question: "Can root canal treatment have complications?",
    answer: (
      <>
        Minor issues such as <b>temporary discomfort or infection recurrence</b> can occur, but our experienced team manages them carefully. In complex cases, we may refer you to a specialist.
      </>
    )
  },
  {
    question: "Will I need a crown after a root canal?",
    answer: (
      <>
        Yes, a <b>crown is often recommended</b> to restore strength, function, and appearance, especially for back teeth.
      </>
    )
  }
];

function RootCanalTreatment() {
  return (
    <div className="services-screen">
      <Header />

      <Hero
        title="ROOT CANAL TREATMENT IN Tuncurry"
        subheading={`Save your natural teeth and relieve discomfort at Smile Craft Dental. 
        We provide gentle, personalised root canal treatment for adults and teens, ensuring long-term oral health and a confident smile.
        Early intervention prevents further complications and protects your teeth for years to come.`}
        media={RootCanalTreatmentBannerImage}
      />

      <div className="services-container">
        <div className="services-content">
          <section className="services-landing">

            {/* Why Root Canal Treatment */}
            <div className="services-section">
              <h2>Why Root Canal Treatment Is Important</h2>
              <p>
                Root canal treatment is essential when the tooth pulp becomes inflamed or infected due to <b>deep decay, cracks, or trauma</b>. 
                Without treatment, infection can:
              </p>
              <ul>
                <li>Cause <b>toothache or sensitivity</b></li>
                <li>Affect surrounding teeth and bone</li>
                <li>Lead to <b>abscess formation</b></li>
                <li>Result in <b>tooth loss</b></li>
              </ul>
              <p>
                Acting promptly allows root canal treatment to <b>save your natural tooth, relieve discomfort, and prevent more complex dental procedures</b>.
              </p>
            </div>

            {/* Intro Section */}
            <div className="services-section services-split">
              <ServiceSection video={RootCanalVideo} />
            </div>

            {/* Procedure */}
            <div className="services-section">
                <h2>What to Expect During a Root Canal Treatment</h2>
                <p><b>1. Examination & Diagnosis:</b> Your dentist evaluates your tooth and takes X-rays to assess the infection</p>
                <p><b>2. Anaesthesia:</b> Local anaesthetic ensures a <b>pain-free, comfortable experience</b></p>
                <p><b>3. Cleaning & Shaping:</b> The infected pulp is carefully removed, and canals are cleaned and shaped</p>
                <p><b>4. Filling & Sealing:</b> Canals are filled with a biocompatible material to prevent reinfection</p>
                <p><b>5. Restoration:</b> A crown or filling restores strength, function, and appearance</p>
            </div>

            {/* Specialist Referral */}
            <div className="services-section">
              <h2>Specialist Referral & Managing Complications</h2>
              <p>
                At <b>Smile Craft Dental</b>, our priority is <b>saving your natural tooth safely and comfortably.</b> 
                While most root canals are completed in-house, <b>complex cases may benefit from referral to an endodontic specialist</b>, 
                such as teeth with intricate root anatomy or previously treated teeth.
              </p>
              <p>
                Possible complications can occur, but our experienced team carefully manages every patient to ensure the best outcome:
              </p>
              <ul>
                <li><b>Persistent discomfort:</b> Minor soreness may happen but is usually resolved with guidance</li>
                <li><b>Infection recurrence:</b> Targeted care or specialist referral ensures effective treatment</li>
                <li><b>Tooth fracture or structural challenges:</b> Careful restoration, including crowns if needed, protects your tooth long-term</li>
              </ul>
              <p>
                We focus on <b>proactive care and reassurance</b>, giving you confidence that <b>every step is closely monitored and expertly managed.</b>
              </p>
            </div>
            <Banner />
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

export default RootCanalTreatment;
