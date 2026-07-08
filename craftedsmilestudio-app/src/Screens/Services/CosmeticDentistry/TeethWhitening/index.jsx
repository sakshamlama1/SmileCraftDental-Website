import Header from "../../../../Components/Header";
import { NavLink } from "react-router-dom";
import Footer from "../../../../Components/Footer";
import GetInTouch from "../../../../Components/GetInTouch";
import PriceListButton from "../../../../Components/PriceListButton";
import Carousel from "../../../../Components/Carousel";
import imageList from "../../../../utils/carouselImages";
import SpecialOffersCarousel from "../../../../Components/SpecialOffersCarousel";
import offersList from "../../../../utils/specialOffers";
import ServiceSection from "../../../../Components/ServiceSection";
import TeethWhiteningVideo from "../../../../assets/videos/TeethWhitening.mp4";
import Hero from "../../../../Components/Hero";
import WhyChooseUs from "../../../../Components/WhyChooseUs";
import Banner from "../../../../Components/Banner";
import FAQComponent from "../../../../Components/FAQComponent";
import TeethWhiteningBannerImage from "../../../../assets/banner-images/teeth-whitening-banner-image.png";

const faqsArray = [
  {
    question: "Is teeth whitening safe?",
    answer: (
      <>
        <p>
          Yes. Professional whitening at <b>Crafted Smiles Studio</b> is <b>safe and monitored</b> to protect your teeth and gums.
        </p>
      </>
    )
  },
  {
    question: "How long do results last?",
    answer: (
      <>
        <p>
          With good oral care, results can last <b>12–24 months</b>, depending on diet and lifestyle. Touch-ups with take-home kits help maintain brightness.
        </p>
      </>
    )
  },
  {
    question: "Can whitening damage my teeth?",
    answer: (
      <>
        <p>
          No, when performed under professional supervision. <b>Philips Zoom Whitening</b> is designed to be safe, with minimal sensitivity for most patients.
        </p>
      </>
    )
  },
  {
    question: "Which is better, in-chair or take-home whitening?",
    answer: (
      <>
        <p>
          In-chair treatment gives <b>immediate results</b>, while take-home kits allow <b>gradual, flexible whitening</b>. Many patients choose a <b>combination</b> for optimal results.
        </p>
      </>
    )
  },
  {
    question: "Can I see examples before treatment?",
    answer: (
      <>
        <p>
          Absolutely! <b>Check our gallery</b> to view real patient results and see the potential for your smile.
        </p>
      </>
    )
  }
];

function TeethWhitening() {
  return (
    <div className="services-screen">
      <Header />
      <Hero
        title={"TEETH WHITENING IN ELERMORE VALE"}
        subheading={`
          Brighten Your Smile Today. Get a confident, radiant smile with professional teeth whitening at Crafted Smiles Studio. 
          Choose fast in-chair treatments or convenient take-home kits—safe, effective, and tailored to you. Book your appointment now and let your smile shine!
        `}
        media={TeethWhiteningBannerImage}
      />
      <div className="services-container">
        <div className="services-content">
          <section className="services-landing">
            <div className="services-intro">
              <div className="services-section">
                <h2>Why Choose Professional Teeth Whitening?</h2>
                <p>
                  Professional teeth whitening is a safe and effective way to:
                </p>
                <ul>
                  <li>Remove <b>stains from coffee, tea, wine, or smoking</b></li>
                  <li>Enhance your <b>natural tooth colour</b></li>
                  <li>Boost <b>confidence for special occasions or everyday life</b></li>
                  <li>Achieve <b>consistent and long-lasting results</b> that over-the-counter products cannot match</li>
                </ul>
                <p>
                  Unlike generic whitening products, professional treatment is <b>monitored by dental experts</b>, protecting enamel and ensuring a healthy, radiant smile.
                </p>
              </div>

              <div className="services-section">
                <h2>Our Teeth Whitening Options</h2>
                <h3>In-Chair Whitening</h3>
                <ul>
                  <li>Quick, convenient treatment performed in our clinic</li>
                  <li>Uses <b>Philips Zoom Whitening</b>, a professional system trusted worldwide for <b>fast, effective results with minimal sensitivity</b></li>
                  <li>Achieve <b>immediate results</b> in about an hour</li>
                  <li>Monitored by our dental team for <b>safety and comfort</b></li>
                </ul>
                <h3>Take-Home Whitening Kit</h3>
                <ul>
                  <li>Custom trays designed for your teeth for <b>gradual whitening at home</b></li>
                  <li>Ideal for patients who prefer a <b>flexible schedule</b></li>
                  <li>Results build over <b>several days to weeks</b>, offering long-lasting brightness</li>
                  <li>Perfect for touch-ups after in-chair treatment</li>
                </ul>
                <p>
                  At <b>Crafted Smiles Studio</b>, we can also <b>combine both in-chair and take-home options</b> for a <b>maximum whitening effect</b> tailored to your lifestyle.
                </p>
              </div>
              <div className="services-section services-split">
                <ServiceSection video={TeethWhiteningVideo} />
              </div>
              <div className="services-section">
                  <h2>Is Teeth Whitening Is Right for You</h2>
                  <p>
                      Teeth whitening is ideal if you want to <b>remove stains</b> from coffee, tea, wine, or smoking, enhance your <b>natural tooth colour</b>, 
                      and boost <b>confidence in your smile</b>. Whether preparing for a special occasion or maintaining a bright smile daily, professional whitening provides <b>predictable, safe, and long-lasting results</b> tailored to your teeth and lifestyle.
                  </p>
              </div>
            </div>
            <Banner />
            <div className="services-section">
                <h2>DENTAL PROBLEMS TEETH WHITENING CAN ADDRESS</h2>
            </div>
            <div className="services-tiles" id="sub-services-tiles">
                <div className="service-tile">
                    <h3>Tooth Staining</h3>
                    <p>Brighten discoloured teeth for a cleaner, whiter, more confident smile.</p>
                    <NavLink to="/help-me-with/tooth-staining" className="tile-link">LEARN MORE →</NavLink>
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

export default TeethWhitening;
