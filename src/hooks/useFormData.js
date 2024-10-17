import { useState, useEffect } from "react";

const useFormData = (formName) => {
  // Step 1: Initialize form data from localStorage or default to an empty object
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem(formName);
    return savedData ? JSON.parse(savedData) : {};
  });

  // Step 2: Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(formName, JSON.stringify(formData));
  }, [formName, formData]);

  // Function to update specific fields in the form
  const updateField = (stepKey, fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [stepKey]: {
        ...prevData[stepKey],
        [fieldName]: value,
      },
    }));
  };

  return { formData, updateField };
};

export default useFormData;
