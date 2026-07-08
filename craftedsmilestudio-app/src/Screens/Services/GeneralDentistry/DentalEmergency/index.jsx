import Header from "../../../../Components/Header";
import Footer from "../../../../Components/Footer";
import GetInTouch from "../../../../Components/GetInTouch";
import PriceListButton from "../../../../Components/PriceListButton";
import Carousel from "../../../../Components/Carousel";
import imageList from "../../../../utils/carouselImages";
import SpecialOffersCarousel from "../../../../Components/SpecialOffersCarousel";
import offersList from "../../../../utils/specialOffers";
import FAQComponent from "../../../../Components/FAQComponent";
import DentalEmergencyPhoto from "../../../../assets/special-offers/offer-image-3.png";
import Hero from "../../../../Components/Hero";
import Banner from "../../../../Components/Banner";
import WhyChooseUs from "../../../../Components/WhyChooseUs";
import DentalEmergencyBannerImage from "../../../../assets/services-summary/services-summary-image-4.png";

const faqsArray = [
  {
    question: "What counts as a dental emergency?",
    answer: (
      <>
        Any condition causing <b>severe pain, swelling, bleeding, or damage</b> to teeth or gums should be treated promptly. 
        Don’t wait—seek immediate care at <b>Crafted Smiles Studio</b>.
      </>
    )
  },
  {
    question: "What should I do if my tooth is knocked out?",
    answer: (
      <>
        Keep the tooth moist in <b>milk or saliva</b> and contact us immediately. 
        Quick action can sometimes save the tooth and prevent further damage.
      </>
    )
  },
  {
    question: "Can dental emergencies wait?",
    answer: (
      <>
        No. Delaying treatment can worsen <b>pain, infection, or damage</b>. 
        Call us as soon as possible for <b>prompt emergency care</b>.
      </>
    )
  },
  {
    question: "Will you just treat the emergency or provide ongoing care?",
    answer: (
      <>
        We focus on <b>relieving pain immediately</b>, but also guide you on <b>prevention and follow-up care</b> to avoid future issues.
      </>
    )
  },
  {
    question: "Do you treat children in dental emergencies?",
    answer: (
      <>
        Yes. Our team is experienced in handling <b>pediatric emergencies</b>, ensuring children receive <b>gentle, professional care</b>.
      </>
    )
  }
];

function DentalEmergency() {
  return (
    <div className="services-screen">
      <Header />

      <Hero
        title="DENTAL EMERGENCY CARE IN ELERMORE VALE"
        subheading={`Dental emergencies can happen unexpectedly, and Crafted Smiles Studio is here to provide fast, professional care when you need it most. 
        We focus on pain relief, comfort, and timely treatment for adults and children experiencing urgent dental issues.`}
        media={DentalEmergencyBannerImage}
      />

      <div className="services-container">
        <div className="services-content">
          <section className="services-landing">

            {/* Why Prompt Treatment */}
            <div className="services-section">
              <h2>Why Dental Emergencies Should Be Treated Promptly</h2>
              <ul>
                <li><b>Relieves pain and discomfort quickly</b></li>
                <li><b>Prevents infection from spreading</b></li>
                <li><b>Helps save damaged teeth</b> when possible</li>
                <li><b>Avoids more complex procedures later</b></li>
              </ul>
              <p>
                At <b>Crafted Smiles Studio</b>, we focus on <b>immediate relief</b> while also guiding you on prevention to reduce the risk of future emergencies.
              </p>
            </div>

            {/* Common Emergencies */}
            <div className="services-section">
              <h2>Common Dental Emergencies</h2>
              <ul>
                <li><b>Toothache or severe tooth pain</b> – caused by decay, infection, or trauma</li>
                <li><b>Chipped or broken teeth</b> – from accidents, falls, or biting hard objects</li>
                <li><b>Knocked-out teeth (avulsed teeth)</b> – urgent action can sometimes save the tooth</li>
                <li><b>Lost fillings or crowns</b> – causing sensitivity, discomfort, or risk of infection</li>
                <li><b>Abscess or infection</b> – swelling, pus, or pain requiring immediate care</li>
                <li><b>Soft tissue injuries</b> – cuts, lacerations, or swelling in gums, lips, or tongue</li>
              </ul>
              <p>
                Our team provides <b>gentle, effective treatment</b> for all types of emergencies and explains how to care for your teeth afterward to prevent recurrence.
              </p>
            </div>

            {/* Intro Section */}
            <div className="services-section services-split">
              <img src={DentalEmergencyPhoto} alt="Dental Emergency" />
            </div>

            {/* How We Handle Emergencies */}
            <div className="services-section">
              <h2>How We Handle Dental Emergencies</h2>
              <ul>
                <li><b>Immediate Appointment Booking:</b> We see emergency patients as soon as possible.</li>
                <li><b>Pain Relief Focus:</b> Your comfort is our top priority, with urgent issues addressed promptly.</li>
                <li><b>Comprehensive Care:</b> After treatment, we provide guidance on <b>prevention and follow-up</b>.</li>
                <li><b>Experienced Team:</b> Skilled in handling adult and pediatric emergencies with calm, professional care.</li>
              </ul>
            </div>

            {/* Prevention */}
            <div className="services-section">
              <h2>Prevention Is Better Than Cure</h2>
              <ul>
                <li><b>Regular dental check-ups and cleans</b></li>
                <li><b>Early treatment of cavities and cracks</b></li>
                <li><b>Protective gear for sports (mouthguards)</b></li>
                <li><b>Proper oral hygiene at home</b></li>
              </ul>
              <p>
                At <b>Crafted Smiles Studio</b>, we don’t just fix problems—we educate and support you to maintain a <b>healthy, emergency-free smile</b>.
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

export default DentalEmergency;
