export const routeGroups = [
  { path: "/", component: "Home" },
  { path: "/home", component: "Home" },
  {
    path: "/about",
    children: [
      { path: "our-mission", component: "OurMission" },
      { path: "how-it-works", component: "HowItWorks" },
    ],
  },
  {
    path: "/getting-started",
    children: [
      { path: "understanding-court-forms", component: "UnderstandingCF" },
      { path: "eligibility-requirements", component: "EligibilityRequirements" },
      { path: "required-documents", component: "RequiredDocuments" },
    ],
  },
  {
    path: "/expungement-forms",
    children: [
      { path: "what-is-expungement", component: "WhatIsExpungement" },
      { path: "Why-consider-expungement", component: "WhyConsiderExpungenment" },
      { path: "eligibility-criteria", component: "ExpungementEligibilityCriteria" },
      { path: "expungement-process", component: "ExpungementProcess" },
      { path: "how-to-get-your-records", component: "HowToGetYourRecords" },
      { path: "post-expungement-process", component: "PostExpungementInfo" },
      { path: "form", component: "ExpungementForm" },
    ],
  },
  {
    path: "/civil-court-forms",
    children: [
      { path: "overview", component: "CivilCourtOverview" },
      { path: "common-forms", component: "CivilCourtCommonForms" },
      { path: "required-documents", component: "CivilCourtRequiredDocuments" },
    ],
  },
  {
    path: "/family-court-forms",
    children: [
      { path: "overview", component: "FamilyCourtOverview" },
      { path: "common-forms", component: "FamilyCourtCommonForms" },
      { path: "required-documents", component: "FamilyCourtRequiredDocuments" },
    ],
  },
  {
    path: "/criminal-court-forms",
    children: [
      { path: "overview", component: "CriminalCourtOverview" },
      { path: "common-forms", component: "CriminalCourtCommonForms" },
      { path: "required-documents", component: "CriminalCourtRequiredDocuments" },
    ],
  },
  {
    path: "/how-to-fill",
    children: [
      { path: "step-by-step-guides", component: "StepByStepGuides" },
      { path: "frequently-asked-questions", component: "FrequentlyAskedQuestions" },
    ],
  },
  {
    path: "/resources",
    children: [
      { path: "legal-aid-services", component: "LegalAidServices" },
      { path: "court-locations-and-contact", component: "CourtLocationsAndContact" },
      { path: "glossary-of-legal-terms", component: "GlossaryOfLegalTerms" },
    ],
  },
  {
    path: "/user-support",
    children: [
      { path: "help-center", component: "HelpCenter" },
      { path: "contact-us", component: "ContactUs" },
    ],
  },
  {
    path: "/terms-and-policies",
    children: [
      { path: "privacy-policy", component: "PrivacyPolicy" },
      { path: "terms-of-use", component: "TermsOfUse" },
    ],
  },
];
