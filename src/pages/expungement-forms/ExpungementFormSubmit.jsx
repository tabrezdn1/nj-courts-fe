import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { ArrowDownOnSquareStackIcon } from "@heroicons/react/24/outline";

import { post } from "../../services/api-call.service";
import { tabItems } from "../../data/configs";
const expungementFromEndpoint =
  import.meta.env.VITE_BE_EXPUNGEMENT_SERVICE ?? "/expungementform/print";
const ExpungementFormSubmit = ({ formData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(false);
  const [errorDesc, setErrorDesc] = useState(false);
  const [fileBuffer, setFileBuffer] = useState(null);

  const fields = {
    "expungement_form-personal-information": [
      "personal_information_first_name",
      "personal_information_last_name",
      "personal_information_dob",
      "personal_information_street_address",
      "personal_information_city",
      "personal_information_state",
      "personal_information_zipcode",
      "personal_information_phone",
      "personal_information_ssn",
    ],
    "expungement_form-arrest-information": [
      "arrest_information_date",
      "arrest_information_jurisdiction",
      "arrest_information_offense_name",
      "arrest_information_statute_code",
      "arrest_information_docket_number",
    ],
    "expungement_form-case-disposition": [
      "case_disposition_status",
      "case_disposition_conditional",
      "case_disposition_programs",
      "case_disposition_court",
      "case_disposition_date",
    ],
    "expungement_form-conviction-information": [
      "conviction_information_status",
      "conviction_information_date",
      "conviction_information_offense",
      "conviction_information_statute",
    ],
    "expungement_form-sentencing-information": [
      "sentencing_information_incarceration",
      "sentencing_information_probation",
      "sentencing_information_fine",
      "sentencing_information_incarceration_end",
      "sentencing_information_probation_end",
      "sentencing_information_fine_amount",
      "sentence_details_fine_payment",
      "sentence_details_jail_end",
      "sentence_details_probation_end",
      "sentence_details_status",
    ],
    "expungement_form-additional-arrest-information": [
      "additional_arrest",
      "additional_arrest_information_date",
      "additional_arrest_information_docket_number",
      "additional_case_disposition_status",
      "additional_arrest_information_jurisdiction",
      "additional_case_disposition_conditional",
      "additional_case_disposition_programs",
      "additional_case_disposition_court",
      "additional_case_disposition_date",
      "additional_conviction_information_status",
      "additional_conviction_information_offense",
      "additional_conviction_information_statute",
      "additional_sentence_details_status",
      "additional_sentence_details_jail_end",
      "additional_sentence_details_probation_end",
      "additional_sentence_details_fine_payment",
      "additional_conviction_information_date",
      "additional_arrest_information_offense_name",
      "additional_arrest_information_statute_code",
      "conviction_information_status",
    ],
    "expungement_form-information-review": ["review_confirm_accuracy"],
    "expungement_form-signature": ["signatureData", "signatureType"],
    "expungement_form-application-submission": ["submit_terms_agreement"],
  };

  const createPayload = () => {
    let payload = {};

    tabItems.forEach((tab) => {
      const key = `expungement_form-${tab.value}`;
      const tabData = JSON.parse(localStorage.getItem(key)) || {};

      const fieldsForTab = fields[key] || [];

      fieldsForTab.forEach((field) => {
        console.log(key, tabData, field);
        if (Object.prototype.hasOwnProperty.call(tabData, field)) {
          // console.log(field)

          if (key === "expungement_form-information-review") {
            payload[field] = tabData[field].value["Confirm"] === true;
          } else if (key === "expungement_form-application-submission") {
            payload[field] = tabData[field].value["Agree"] === true;
          } else {
            // console.log(key)
            payload[field] = tabData[field].value;
          }
        }
      });
    });

    console.log(payload);

    return payload;
  };

  const downloadForm = () => {
    setIsLoading(true);
    const url = window.URL.createObjectURL(fileBuffer);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ExpungementForm.pdf";
    a.setAttribute("aria-label", "Download Expungement Form");
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
    setApiResponse("downloadSuccess");
    setIsLoading(false);
  };

  const submitForm = () => {
    setIsLoading(true);
    const payload = createPayload();
    post(expungementFromEndpoint, payload, null, "blob")
      .then((response) => {
        setFileBuffer(response);
        setApiResponse("submitSuccess");
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setErrorDesc("Something went wrong!");
        setIsLoading(false);
      });
  };

  return (
    <>
      {!fileBuffer && (
        <Button
          color="teal"
          size="md"
          onClick={submitForm}
          disabled={
            isLoading || formData?.submit_terms_agreement?.value?.Agree !== true
          }
          loading={isLoading}
          className="w-auto"
          aria-label="Submit Expungement Form"
        >
          Submit
        </Button>
      )}

      {fileBuffer && (
        <Button
          color="teal"
          size="md"
          onClick={downloadForm}
          disabled={isLoading}
          className="w-auto flex items-center gap-3"
          aria-label="Download Expungement Form"
        >
          <ArrowDownOnSquareStackIcon className="h-5 w-5" />
          Download Form
        </Button>
      )}
      {error && (
        <p className="text-red-700 mt-3 font-bold" role="alert">
          {errorDesc}
        </p>
      )}
      {apiResponse === "submitSuccess" && (
        <p className="text-green-700 mt-3 font-bold" role="alert">
          Form submitted successfully!
        </p>
      )}
      {apiResponse === "downloadSuccess" && (
        <p className="text-green-700 mt-3 font-bold" role="alert">
          Form downloaded successfully!
        </p>
      )}
    </>
  );
};

export default ExpungementFormSubmit;
