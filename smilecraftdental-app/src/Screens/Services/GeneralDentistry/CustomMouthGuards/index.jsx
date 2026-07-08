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
import CustomMouthGuard from "../../../../assets/special-offers/offer-image-5.png";
import Hero from "../../../../Components/Hero";
import Banner from "../../../../Components/Banner";
import WhyChooseUs from "../../../../Components/WhyChooseUs";
import CustomMouthGuardBannerImage from "../../../../assets/banner-images/mouth-guards-banner-image.png";

const faqsArray = [
  {
    question: "Who can benefit from a custom mouth guard?",
    answer: (
      <>
        <b>Children, teens, and adults</b> who play sports or suffer from <b>teeth grinding (bruxism)</b> can benefit from a <b>custom-fitted mouth guard</b>.
      </>
    )
  },
  {
    question: "How is a custom mouth guard different from a store-bought one?",
    answer: (
      <>
        Custom guards are <b>tailored to your teeth and jaw</b>, providing <b>superior comfort, protection, and durability</b> compared to generic over-the-counter guards.
      </>
    )
  },
  {
    question: "How long does it take to make a custom mouth guard?",
    answer: (
      <>
        After your dental impression is taken, it usually takes <b>1–2 weeks</b> for your mouth guard to be fabricated and ready for fitting.
      </>
    )
  },
  {
    question: "Can children wear custom mouth guards?",
    answer: (
      <>
        Yes. We create <b>child-friendly, custom-fitted mouth guards</b> to protect growing teeth during sports or night-time grinding.
      </>
    )
  },
  {
    question: "How do I care for my custom mouth guard?",
    answer: (
      <>
        Clean your mouth guard <b>daily with a toothbrush and cold water</b>, store it in a <b>ventilated case</b>, and avoid exposing it to heat. 
        Regular checks at <b>Smile Craft Dental</b> ensure it remains effective.
      </>
    )
  }
];

function CustomMouthGuards() {
  return (
    <div className="services-screen">
      <Header />

      <Hero
        title="CUSTOM MOUTH GUARDS IN Tuncurry"
        subheading={`At Smile Craft Dental, we provide custom mouth guards to protect your teeth, gums, and jaw during sports or night-time grinding. 
        Our premium, custom-fitted guards are designed for comfort, durability, and maximum protection, ensuring you can perform at your best or sleep safely without damaging your teeth.`}
        media={CustomMouthGuardBannerImage}
      />

      <div className="services-container">
        <div className="services-content">
          <section className="services-landing">

            {/* Why Choose Mouth Guards */}
            <div className="services-section">
              <h2>Why Choose a Custom Mouth Guard?</h2>
              <ul>
                <li><b>Sports Protection:</b> Prevent dental injuries during contact and high-impact sports.</li>
                <li><b>Night Grinding (Bruxism):</b> Protect teeth from wear caused by grinding or clenching.</li>
                <li><b>Comfort & Fit:</b> Tailored to your teeth and jaw for superior comfort and protection.</li>
                <li><b>Durability:</b> Made from high-quality materials to withstand regular use.</li>
              </ul>
              <p>
                At <b>Smile Craft Dental</b>, we focus on <b>personalised, safe, and effective solutions</b> for all ages.
              </p>
            </div>

            {/* Intro Section */}
            <div className="services-section services-split">
              <img src={CustomMouthGuard} alt="Custom Mouth Guard"></img>
            </div>

            {/* What to Expect */}
            <div className="services-section">
              <h2>What to Expect When Getting a Custom Mouth Guard</h2>
              <ul>
                <li><b>1. Consultation & Assessment:</b> Your dentist evaluates your teeth and jaw for the best fit.</li>
                <li><b>2. Impression:</b> A precise dental impression is taken to create your custom mouth guard.</li>
                <li><b>3. Fabrication:</b> Using high-quality materials, your mouth guard is carefully crafted in a dental lab.</li>
                <li><b>4. Fitting & Adjustment:</b> The finished mouth guard is tested for comfort and effectiveness, with adjustments if needed.</li>
                <li><b>5. Care Instructions:</b> Guidance on cleaning, storage, and maintenance for long-lasting protection.</li>
              </ul>
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

export default CustomMouthGuards;
