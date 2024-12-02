export const routeGroups = [
  { path: "/", component: "Home", ariaLabel: "Home Page" },
  { path: "/home", component: "Home", ariaLabel: "Home Page" },
  {
    path: "/about",
    children: [
      {
        path: "our-mission",
        component: "OurMission",
        ariaLabel: "Our Mission",
      },
      {
        path: "how-it-works",
        component: "HowItWorks",
        ariaLabel: "How It Works",
      },
    ],
  },
  {
    path: "/getting-started",
    children: [
      {
        path: "understanding-court-forms",
        component: "UnderstandingCF",
        ariaLabel: "Understanding Court Forms",
      },
      {
        path: "eligibility-requirements",
        component: "EligibilityRequirements",
        ariaLabel: "Eligibility Requirements",
      },
      {
        path: "required-documents",
        component: "RequiredDocuments",
        ariaLabel: "Required Documents",
      },
    ],
  },
  {
    path: "/expungement-forms",
    children: [
      {
        path: "what-is-expungement",
        component: "WhatIsExpungement",
        ariaLabel: "What is Expungement",
      },
      {
        path: "why-consider-expungement",
        component: "WhyConsiderExpungenment",
        ariaLabel: "Why Consider Expungement",
      },
      {
        path: "eligibility-criteria",
        component: "ExpungementEligibilityCriteria",
        ariaLabel: "Eligibility Criteria",
      },
      {
        path: "expungement-process",
        component: "ExpungementProcess",
        ariaLabel: "Expungement Process",
      },
      {
        path: "how-to-get-your-records",
        component: "HowToGetYourRecords",
        ariaLabel: "How to Get Your Records",
      },
      {
        path: "post-expungement-process",
        component: "PostExpungementInfo",
        ariaLabel: "Post Expungement Process",
      },
      {
        path: "form",
        component: "ExpungementForm",
        parameters: ["mode"],
        ariaLabel: "Expungement Form",
      },
    ],
  },
  {
    path: "/civil-court-forms",
    children: [
      {
        path: "overview",
        component: "CivilCourtOverview",
        ariaLabel: "Civil Court Overview",
      },
      {
        path: "common-forms",
        component: "CivilCourtCommonForms",
        ariaLabel: "Civil Court Common Forms",
      },
      {
        path: "required-documents",
        component: "CivilCourtRequiredDocuments",
        ariaLabel: "Civil Court Required Documents",
      },
    ],
  },
  {
    path: "/family-court-forms",
    children: [
      {
        path: "overview",
        component: "FamilyCourtOverview",
        ariaLabel: "Family Court Overview",
      },
      {
        path: "common-forms",
        component: "FamilyCourtCommonForms",
        ariaLabel: "Family Court Common Forms",
      },
      {
        path: "required-documents",
        component: "FamilyCourtRequiredDocuments",
        ariaLabel: "Family Court Required Documents",
      },
    ],
  },
  {
    path: "/criminal-court-forms",
    children: [
      {
        path: "overview",
        component: "CriminalCourtOverview",
        ariaLabel: "Criminal Court Overview",
      },
      {
        path: "common-forms",
        component: "CriminalCourtCommonForms",
        ariaLabel: "Criminal Court Common Forms",
      },
      {
        path: "required-documents",
        component: "CriminalCourtRequiredDocuments",
        ariaLabel: "Criminal Court Required Documents",
      },
    ],
  },
  {
    path: "/how-to-fill",
    children: [
      {
        path: "step-by-step-guides",
        component: "StepByStepGuides",
        ariaLabel: "Step by Step Guides",
      },
      {
        path: "frequently-asked-questions",
        component: "FrequentlyAskedQuestions",
        ariaLabel: "Frequently Asked Questions",
      },
    ],
  },
  {
    path: "/resources",
    children: [
      {
        path: "legal-aid-services",
        component: "LegalAidServices",
        ariaLabel: "Legal Aid Services",
      },
      {
        path: "court-locations-and-contact",
        component: "CourtLocationsAndContact",
        ariaLabel: "Court Locations and Contact",
      },
      {
        path: "glossary-of-legal-terms",
        component: "GlossaryOfLegalTerms",
        ariaLabel: "Glossary of Legal Terms",
      },
    ],
  },
  {
    path: "/user-support",
    children: [
      {
        path: "help-center",
        component: "HelpCenter",
        ariaLabel: "Help Center",
      },
      { path: "contact-us", component: "ContactUs", ariaLabel: "Contact Us" },
    ],
  },
  {
    path: "/terms-and-policies",
    children: [
      {
        path: "privacy-policy",
        component: "PrivacyPolicy",
        ariaLabel: "Privacy Policy",
      },
      {
        path: "terms-of-use",
        component: "TermsOfUse",
        ariaLabel: "Terms of Use",
      },
    ],
  },
];
