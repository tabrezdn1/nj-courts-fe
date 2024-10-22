import { Button } from "@material-tailwind/react";
import { useState } from "react";

import { post } from "../../services/api-call.service";
import { expungementRequestData } from "../../data/configs";

const ExpungementFormSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);

  // Function to submit the form
  const submitForm = () => {
    setIsLoading(true);
    post("/expungementform/print", expungementRequestData)
      .then((response) => {
        const url = window.URL.createObjectURL(response);
        const a = document.createElement("a");
        a.href = url;
        a.download = "ExpungementForm.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
        setApiResponse("success");
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setApiResponse("error");
        setIsLoading(false);
      });
  };

  return (
    <>
      <Button
        color="teal"
        size="lg"
        onClick={submitForm}
        disabled={isLoading}
        className="w-auto"
      >
        Submit
      </Button>
      {apiResponse === "error" && (
        <p className="text-red-700 mt-3 font-bold">Something went wrong!</p>
      )}
      {apiResponse === "success" && (
        <p className="text-green-700 mt-3 font-bold">
          Form downloaded successfully!
        </p>
      )}
    </>
  );
};

export default ExpungementFormSubmit;
