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

  const submitForm = () => {

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
