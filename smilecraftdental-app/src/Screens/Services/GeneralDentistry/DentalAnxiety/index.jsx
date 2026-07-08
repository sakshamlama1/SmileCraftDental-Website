import Header from "../../../../Components/Header";
import Footer from "../../../../Components/Footer";
import GetInTouch from "../../../../Components/GetInTouch";
import PriceListButton from "../../../../Components/PriceListButton";
import Carousel from "../../../../Components/Carousel";
import imageList from "../../../../utils/carouselImages";
import SpecialOffersCarousel from "../../../../Components/SpecialOffersCarousel";
import offersList from "../../../../utils/specialOffers";
import ServiceSection from "../../../../Components/ServiceSection";
import DentalAnxietyNervousPatientsVideo from "../../../../assets/videos/DentalAnxietyNervousPatients.mp4"
import Hero from "../../../../Components/Hero";
import WhyChooseUs from "../../../../Components/WhyChooseUs";
import Banner from "../../../../Components/Banner";
import FAQComponent from "../../../../Components/FAQComponent";
import DentalAnxietyBannerImage from "../../../../assets/banner-images/dental-anxiety-banner-image.png";

const faqsArray = [
  {
    question: "What if I feel nervous about needles or drills?",
    answer: (
      <>
        Talk to your dentist about your concerns. They will guide you on <b>how your treatment can be managed safely and comfortably.</b>
      </>
    )
  },
  {
    question: "Can I overcome dental anxiety over time?",
    answer: (
      <>
        Absolutely! With <b>supportive care, gradual treatment, and clear communication</b>, most patients <b>gain confidence and comfort with regular visits.</b>
      </>
    )
  },
  {
    question: "What should I do if I feel anxious before my appointment?",
    answer: (
      <>
        Call our team. We will <b>discuss your concerns and create a personalised plan</b> to ensure your visit is calm and stress-free.
      </>
    )
  },
  {
    question: "Are nervous patients treated differently?",
    answer: (
      <>
        Yes. Our team uses <b>gentle techniques and personalised pacing</b>, ensuring your comfort and reducing anxiety throughout your visit.
      </>
    )
  }
];

function DentalAnxiety() {
    return (
        <div className="services-screen">
            <Header />
            <Hero 
                title={"DENTAL ANXIETY AND NERVOUS PATIENTS IN ELERMORE VALE"}
                subheading={
                    `At Smile Craft Dental, we understand that visiting the dentist can feel stressful or overwhelming for some patients. 
                    If you experience dental anxiety or nervousness, our compassionate team is here to support you. We provide a calm, safe 
                    environment and tailored strategies to make your dental visits as comfortable and stress-free as possible.`}
                media={DentalAnxietyBannerImage}
            />
            <div className="services-container">
                <div className="services-content">
                    
                    <section className="services-landing">
                        <div className="services-intro">
            
                            <div className="services-section">
                                <h2>Why Dental Anxiety Happens</h2>
                                <p>
                                    Feeling nervous about dental visits is common. Anxiety may stem from:
                                </p>
                                <ul>
                                    <li>Past dental experiences or discomfort</li>
                                    <li>Fear of needles, drills, or pain</li>
                                    <li>Guilt about oral health or missed appointments</li>
                                    <li>Generalised anxiety or fear of medical procedures</li>
                                </ul>
                                <p>
                                    At <b>Smile Craft Dental</b>, we take these concerns seriously and work with you to <b>create a personalised,
                                    positive dental experience.</b>
                                </p>
                            </div>

                            <div className="services-section services-split">
                                <ServiceSection video={DentalAnxietyNervousPatientsVideo} /> 
                            </div>

                            <div className="services-section">
                                <h2>How We Help Nervous Patients</h2>
                                <p>Our approach focuses on <b>gentle, patient-centred care:</b></p>
                                <ul>
                                    <li><b>Personalised Support:</b> We take time to explain each step in simple, reassuring terms.</li>
                                    <li><b>Gradual Approach:</b> Treatments can be paced to suit your comfort level, starting with simple exams and cleans.</li>
                                    <li><b>Open Communication:</b> Talk to your dentist about your needs, and they will guide you on how your treatment can be managed comfortably.</li>
                                    <li><b>Friendly Environment:</b> Calm, quiet rooms designed to reduce stress and anxiety.</li>   
                                    <li><b>Ongoing Guidance:</b> We encourage questions and check in with you throughout every procedure.</li>
                                </ul>
                                <p>
                                    By guiding you through <b>each stage of your dental journey</b>, we help transform dental visits into a <b>positive,
                                    confidence-building experience.</b>
                                </p>
                            </div>
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

export default DentalAnxiety;
