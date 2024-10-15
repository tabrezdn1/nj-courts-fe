import "./App.css";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import { sidebarItems } from "./data/configs";
import {
  Home,
  OurMission,
  HowItWorks,
  ExpungementForm,
  UnderstandingCF,
  EligibilityRequirements,
  RequiredDocuments,
  WhatIsExpungement,
  WhyConsiderExpungenment,
  ExpungementEligibilityCriteria,
  ExpungementProcess,
  HowToGetYourRecords,
  PostExpungementInfo,
  CivilCourtCommonForms,
  CivilCourtOverview,
  CivilCourtRequiredDocuments,
  FamilyCourtCommonForms,
  FamilyCourtOverview,
  FamilyCourtRequiredDocuments,
  CriminalCourtCommonForms,
  CriminalCourtOverview,
  CriminalCourtRequiredDocuments,
  StepByStepGuides,
  FrequentlyAskedQuestions,
  LegalAidServices,
  CourtLocationsAndContact,
  GlossaryOfLegalTerms,
  HelpCenter,
  ContactUs,
  PrivacyPolicy,
  TermsOfUse,
} from "./pages";
function App() {
  return (
    <>
      <div className="w-full flex h-svh max-h-svh">
        <Sidebar items={sidebarItems} />
        <div className="h-full flex-1">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/about/our-mission" element={<OurMission />} />
            <Route path="/about/how-it-works" element={<HowItWorks />} />

            <Route
              path="/getting-started/understanding-court-forms"
              element={<UnderstandingCF />}
            />
            <Route
              path="/getting-started/eligibility-requirements"
              element={<EligibilityRequirements />}
            />
            <Route
              path="/getting-started/required-documents"
              element={<RequiredDocuments />}
            />

            <Route
              path="/expungement-forms/what-is-expungement"
              element={<WhatIsExpungement />}
            />
            <Route
              path="/expungement-forms/Why-consider-expungement"
              element={<WhyConsiderExpungenment />}
            />
            <Route
              path="/expungement-forms/eligibility-criteria"
              element={<ExpungementEligibilityCriteria />}
            />
            <Route
              path="/expungement-forms/expungement-process"
              element={<ExpungementProcess />}
            />
            <Route
              path="/expungement-forms/how-to-get-your-records"
              element={<HowToGetYourRecords />}
            />
            <Route
              path="/expungement-forms/post-expungement-process"
              element={<PostExpungementInfo />}
            />

            <Route
              path="/expungement-forms/form"
              element={<ExpungementForm />}
            />

            <Route
              path="/civil-court-forms/overview"
              element={<CivilCourtOverview />}
            />
            <Route
              path="/civil-court-forms/common-forms"
              element={<CivilCourtCommonForms />}
            />
            <Route
              path="/civil-court-forms/required-documents"
              element={<CivilCourtRequiredDocuments />}
            />

            <Route
              path="/family-court-forms/overview"
              element={<FamilyCourtOverview />}
            />
            <Route
              path="/family-court-forms/common-forms"
              element={<FamilyCourtCommonForms />}
            />
            <Route
              path="/family-court-forms/required-documents"
              element={<FamilyCourtRequiredDocuments />}
            />

            <Route
              path="/criminal-court-forms/overview"
              element={<CriminalCourtOverview />}
            />
            <Route
              path="/criminal-court-forms/common-forms"
              element={<CriminalCourtCommonForms />}
            />
            <Route
              path="/criminal-court-forms/required-documents"
              element={<CriminalCourtRequiredDocuments />}
            />

            <Route
              path="/how-to-fill/step-by-step-guides"
              element={<StepByStepGuides />}
            />
            <Route
              path="/how-to-fill/frequently-asked-questions"
              element={<FrequentlyAskedQuestions />}
            />

            <Route
              path="/resources/legal-aid-services"
              element={<LegalAidServices />}
            />
            <Route
              path="/resources/court-locations-and-contact"
              element={<CourtLocationsAndContact />}
            />
            <Route
              path="/resources/glossary-of-legal-terms"
              element={<GlossaryOfLegalTerms />}
            />

            <Route path="/user-support/help-center" element={<HelpCenter />} />
            <Route path="/user-support/contact-us" element={<ContactUs />} />

            <Route
              path="/terms-and-policies/privacy-policy"
              element={<PrivacyPolicy />}
            />
            <Route
              path="/terms-and-policies/terms-of-use"
              element={<TermsOfUse />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
