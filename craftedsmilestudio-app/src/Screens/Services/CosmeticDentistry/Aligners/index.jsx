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
import AlignersVideo from "../../../../assets/videos/Aligners.mp4"; // add a video if available
import Hero from "../../../../Components/Hero";
import WhyChooseUs from "../../../../Components/WhyChooseUs";
import Banner from "../../../../Components/Banner";
import FAQComponent from "../../../../Components/FAQComponent";
import AlignersBannerImage from "../../../../assets/banner-images/aligners-banner-image.png";

const faqsArray = [
    {
        question: "How long does aligners treatment take?",
        answer: (
            <>
                Treatment time varies, but many cases are completed within <b>6–18 months</b>, depending on the complexity of your case.
            </>
        )
    },
    {
        question: "Are aligners painful?",
        answer: (
            <>
                Most patients experience <b>mild pressure</b> when switching aligners, which settles quickly as teeth adjust.
            </>
        )
    },
    {
        question: "Do I have to wear aligners all the time?",
        answer: (
            <>
                Aligners should be worn as instructed, typically <b>20–22 hours per day</b>, for effective results.
            </>
        )
    },
    {
        question: "Can I eat and drink with aligners?",
        answer: (
            <>
                Aligners are removable for eating and drinking, making it easy to maintain oral hygiene and enjoy meals without restrictions.
            </>
        )
    },
    {
        question: "Will my teeth move back after aligners?",
        answer: (
            <>
                Wearing aligners as advised helps <b>maintain your results long-term and prevent relapse.</b>
            </>
        )
    }
];


function Aligners() {
  return (
    <div className="services-screen">
      <Header />
      <Hero 
        title={"Aligners IN ELERMORE VALE"}
        subheading={`At Crafted Smiles Studio, we offer aligners treatment—discreet, comfortable, and effective teeth straightening. Aligners, a modern alternative to traditional braces, can correct crooked teeth, gaps, crowding, and bite concerns. If you are searching for aligners near me, invisible braces, or teeth straightening in Elermore Vale, our experienced team is here to guide you through your smile transformation.`}
        media={AlignersBannerImage}
      />
      <div className="services-container">
        <div className="services-content">
          <section className="services-landing">
            <div className="services-intro">
              <div className="services-section">
                <h2>What Are Aligners?</h2>
                <p>
                  Aligners uses a series of <b>custom-made, removable trays</b> that gently move your teeth into the desired position over time. Each tray is worn for a set period before progressing to the next, gradually improving alignment.
                </p>
                <p>Aligners are designed to be:</p>
                <ul>
                  <li><b>Virtually invisible</b></li>
                  <li><b>Comfortable and smooth</b></li>
                  <li><b>Removable for eating and cleaning</b></li>
                  <li><b>Customised to your smile</b></li>
                </ul>
              </div>

              <div className="services-section">
                <h2>What Can Aligners Treat?</h2>
                <p>
                  Aligners can help correct:
                </p>
                <ul>
                  <li>Crooked or misaligned teeth</li>
                  <li>Gaps between teeth</li>
                  <li>Crowded teeth</li>
                  <li>Mild to moderate bite issues</li>
                  <li>Relapse after previous orthodontic treatment</li>
                </ul>
                <p>Your dentist will assess whether Aligners are suitable for your specific needs.</p>
              </div>

              <div className="services-section">
                <h2>Benefits of Aligners Treatment</h2>
                <p>Patients choose aligners because it offers:</p>
                <ul>
                  <li><b>Discreet teeth straightening</b> with minimal visibility</li>
                  <li><b>Improved comfort</b> compared to traditional braces</li>
                  <li><b>Removable convenience</b> for eating and oral hygiene</li>
                  <li><b>No food restrictions</b></li>
                  <li><b>Predictable results</b> using digital treatment planning</li>
                  <li><b>Enhanced confidence</b> during treatment</li>
                </ul>
                <p>Aligners fit seamlessly into busy lifestyles while delivering effective results.</p>
              </div>

              <div className="services-section services-split">
                <ServiceSection video={AlignersVideo} />
              </div>

              <div className="services-section">
                <h2>What to Expect During an Aligners Treatment</h2>
                <p>At <b>Crafted Smiles Studio</b>, your aligners journey is carefully planned:</p>
                <p><b>1. Consultation & Assessment:</b> Discuss goals and suitability</p>
                <p><b>2. Digital Scans & Planning:</b> 3D scans create a customised treatment plan</p>
                <p><b>3. Aligners Fabrication:</b> Your custom aligner trays are created</p>
                <p><b>4. Wearing Aligners:</b> Each set is worn as instructed to gradually move teeth</p>
                <p><b>5. Progress Reviews:</b> Regular check-ups monitor movement</p>
                <p><b>6. Retention Phase:</b> Retainers help maintain your new smile</p>
                <p>We guide you through every stage to ensure <b>comfortable, confident progress.</b></p>
              </div>
              <div className="services-section">
                <h2>Are Aligners Right for You?</h2>
                <p>
                  Aligners may be ideal if you want a <b>discreet alternative to braces</b>. During your consultation, we will discuss all suitable options and recommend the most appropriate treatment based on your dental needs.
                </p>
              </div>
              <div className="services-section">
                  <h2>Considering Other Smile Enhancement Options?</h2>
                  <p>
                      Every smile is unique, and the best treatment depends on your goals, tooth condition, and long-term oral health. 
                      At <b>Crafted Smiles Studio</b>, we offer a range of cosmetic and restorative solutions, including:
                  </p>
                  <ul>
                      <li><b>Dental Veneers</b> – Ideal for improving tooth shape, colour, minor gaps, and overall smile aesthetics</li>
                      <li><b>Dental Crowns</b> – Recommended for teeth that need extra strength and protection after damage or decay</li>
                      <li><b>Aligners</b> – A discreet option for straightening crooked or misaligned teeth</li>
                  </ul>
                  <p>
                      During your consultation, your dentist will explain how <b>veneers, crowns, or aligners</b> may suit your needs and help you choose the option that delivers the best functional and cosmetic outcome.
                  </p>
              </div>
            </div>
            <Banner />
            <div className="services-section">
                <h2>DENTAL PROBLEMS ALIGNERS CAN ADDRESS</h2>
            </div>
            <div className="services-tiles" id="sub-services-tiles">
                <div className="service-tile">
                    <h3>Crooked Teeth</h3>
                    <p>Straighten misaligned teeth with modern, comfortable orthodontic solutions.</p>
                    <NavLink to="/help-me-with/crooked-teeth" className="tile-link">LEARN MORE →</NavLink>
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

export default Aligners;
