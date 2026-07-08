import Header from "../../../../Components/Header";
import { NavLink } from "react-router-dom";
import Footer from "../../../../Components/Footer";
import GetInTouch from "../../../../Components/GetInTouch";
import PriceListButton from "../../../../Components/PriceListButton";
import Carousel from "../../../../Components/Carousel";
import imageList from "../../../../utils/carouselImages";
import SpecialOffersCarousel from "../../../../Components/SpecialOffersCarousel";
import offersList from "../../../../utils/specialOffers";
import FAQComponent from "../../../../Components/FAQComponent";
import ServiceSection from "../../../../Components/ServiceSection";
import DentalCheckUpsVideo from "../../../../assets/videos/DentalCheckUps.mp4";
import Hero from "../../../../Components/Hero";
import Banner from "../../../../Components/Banner";
import WhyChooseUs from "../../../../Components/WhyChooseUs";
import DentalCheckUpsBannerImage from "../../../../assets/banner-images/checkup-cleaning-banner-image.png";

const faqsArray = [
  {
    question: "How often should I have a dental checkup and clean?",
    answer: (
      <>
        Most patients benefit from a <b>checkup and clean every 6 months</b>. 
        Your dentist may recommend more frequent visits based on your <b>individual oral health needs</b>.
      </>
    )
  },
  {
    question: "Is a dental checkup and clean painful?",
    answer: (
      <>
        No. At <b>Crafted Smiles Studio</b>, we use <b>gentle techniques</b> to ensure a <b>comfortable and stress-free</b> experience for patients of all ages.
      </>
    )
  },
  {
    question: "Can children have a checkup and clean?",
    answer: (
      <>
        Absolutely. We provide <b>child-friendly dental checkups and cleans</b>, making visits educational and enjoyable while teaching <b>lifelong oral hygiene habits</b>.
      </>
    )
  },
  {
    question: "What is the difference between a regular cleaning and a deep clean?",
    answer: (
      <>
        A <b>regular checkup and clean</b> removes surface plaque and tartar, while a <b>deep clean</b> targets tartar <b>below the gumline</b>, usually for patients showing early signs of <b>gum disease</b>.
      </>
    )
  },
  {
    question: "Will my teeth feel sensitive after a checkup and clean?",
    answer: (
      <>
        Some patients may experience <b>temporary sensitivity</b> after treatment, which usually resolves within a day or two. Our team provides <b>tips to maintain comfort</b> and protect your teeth post-visit.
      </>
    )
  }
];

function DentalCheckUpsAndCleaning() {
  return (
    <div className="services-screen">
      <Header />

      <Hero
        title="DENTAL CHECKUPS & CLEANING IN ELERMORE VALE"
        subheading={`Keep your smile healthy, bright, and confident with professional dental checkups and cleans at Crafted Smiles Studio. 
        Our gentle, family-focused team helps prevent cavities, gum disease, and other oral health issues while making every visit comfortable and thorough.
        Schedule your appointment today.`}
        media={DentalCheckUpsBannerImage}
      />

      <div className="services-container">
        <div className="services-content">
          <section className="services-landing">

            {/* Why a Checkup and Clean */}
            <div className="services-section">
              <h2>Why a Checkup and Clean is Important</h2>
              <p>
                A professional checkup and clean goes beyond daily brushing and flossing. It helps detect early signs of <b>cavities, gum disease, and oral health issues</b>, removes <b>plaque and tartar buildup</b> that can’t be cleaned at home, freshens breath, and maintains a healthy smile. 
                Our team also provides expert advice on <b>brushing, flossing, and diet</b>.
              </p>
            </div>

            {/* Intro Section */}
            <div className="services-section services-split">
              <ServiceSection video={DentalCheckUpsVideo} />
            </div>

            {/* What to Expect */}
            <div className="services-section">
              <h2>What to Expect During a Checkup and Clean</h2>
              <ul>
                <li><b>1. Comprehensive Examination:</b> Your dentist or hygienist examines teeth, gums, and mouth for early signs of dental issues.</li>
                <li><b>2. Professional Cleaning:</b> Plaque and tartar are carefully removed from teeth and below the gumline.</li>
                <li><b>3. Polishing:</b> Teeth are polished to remove surface stains, leaving a smooth, bright finish.</li>
                <li><b>4. Fluoride Treatment (Optional):</b> Helps strengthen enamel and protect against decay.</li>
                <li><b>5. Oral Health Advice:</b> Guidance on brushing, flossing, diet, and personalised recommendations for maintaining oral health.</li>
              </ul>
            </div>
            <Banner />
            <div className="services-section">
                <h2>DENTAL PROBLEMS DENTAL CHECK UPS AND CLEANING CAN ADDRESS</h2>
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

export default DentalCheckUpsAndCleaning;
