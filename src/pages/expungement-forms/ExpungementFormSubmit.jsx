import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { ArrowDownOnSquareStackIcon } from "@heroicons/react/24/outline";


import { post } from "../../services/api-call.service";
import { tabItems } from "../../data/configs";

const ExpungementFormSubmit = ({formData}) => {
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
      "personal_information_ssn"
    ],
    "expungement_form-arrest-information": [
      "arrest_information_date",
      "arrest_information_jurisdiction",
      "arrest_information_offense_name",
      "arrest_information_statute_code",
      "arrest_information_docket_number"
    ],
    "expungement_form-case-disposition": [
      "case_disposition_status",
      "case_disposition_conditional",
      "case_disposition_programs",
      "case_disposition_court",
      "case_disposition_date"
    ],
    "expungement_form-conviction-information": [
      "conviction_information_status",
      "conviction_information_date",
      "conviction_information_offense",
      "conviction_information_statute"
    ],
    "expungement_form-sentencing-information": [
      "sentencing_information_incarceration",
      "sentencing_information_probation",
      "sentencing_information_fine",
      "sentencing_information_incarceration_end",
      "sentencing_information_probation_end",
      "sentencing_information_fine_amount",
      "sentencing_information_fine_payment"
    ],
    "expungement_form-additional-arrest-information": [
      "additional_arrest",
      "additional_arrest_information_docket_number",
      "additional_arrest_information_jurisdiction",
      "additional_arrest_information_offense_name",
      "additional_arrest_information_statute_code",
      "conviction_information_status"
    ],
    "expungement_form-information-review": [
      "review_confirm_accuracy"
    ],
    "expungement_form-application-submission": [
      "submit_terms_agreement"
    ]
  };

  const createPayload = () => {
    let payload = {};

    tabItems.forEach((tab) => {
      const key = `expungement_form-${tab.value}`;
      const tabData = JSON.parse(localStorage.getItem(key)) || {};

      const fieldsForTab = fields[key] || [];

      fieldsForTab.forEach((field) => {
        if (tabData.hasOwnProperty(field)) {

          if (key === "expungement_form-information-review") {
            payload[field] = tabData[field].value['Confirm'] === true;
          } else if (key === "expungement_form-application-submission") {
            payload[field] = tabData[field].value["Agree"] === true;
          } else {
            payload[field] = tabData[field].value;
          }
        }
      });
    });

    return payload;
  };

  const validateForm = () => {
    return tabItems.every((tab) => {
      const key = `expungement_form-${tab.value}`;
      if (key != "expungement_form-application-submission") {
        const tabData = JSON.parse(localStorage.getItem(key)) || {};
        return tabData?.tabCompleted || false;
      }
      return true
    });
  };
  

  const downloadForm = () => {
    setIsLoading(true);
    const url = window.URL.createObjectURL(fileBuffer);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ExpungementForm.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
    setApiResponse("downloadSuccess");
    setIsLoading(false);
  }

  // Function to submit the form
  const submitForm = () => {
    if (!validateForm()) {
      setError(true)
      setErrorDesc("Incomplete details, Please fill the complete form")
      return
    }

    setIsLoading(true);
    const payload = createPayload()
    post("/expungementform/print", payload, null, "blob")
      .then((response) => {
        setFileBuffer(response);
        setApiResponse("submitSuccess");
        setIsLoading(false);
      }).catch((error) => {
        console.log(error);
        setError(true)
        setErrorDesc("Something went wrong!")
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
          disabled={isLoading || formData?.submit_terms_agreement?.value?.Agree != true}
          loading={isLoading}
          className="w-auto"
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
        >
          <ArrowDownOnSquareStackIcon className="h-5 w-5" />
          Download Form
        </Button>
      )}
      {error && (
        <p className="text-red-700 mt-3 font-bold">{errorDesc}</p>
      )}
      {apiResponse === "submitSuccess" && (
        <p className="text-green-700 mt-3 font-bold">
          Form submitted successfully!
        </p>
      )}
      {apiResponse === "downloadSuccess" && (
        <p className="text-green-700 mt-3 font-bold">
          Form downloaded successfully!
        </p>
      )}
    </>
  );
};

export default ExpungementFormSubmit;
