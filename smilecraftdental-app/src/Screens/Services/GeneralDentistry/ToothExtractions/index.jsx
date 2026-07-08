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
import ToothExtractionVideo from "../../../../assets/videos/DentalFillings.mp4"; // Replace with actual tooth extraction video if available
import Hero from "../../../../Components/Hero";
import Banner from "../../../../Components/Banner";
import WhyChooseUs from "../../../../Components/WhyChooseUs";
import ToothExtractionsBannerImage from "../../../../assets/banner-images/tooth-extractions-banner-image.png";

const faqsArray = [
  {
    question: "How painful is a tooth extraction?",
    answer: (
      <>
        At <b>Smile Craft Dental</b>, we use <b>local anaesthetic and gentle techniques</b> to ensure your extraction is as comfortable as possible. 
        Sedation is available for patients who need extra support.
      </>
    )
  },
  {
    question: "What is the recovery time after a tooth extraction?",
    answer: (
      <>
        Recovery depends on the type of extraction. <b>Simple extractions</b> typically heal within a few days, while <b>surgical extractions and wisdom teeth removal</b> may take one to two weeks. 
        We provide detailed <b>aftercare instructions</b> for smooth healing.
      </>
    )
  },
  {
    question: "When do I need a wisdom teeth extraction?",
    answer: (
      <>
        Wisdom teeth may need removal if they are <b>impacted, causing pain, crowding, or infection</b>. Our team evaluates each patient individually and recommends removal only when necessary.
      </>
    )
  },
  {
    question: "What is the difference between a simple and surgical extraction?",
    answer: (
      <>
        <b>Simple extractions</b> are for teeth that are easily accessible and usually done under local anaesthetic. 
        <b>Surgical extractions</b> involve teeth that are impacted, broken, or below the gum line and may require more advanced techniques or sedation.
      </>
    )
  },
  {
    question: "How do I care for my mouth after a tooth extraction?",
    answer: (
      <>
        Follow your dentist's instructions, eat soft foods, avoid chewing near the extraction site, keep the area clean, and take any prescribed medication. 
        <b>Smile Craft Dental</b> provides personalised guidance to support healing.
      </>
    )
  },
  {
    question: "Can children have wisdom teeth removed?",
    answer: (
      <>
        Yes. Our experienced team provides <b>gentle, safe care</b> for children and teenagers who require wisdom teeth removal or other extractions, ensuring a comfortable experience for young patients.
      </>
    )
  }
];

function ToothExtractions() {
  return (
    <div className="services-screen">
      <Header />

      <Hero
        title="TOOTH EXTRACTIONS IN ELERMORE VALE"
        subheading={`At Smile Craft Dental, we provide expert tooth extractions in Elermore Vale NSW, including wisdom teeth removal and surgical extractions, with a gentle, family-focused approach. Our experienced dental team ensures every procedure is safe, comfortable, and tailored to your needs.
        Whether you need a simple extraction, removal of impacted wisdom teeth, or a more complex surgical extraction, we prioritise patient comfort, precision, and long-term oral health.
        Book with confidence if you need an extraction.`}
        media={ToothExtractionsBannerImage}
      />

      <div className="services-container">
        <div className="services-content">
          <section className="services-landing">

            {/* Why Tooth Extractions */}
            <div className="services-section">
              <h2>Why Tooth Extractions May Be Needed</h2>
              <p>Tooth extractions may be necessary to:</p>
              <ul>
                <li>Remove <b>severely decayed or damaged teeth</b></li>
                <li>Extract impacted or problematic <b>wisdom teeth</b></li>
                <li>Prepare for <b>orthodontic treatment or dental implants</b></li>
                <li>Relieve pain or prevent infection</li>
              </ul>
              <p>
                At <b>Smile Craft Dental</b>, we carefully assess your teeth and oral health to recommend the safest and most effective treatment option. 
                We offer expert tooth extractions for <b>unrestorable teeth</b>. This includes simple extractions for easily accessible teeth, surgical extractions for impacted or broken teeth, and wisdom teeth removal to relieve pain, prevent crowding, and reduce infection—all performed with precision and care for a comfortable recovery.
              </p>
            </div>

            {/* Intro Section */}
            <div className="services-section services-split">
              <ServiceSection video={ToothExtractionVideo} />
            </div>

            {/* Procedure */}
            <div className="services-section">
              <h2>What to Expect During a Tooth Extraction</h2>
              <p>At <b>Smile Craft Dental</b>, we make the extraction process simple and stress-free:</p>
              <p><b>1. Examination & Diagnosis:</b> X-rays and a thorough assessment to plan the procedure.</p>
              <p><b>2. Numbing & Sedation:</b> Local anaesthetic or sedation ensures a pain-free experience.</p>
              <p><b>3. Tooth Removal:</b> Carefully performed, whether simple or surgical.</p>
              <p><b>4. Aftercare & Recovery:</b> Personalized instructions for a smooth, comfortable healing process.</p>
              <p>
                Our team provides support before, during, and after your extraction to ensure your experience is <b>as comfortable and safe as possible</b>.
              </p>
            </div>

            {/* Post-Extraction Care */}
            <div className="services-section">
              <h2>Post-Extraction Care</h2>
              <p>Proper aftercare is essential for fast recovery:</p>
              <ul>
                <li>Follow your dentist’s instructions carefully</li>
                <li>Eat soft foods and avoid chewing near the extraction site</li>
                <li>Keep the area clean but avoid disturbing the clot</li>
                <li>Take prescribed pain relief as advised</li>
              </ul>
              <p>
                At <b>Smile Craft Dental</b>, we provide clear, personalised aftercare guidance to support healing and long-term oral health.
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

export default ToothExtractions;
