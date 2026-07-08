import Header from "../../../../Components/Header";
import Footer from "../../../../Components/Footer";
import GetInTouch from "../../../../Components/GetInTouch";
import PriceListButton from "../../../../Components/PriceListButton";
import Carousel from "../../../../Components/Carousel";
import imageList from "../../../../utils/carouselImages";
import SpecialOffersCarousel from "../../../../Components/SpecialOffersCarousel";
import offersList from "../../../../utils/specialOffers";
import Hero from "../../../../Components/Hero";
import WhyChooseUs from "../../../../Components/WhyChooseUs";
import Banner from "../../../../Components/Banner";
import FAQComponent from "../../../../Components/FAQComponent";
import GumDiseaseTreatmentBannerImage from "../../../../assets/banner-images/gum-disease-treatment-banner-image.png";

const faqsArray = [
    {
        question: "What causes bleeding gums?",
        answer: (
            <>
                Bleeding gums are often an early sign of <b>gum inflammation</b> caused by <b>plaque buildup</b> and should be professionally assessed.
            </>
        )
    },
    {
        question: "Can gum disease be reversed?",
        answer: (
            <>
                Early-stage gum disease can often be <b>managed and stabilised</b> with professional care and <b>good oral hygiene</b>.
            </>
        )
    },
    {
        question: "Does gum disease cause bad breath?",
        answer: (
            <>
                Yes. <b>Bacteria beneath the gums</b> can cause persistent bad breath that won’t improve with brushing alone.
            </>
        )
    },
    {
        question: "Can gum disease cause tooth loss?",
        answer: (
            <>
                Yes. <b>Advanced periodontal disease</b> can lead to <b>bone loss, loose teeth, and missing teeth</b> if untreated.
            </>
        )
    },
    {
        question: "Will I need a specialist for gum disease?",
        answer: (
            <>
                Some advanced cases may benefit from <b>specialist periodontal care</b>, and we will guide you if referral is in your best interest.
            </>
        )
    }
];

function GumDiseaseTreatment() {
    return (
        <div className="services-screen">
            <Header />
            <Hero
                title={"GUM DISEASE TREATMENT IN ELERMORE VALE"}
                subheading={`
                    Healthy gums are the foundation of a healthy smile. At Crafted Smiles Studio, we provide comprehensive gum disease treatment to help manage symptoms such as bleeding gums, gum recession, bad breath, and bone loss, while protecting your teeth long term.
                    Gum disease is common and often develops quietly, but early diagnosis and professional care can prevent serious dental problems, including tooth mobility and missing teeth.
                `}
                media={GumDiseaseTreatmentBannerImage}
            />
            <div className="services-container">
                <div className="services-content">
                    <section className="services-landing">
                        <div className="services-intro">
                            <div className="services-section">
                                <h2>What Is Gum Disease?</h2>
                                <p>
                                    Gum disease, also known as <b>periodontal disease</b>, is an infection of the gums caused by <b>plaque and bacteria buildup</b> around the teeth. If untreated, it can progress from mild inflammation to advanced damage affecting the <b>bone and supporting structures of your teeth.</b>
                                </p>
                            </div>

                            <div className="services-section">
                                <h2>Signs & Symptoms of Gum Disease</h2>
                                <p>Many patients search for treatment after noticing:</p>
                                <ul>
                                    <li><b>Bleeding gums</b>, especially during brushing or flossing</li>
                                    <li><b>Swollen, red, or tender gums</b></li>
                                    <li><b>Persistent bad breath (halitosis)</b></li>
                                    <li><b>Gum recession</b>, making teeth appear longer</li>
                                    <li><b>Loose or shifting teeth</b></li>
                                    <li><b>Sensitivity</b> near the gum line</li>
                                    <li><b>Bone loss</b>, visible on dental X-rays</li>
                                    <li><b>Missing teeth</b> due to advanced periodontal disease</li>
                                </ul>
                                <p>Early treatment can significantly improve gum health and prevent permanent damage.</p>
                            </div>

                            <div className="services-section">
                                <h2>Why Gum Disease Treatment Is Important</h2>
                                <p>
                                    Untreated gum disease can lead to:
                                </p>
                                <ul>
                                    <li><b>Progressive gum recession:</b></li>
                                    <li><b>Loss of bone supporting the teeth</b></li>
                                    <li><b>Tooth mobility and tooth loss</b></li>
                                    <li><b>Difficulty chewing</b></li>
                                    <li><b>Changes in bite and smile appearance</b></li>
                                </ul>
                                <p>
                                    As periodontal disease progresses, bacteria damage the <b>bone and ligaments</b> holding teeth in place. Without treatment, this can result
                                    in <b>loose teeth and eventual tooth loss</b>. Early intervention helps protect your natural teeth and reduce the need for complex restorative treatment later.
                                </p>
                                <p>At <b>Crafted Smiles Studio</b>, our goal is to <b>stabilise gum health, preserve natural teeth</b>, and support your long-term oral wellbeing.</p>
                            </div>

                            <div className="services-section">
                                <h2>What to Expect During a Gum Disease Treatment</h2>
                                <p>We provide <b>personalised periodontal care</b> based on the severity of your condition:</p>
                                <p><b>1. Professional Cleaning & Deep Cleaning:</b> For early to moderate gum disease, deep cleaning (also known as <b>scale and root planing</b>) removes plaque and bacteria below the gum line, helping gums heal and reattach to the teeth.</p>
                                <p><b>2. Monitoring & Maintenance:</b> Regular periodontal maintenance appointments help <b>control bacteria</b>, reduce inflammation, and prevent recurrence.</p>
                                <p><b>3. Advanced Care & Referral:</b> In more advanced cases involving <b>significant bone loss or complex periodontal issues</b>, referral to a <b>periodontal specialist</b> may be recommended to ensure the <b>best outcome for patient welfare.</b></p>
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

export default GumDiseaseTreatment;
