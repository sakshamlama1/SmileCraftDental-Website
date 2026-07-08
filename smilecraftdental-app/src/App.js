import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';

// Import all screens
import { 
  About, FAQ, LandingPage, PrivacyPolicy, TermsAndConditions, PriceList,
  
  // Payment Options
  Payments, PaymentPlans, PaymentOptions, Afterpay, ChildrenDBSchedule, Healthfunds, Humm, SmileRight, VeteranAffairs,

  // Services - Cosmetic Dentistry
  ChildrenDentistry, CosmeticDentistry, CompositeVeneersBonding, DentalVeneers, TeethWhitening, DigitalSmileDesign,

  // Services - General Dentistry
  Services, GeneralDentistry, DentalAnxiety, DentalBridge, DentalCheckUpsAndCleaning, DentalCrown, 
  DentalFillings, Dentures, DentalEmergency, CustomMouthGuards, GumDiseaseTreatment, 
  RootCanalTreatment, BruxismTreatment, WisdomTeethRemoval,
  RestorativeDentistry,
  SpecialOffers,
  Blogs,
  HelpMeWith,
  Bruxism,
  ChippedTooth,
  CrookedTeeth,
  DentalAbscess,
  FillingsHelp,
  MissingCrownsAndFillings,
  MissingTeeth,
  Sensitivity,
  SevereToothAche,
  WisdomTeethPain,
  ToothExtractions,
  Aligners,
  FullMouthRehabilitation
} from './Screens';
import ToothStaining from './Screens/HelpMeWith/ToothStaining';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* General Pages */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

          {/* Payments - Payment Options */}
          <Route path="/payments" element={<Payments />} />
          <Route path="/payment-options" element={<PaymentOptions />} />
          <Route path="/payment-options/healthfunds" element={<Healthfunds />} />
          <Route path="/payment-options/child-dental-benefit" element={<ChildrenDBSchedule />} />
          <Route path="/payment-options/veterans-affairs" element={<VeteranAffairs />} />

          {/* Payments - Payment Plans */}
          <Route path="/payment-plans" element={<PaymentPlans />} />
          <Route path="/payment-plans/afterpay" element={<Afterpay />} />
          <Route path="/payment-plans/humm" element={<Humm />} />
          <Route path="/payment-plans/smile-right" element={<SmileRight />} />

          <Route path="/get-price-list" element={<PriceList />} />
          <Route path="/special-offers" element={<SpecialOffers />} />
          <Route path="/blogs" element={<Blogs />} />

          {/* Services - Cosmetic Dentistry */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/cosmetic" element={<CosmeticDentistry />} />
          <Route path="/services/cosmetic/composite-veneers-bonding" element={<CompositeVeneersBonding />} />
          <Route path="/services/cosmetic/dental-veneers" element={<DentalVeneers />} />
          <Route path="/services/cosmetic/digital-smile-design" element={<DigitalSmileDesign />} />
          <Route path="/services/cosmetic/aligners" element={<Aligners />} />
          <Route path="/services/cosmetic/teeth-whitening" element={<TeethWhitening />} />

          {/* Services - General Dentistry */}
          <Route path="/services/general" element={<GeneralDentistry />} />
          <Route path="/services/general/children-dentistry" element={<ChildrenDentistry />} />
          <Route path="/services/general/dental-anxiety-nervous-patients" element={<DentalAnxiety />} />
          <Route path="/services/general/dental-bridge" element={<DentalBridge />} />
          <Route path="/services/general/dental-check-ups-cleaning" element={<DentalCheckUpsAndCleaning />} />
          <Route path="/services/general/dental-fillings" element={<DentalFillings />} />
          <Route path="/services/general/dental-emergency" element={<DentalEmergency />} />
          <Route path="/services/general/tooth-extractions" element={<ToothExtractions />} />
          <Route path="/services/general/gum-disease-treatment" element={<GumDiseaseTreatment />} />
          <Route path="/services/general/custom-mouth-guards" element={<CustomMouthGuards />} />
          <Route path="/services/general/root-canal-treatment" element={<RootCanalTreatment />} />
          <Route path="/services/general/bruxism-treatment" element={<BruxismTreatment />} />
          <Route path="/services/general/wisdom-teeth-removal" element={<WisdomTeethRemoval />} />

          <Route path="/services/restorative" element={<RestorativeDentistry />} />
          <Route path="/services/restorative/dentures" element={<Dentures />} />
          <Route path="/services/restorative/dental-bridge" element={<DentalBridge />} />
          <Route path="/services/restorative/dental-crown" element={<DentalCrown />} />
          <Route path="/services/restorative/full-mouth-rehabilitation" element={<FullMouthRehabilitation />} />

          <Route path="/help-me-with" element={<HelpMeWith />} />
          <Route path="/help-me-with/bruxism" element={<Bruxism />} />
          <Route path="/help-me-with/chipped-tooth" element={<ChippedTooth />} />
          <Route path="/help-me-with/crooked-teeth" element={<CrookedTeeth />} />
          <Route path="/help-me-with/dental-abscess" element={<DentalAbscess />} />
          <Route path="/help-me-with/dental-fillings" element={<FillingsHelp />} />
          <Route path="/help-me-with/missing-crowns-fillings" element={<MissingCrownsAndFillings />} />
          <Route path="/help-me-with/missing-teeth" element={<MissingTeeth />} />
          <Route path="/help-me-with/sensitivity" element={<Sensitivity />} />
          <Route path="/help-me-with/tooth-staining" element={<ToothStaining />} />
          <Route path="/help-me-with/severe-tooth-ache" element={<SevereToothAche />} />
          <Route path="/help-me-with/wisdom-teeth-pain" element={<WisdomTeethPain />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        newestOnTop
        draggable
        theme="colored"
      />
    </>
  );
}

export default App;
