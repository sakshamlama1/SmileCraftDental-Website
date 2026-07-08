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
import ChildrenDentistryVideo from "../../../../assets/videos/ChildrenDentistry.mp4";
import Hero from "../../../../Components/Hero";
import Banner from "../../../../Components/Banner";
import WhyChooseUs from "../../../../Components/WhyChooseUs";
import ChildrenDentistryBannerImage from "../../../../assets/banner-images/children-dentistry-banner-image.png";

const faqsArray = [
  {
    question: "What age should my child first visit the dentist?",
    answer: (
      <>
        Children should have their first dental visit when their <b>first tooth appears</b> or by their <b>first birthday</b>. Early visits help your child feel comfortable at the dentist and allow <b>early monitoring of oral health</b>.
      </>
    )
  },
  {
    question: "How often should children have dental check-ups?",
    answer: (
      <>
        Most children should visit the dentist <b>every six months</b>. Regular check-ups help prevent <b>tooth decay</b> and support <b>healthy oral development</b>.
      </>
    )
  },
  {
    question: "Do you offer dental care for the whole family?",
    answer: (
      <>
        Yes. Our Tuncurry dental clinic provides care for <b>children, teenagers, adults, and seniors</b>, allowing <b>families to receive treatment in one convenient location</b>.
      </>
    )
  },
  {
    question: "How do you help nervous or anxious children?",
    answer: (
      <>
        We use a <b>gentle, patient approach</b> with clear, <b>child-friendly explanations</b> to help children feel <b>calm and comfortable</b> during their dental visits.
      </>
    )
  },
  {
    question: "What happens during a children’s dental appointment?",
    answer: (
      <>
        A children’s appointment typically includes a <b>gentle dental check-up, teeth cleaning,</b> and <b>age-appropriate oral health advice</b>.
      </>
    )
  },
  {
    question: "Is your dental clinic suitable for young children?",
    answer: (
      <>
        Yes. Our clinic is <b>family-friendly</b>, and our dental team has experience caring for <b>young children and first-time dental visitors</b>.
      </>
    )
  },
  {
    question: "How can I book a family dentist appointment in Tuncurry?",
    answer: (
      <>
        You can book an appointment by contacting our Tuncurry dental clinic directly. <b>New patients are welcome</b>, and <b>flexible appointment times</b> are available.
      </>
    )
  }
];



function ChildrenDentalServices() {
  return (
    <div className="services-screen">
      <Header />

      <Hero
        title="GENTLE CHILDREN'S DENTISTRY IN Tuncurry"
        subheading=
        {`Positive dental experiences start here
            At Smile Craft Dental, we specialise in gentle, child-focused dental care that helps little smiles grow healthy and strong. Our friendly team creates a calm, welcoming environment where children feel safe, relaxed, and confident at every visit.
            From first check-ups to preventative care and ongoing treatment, we help children build healthy habits and happy attitudes toward the dentist—setting them up for a lifetime of great oral health.
            Start Your Child’s Smile Journey
        `}
        media={ChildrenDentistryBannerImage}
      />

      <div className="services-container">
        <div className="services-content">
          <section className="services-landing">

            {/* First Visit Guidance */}
            <div className="services-section">
              <h2>Gentle Dental Care for Kids, Teens & Parents</h2>
              <p>
                At <b>Smile Craft Dental</b>, we provide <b>gentle children’s dentistry and family dental care</b> in a calm, welcoming environment. 
                We understand that dental visits can feel intimidating for kids, so our team takes a patient, friendly approach—explaining every step in 
                simple terms to help children feel safe, relaxed, and confident.

              </p>
              <p>
                Our mission is to create positive dental experiences that support <b>healthy smiles for life.</b>
              </p>
              <p>
                At <b>Smile Craft Dental</b>, we provide complete <b>family dentistry services</b> for children, teens, and adults in a calm, friendly environment. 
                Our treatments include children’s dental check-ups and gentle cleans, routine dental exams, preventive care and oral health education, 
                fluoride treatments and fissure sealants, early cavity detection and tooth-coloured fillings, gum care and early gum disease treatment, 
                emergency dental care, and ongoing smile and development monitoring. Our focus is on <b>gentle, preventive dentistry</b> to help every member 
                of the family maintain a healthy, confident smile at every stage of life.
              </p>
            </div>

            <div className="services-section">
              <h2>Supporting Lifelong Oral Health</h2>
              <p>
                Family dentistry is about more than treating teeth—it’s about <b>education and prevention.</b> 
                At <b>Smile Craft Dental</b>, we work closely with parents and children to encourage healthy habits at home, 
                including brushing techniques, diet advice, and regular dental visits.

              </p>
              <p>
                By starting early, we help children build <b>strong foundations for healthy smiles</b> that last well into adulthood.
              </p>
            </div>

            {/* Intro Section */}
            <div className="services-section services-split">
                <ServiceSection video={ChildrenDentistryVideo} />
            </div>

            <div className="services-section">
                <h2>Medicare Child Dental Benefits Schedule (CDBS)</h2>
                <p>
                    Children between the ages of <b>2-17</b> may receive general dental services through the <b>CDBS</b>. The total benefit available is <b>$1,095 over a two-year period</b>, and at Smile Craft Dental, we can <b>directly bill eligible treatments to Medicare</b>.
                </p>
            </div>

            <div className="services-section">
                <h2>CDBS Eligibility</h2>
                <p>
                    Eligibility applies to children aged <b>2-17</b> whose families receive government assistance, such as the <b>Family Tax Benefit Part A</b>. Qualified children can access necessary dental care <b>without any out-of-pocket expenses</b>.
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

export default ChildrenDentalServices;
