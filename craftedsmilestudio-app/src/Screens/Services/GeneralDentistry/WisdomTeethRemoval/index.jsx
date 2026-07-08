import React from "react";
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
import WisdomTeethVideo from "../../../../assets/videos/DentalFillings.mp4"; // Replace if wisdom teeth video available
import Hero from "../../../../Components/Hero";
import Banner from "../../../../Components/Banner";
import WhyChooseUs from "../../../../Components/WhyChooseUs";
import WisdomTeethRemovalBannerImage from "../../../../assets/banner-images/wisdom-teeth-removal-image.png";

const faqsArray = [
  {
    question: "When should wisdom teeth be removed?",
    answer: (
      <>
        Wisdom teeth may need to be removed if they cause <b>pain, swelling, infection, or crowding</b>.
        Your dentist will assess your X-rays and symptoms to determine whether extraction is recommended.
      </>
    )
  },
  {
    question: "Is wisdom teeth removal painful?",
    answer: (
      <>
        No. At <b>Crafted Smiles Studio</b>, we use <b>local anaesthetic</b> to ensure the procedure is
        comfortable. Most patients experience only mild discomfort during recovery.
      </>
    )
  },
  {
    question: "How long does recovery take?",
    answer: (
      <>
        Most patients recover within <b>7–10 days</b>. Mild swelling or tenderness is normal, and
        following aftercare instructions helps ensure smooth healing.
      </>
    )
  },
  {
    question: "When might a specialist referral be needed?",
    answer: (
      <>
        A referral may be recommended if the wisdom tooth is <b>complex or impacted</b>. This ensures
        the <b>safety and welfare of the patient</b> and the best possible outcome.
      </>
    )
  },
  {
    question: "What complications can occur?",
    answer: (
      <>
        Possible complications include <b>swelling, bruising, bleeding, temporary numbness, dry socket,
        or infection</b>. Our team monitors recovery closely and provides professional follow-up care
        when required.
      </>
    )
  }
];

function WisdomTeethRemoval() {
  return (
    <div className="services-screen">
      <Header />

      <Hero
        title="WISDOM TEETH REMOVAL IN ELERMORE VALE"
        subheading={`At Crafted Smiles Studio, we provide expert wisdom teeth removal to help you maintain a 
            healthy, comfortable smile. Wisdom teeth, or third molars, can sometimes cause pain, crowding, or 
            infection if they do not erupt properly. Our team specialises in safe, professional removal for 
            teens and adults, with care tailored to your needs.`}
        media={WisdomTeethRemovalBannerImage}
      />

      <div className="services-container">
        <div className="services-content">
          <section className="services-landing">

            {/* Why Wisdom Teeth Removal */}
            <div className="services-section">
              <h2>Why Wisdom Teeth May Need to Be Removed</h2>
              <p>Wisdom teeth don’t always have enough space to emerge properly, which can lead to:</p>
              <ul>
                <li><b>Impacted teeth</b> – Teeth trapped in the jaw or gums</li>
                <li><b>Crowding</b> – Shifting of other teeth causing misalignment</li>
                <li><b>Pain or discomfort</b> – Often in the back of the mouth or jaw</li>
                <li><b>Infection or gum inflammation</b> – Due to partially erupted teeth</li>
                <li><b>Cysts or damage</b> to surrounding teeth</li>
              </ul>
              <p>
                Removing problematic wisdom teeth early can <b>prevent pain, infection, and future dental
                complications</b>, helping to maintain long-term oral health.
              </p>
            </div>

            {/* Types */}
            <div className="services-section">
              <h2>Types of Wisdom Teeth Removal</h2>
              <ul>
                <li><b>Simple Extraction:</b> For fully erupted wisdom teeth with no complications</li>
                <li><b>Surgical Extraction:</b> For impacted teeth or those requiring minor surgery</li>
              </ul>
              <p>
                Your dentist will <b>recommend the best approach</b> based on your X-rays, symptoms, and overall oral health.
              </p>
            </div>

            {/* Intro / Video Section */}
            <div className="services-section services-split">
              <ServiceSection video={WisdomTeethVideo} />
            </div>

            {/* Process */}
            <div className="services-section">
              <h2>What to Expect During a Wisdom Tooth Removal</h2>
              <p>At <b>Crafted Smiles Studio</b>, we follow a careful, step-by-step approach:</p>
              <p><b>1. Examination & X-Rays:</b> We assess tooth position, root structure, and surrounding bone.</p>
              <p><b>2. Treatment Planning:</b> Your dentist explains the procedure, recovery expectations, and any potential challenges.</p>
              <p><b>3. Anaesthesia:</b> Local anaesthetic ensures a pain-free experience.</p>
              <p>
                <b>4. Tooth Removal:</b> The tooth is carefully removed. In complex or impacted cases, a
                referral to a specialist oral surgeon may be recommended for the <b>welfare and safety
                of the patient</b>.
              </p>
              <p><b>5. Aftercare Guidance:</b> Instructions to manage swelling, discomfort, and promote healing.</p>
              <p><b>6. Follow-Up:</b> Ensures proper recovery and addresses any concerns.</p>
              <p>
                Our goal is to make the procedure as smooth and comfortable as possible while promoting
                fast, safe healing.
              </p>
            </div>

            {/* Complications */}
            <div className="services-section">
              <h2>Potential Complications & How We Manage Them</h2>
              <p>While wisdom teeth removal is <b>generally safe</b>, some patients may experience:</p>
              <ul>
                <li><b>Swelling or bruising</b> – managed with ice packs and anti-inflammatories</li>
                <li><b>Bleeding</b> – controlled during the procedure and with post-operative care</li>
                <li><b>Temporary numbness or tingling</b> – usually resolves quickly and is closely monitored</li>
                <li><b>Dry socket (delayed healing)</b> – treated promptly with professional care</li>
                <li><b>Infection</b> – managed with antibiotics and follow-up appointments</li>
              </ul>
              <p>
                We reassure patients that our <b>experienced team monitors all patients closely</b>, provides
                <b> clear aftercare instructions</b>, and <b>refers to specialists when needed</b> to ensure the 
                <b> safety and welfare of the patient.</b>
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

export default WisdomTeethRemoval;
