import {
  Card,
  Input,
  Typography,
  Radio,
  Checkbox,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";
import HelpDrawer from "./HelpDrawer";
import { useEffect, useRef } from "react";
import FormReview from "./FormReview";
import SignaturePad from "./SignaturePad";

const FieldRenderer = ({ field, onOptionChange, selectedOptions }) => {
  switch (field.type) {
    case "phone":
      return (
        <>
          <Input
            size="lg"
            type="number"
            placeholder={field.placeholder}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900 md:w-full text-sm"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => {
              const value = e.target.value;
              if (value.length <= 10) {
                onOptionChange(field.id, value);
              }
            }}
            value={selectedOptions[field.id]?.value || ""}
            error={selectedOptions[field.id]?.error}
          />
          {selectedOptions[field.id]?.error && (
            <p className="text-red-500 mt-1 text-xs">
              {selectedOptions[field.id]?.error_desc}
            </p>
          )}
        </>
      );
    case "ssn":
      return (
        <>
          <Input
            size="lg"
            type="number"
            placeholder={field.placeholder}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900 md:w-full text-sm"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => {
              const value = e.target.value;
              if (value.length <= 9) {
                onOptionChange(field.id, value);
              }
            }}
            value={selectedOptions[field.id]?.value || ""}
            error={selectedOptions[field.id]?.error}
          />
          {selectedOptions[field.id]?.error && (
            <p className="text-red-500 mt-1 text-xs">
              {selectedOptions[field.id]?.error_desc}
            </p>
          )}
        </>
      );
    case "zipcode":
      return (
        <>
          <Input
            size="lg"
            type="number"
            placeholder={field.placeholder}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900 md:w-full text-sm"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => {
              const value = e.target.value;
              if (value.length <= 5) {
                onOptionChange(field.id, value);
              }
            }}
            value={selectedOptions[field.id]?.value || ""}
            error={selectedOptions[field.id]?.error}
          />
          {selectedOptions[field.id]?.error && (
            <p className="text-red-500 mt-1 text-xs">
              {selectedOptions[field.id]?.error_desc}
            </p>
          )}
        </>
      );
    case "input":
      return (
        <>
          <Input
            size="lg"
            placeholder={field.placeholder}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900 md:w-full text-sm"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => onOptionChange(field.id, e.target.value)}
            value={selectedOptions[field.id]?.value || ""}
            error={selectedOptions[field.id]?.error}
            maxLength={field?.validation?.maxLength || 255}
          />
          {selectedOptions[field.id]?.error && (
            <p className="text-red-500 mt-1 text-xs">
              {selectedOptions[field.id]?.error_desc}
            </p>
          )}
        </>
      );
    case "radio":
      return (
        <>
          <div className="flex gap-4">
            {field.options.map((option, i) => (
              <Radio
                key={i}
                name={field.name}
                label={option}
                color="teal"
                onChange={() => onOptionChange(field.id, option)}
                checked={selectedOptions[field.id]?.value === option}
                className="text-sm"
              />
            ))}
          </div>
          {selectedOptions[field.id]?.error && (
            <p className="text-red-500 mt-1 text-xs">
              {selectedOptions[field.id]?.error_desc}
            </p>
          )}
        </>
      );
    case "checkbox":
      return (
        <>
          <div className="flex gap-4">
            {field.options.map((option, i) => (
              <Checkbox
                key={i}
                ripple={true}
                label={option}
                color="teal"
                onChange={(e) =>
                  onOptionChange(field.id, option, e.target.checked)
                }
                checked={selectedOptions[field.id]?.value?.[option] || false}
                className="text-sm"
              />
            ))}
          </div>
          {selectedOptions[field.id]?.error && (
            <p className="text-red-500 mt-1 text-xs">
              {selectedOptions[field.id]?.error_desc}
            </p>
          )}
        </>
      );
    case "select":
      return (
        <>
          <Select
            color="teal"
            label={field.name}
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
            onChange={(value) => onOptionChange(field.id, value)}
            value={selectedOptions[field.id]?.["value"]}
            error={selectedOptions[field.id]?.error}
            className="text-sm"
          >
            {field.options.map((option, i) => (
              <Option
                key={i}
                value={
                  typeof option === "string" ? option.trim() : option.value
                }
              >
                {typeof option === "string" ? option : option.label}
              </Option>
            ))}
          </Select>
          {selectedOptions[field.id]?.error && (
            <p className="text-red-500 mt-1 text-xs">
              {selectedOptions[field.id]?.error_desc}
            </p>
          )}
        </>
      );
    case "textarea":
      return (
        <Textarea
          color="teal"
          placeholder={field.placeholder}
          rows={4}
          onChange={(e) => onOptionChange(field.id, e.target.value)}
          value={selectedOptions[field.id]?.["value"] || ""}
          className="text-sm"
        />
      );
    case "date":
      return (
        <>
          <Input
            type="date"
            size="lg"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900 text-sm"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => onOptionChange(field.id, e.target.value)}
            value={selectedOptions[field.id]?.["value"] || ""}
            min="1947-08-15"
            max={new Date().toISOString().split("T")[0]}
            error={selectedOptions[field.id]?.error}
          />
          {selectedOptions[field.id]?.error && (
            <p className="text-red-500 mt-1 text-xs">
              {selectedOptions[field.id]?.error_desc}
            </p>
          )}
        </>
      );
    case "signature":
      return (
        <>
          <SignaturePad
            field={field}
            onOptionChange={onOptionChange}
            selectedOptions={selectedOptions}
          />
        </>
      );
    default:
      return null;
  }
};

const RecursiveFieldRenderer = ({
  fields,
  selectedOptions,
  onOptionChange,
  tabIndex,
  stepIndex,
}) => {
  const getFieldIndexByLabelAndSublabel = (label, sub_label) => {
    return fields.findIndex(
      (field) => field.label === label && field.sub_label === sub_label
    );
  };

  const generateFieldPlaceholderPath = (tabIndex, stepIndex, fieldIndex) => {
    return `tabs.${tabIndex}.stepper.${stepIndex}.fields.${fieldIndex}.placeholder`;
  };

  const getOptionsFieldIndex = (optionFields, field) => {
    return optionFields.findIndex((optionIndex) => optionIndex.id === field.id);
  };

  return fields.map((field, index) => (
    <div key={index} className="mb-4">
      <Typography
        variant="h6"
        color="blue-gray"
        className="py-1 font-black font-bold text-sm"
      >
        {field.label}
      </Typography>
      <Typography
        variant="small"
        color="gray"
        className="py-1 font-black text-xs"
      >
        {field.sub_label}
      </Typography>
      <FieldRenderer
        field={field}
        placeholderPath={generateFieldPlaceholderPath(
          tabIndex,
          stepIndex,
          getFieldIndexByLabelAndSublabel(field.label, field.sub_label)
        )}
        onOptionChange={onOptionChange}
        selectedOptions={selectedOptions}
      />
      {field.subFields &&
        selectedOptions[field.id]?.value &&
        field.subFields[selectedOptions[field.id]?.value] && (
          <div className="p-1">
            {field.subFields[selectedOptions[field.id]?.value].map(
              (subField, subIndex) => (
                <div key={subIndex}>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="py-1 font-black font-bold"
                  >
                    {subField.label}
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="py-1 font-black"
                  >
                    {subField.sub_label}
                  </Typography>
                  <FieldRenderer
                    field={subField}
                    tabIndex={tabIndex}
                    stepIndex={stepIndex}
                    fieldIndex={subIndex}
                    onOptionChange={onOptionChange}
                    selectedOptions={selectedOptions}
                  />
                  {subField.subFields &&
                    selectedOptions[subField.id]?.value &&
                    subField.subFields[selectedOptions[subField.id]?.value] && (
                      <div className="p-1">
                        {subField.subFields[
                          selectedOptions[subField.id]?.value
                        ].map((nestedField, nestedIndex) => (
                          <div key={nestedIndex}>
                            <Typography
                              variant="h6"
                              color="blue-gray"
                              className="py-1 font-black font-bold"
                            >
                              {nestedField.label}
                            </Typography>
                            <Typography
                              variant="small"
                              color="gray"
                              className="py-1 font-black"
                            >
                              {nestedField.sub_label}
                            </Typography>
                            <FieldRenderer
                              field={nestedField}
                              tabIndex={tabIndex}
                              stepIndex={stepIndex}
                              fieldIndex={nestedIndex}
                              onOptionChange={onOptionChange}
                              selectedOptions={selectedOptions}
                            />
                            {nestedField.subFields &&
                              selectedOptions[nestedField.id]?.value &&
                              nestedField.subFields[
                                selectedOptions[nestedField.id]?.value
                              ] && (
                                <div className="p-1">
                                  {nestedField.subFields[
                                    selectedOptions[nestedField.id]?.value
                                  ].map((deepNestedField, deepNestedIndex) => (
                                    <div key={deepNestedIndex}>
                                      <Typography
                                        variant="h6"
                                        color="blue-gray"
                                        className="py-1 font-black font-bold"
                                      >
                                        {deepNestedField.label}
                                      </Typography>
                                      <Typography
                                        variant="small"
                                        color="gray"
                                        className="py-1 font-black"
                                      >
                                        {deepNestedField.sub_label}
                                      </Typography>
                                      <FieldRenderer
                                        field={deepNestedField}
                                        tabIndex={tabIndex}
                                        stepIndex={stepIndex}
                                        fieldIndex={deepNestedIndex}
                                        onOptionChange={onOptionChange}
                                        selectedOptions={selectedOptions}
                                      />
                                    </div>
                                  ))}
                                </div>
                              )}
                          </div>
                        ))}
                      </div>
                    )}
                </div>
              )
            )}
          </div>
        )}
    </div>
  ));
};

const FormRenderer = ({
  id,
  form,
  selectedOptions,
  setSelectedOptions,
  handleOptionChangeCallback,
  tabIndex,
  stepIndex,
}) => {
  const formReviewRef = useRef(null);

  useEffect(() => {
    // Read existing data from local storage
    const existingData = JSON.parse(localStorage.getItem(id)) || {};
    // Merge existing data with new selected options
    const updatedData = {
      ...existingData,
      ...selectedOptions,
    };
    // Update local storage with merged data
    localStorage.setItem(id, JSON.stringify(updatedData));
  }, [selectedOptions]);

  const handleOptionChange = (fieldId, option, isChecked = true) => {
    setSelectedOptions((prevOptions) => {
      const field = form.fields.find((f) => f.id === fieldId);
      if (field && field.type === "checkbox") {
        return {
          ...prevOptions,
          [fieldId]: {
            ...prevOptions[fieldId],
            value: {
              ...(prevOptions[fieldId]?.["value"] || {}),
              [option]: isChecked,
            },
            error: false,
          },
        };
      } else {
        return {
          ...prevOptions,
          [fieldId]: {
            ...(prevOptions[fieldId] || {}),
            value: option,
            error: false,
          },
        };
      }
    });
    handleOptionChangeCallback(fieldId, option, isChecked);
    // Refresh form review data
    refreshFormReview();
  };

  // Refresh form review data
  const refreshFormReview = () => {
    if (formReviewRef.current) {
      formReviewRef.current.setReviewData();
    }
  };

  return (
    <Card color="transparent" shadow={false} className="w-full md:w-auto">
      <Typography
        variant="h4"
        color="blue-gray"
        className="text-xl md:text-2xl"
      >
        {form.title}
        {form?.helper && <HelpDrawer />}
      </Typography>
      <Typography
        color="gray"
        className="font-normal max-w-96 text-sm md:text-base"
      >
        {form.subtitle}
      </Typography>
      <form className="w-full md:w-96">
        <div className="mb-1 flex flex-col gap-6">
          {!form.isReview && (
            <RecursiveFieldRenderer
              tabIndex={tabIndex}
              stepIndex={stepIndex}
              fields={form.fields}
              selectedOptions={selectedOptions}
              onOptionChange={handleOptionChange}
            />
          )}
          {form.isReview && <FormReview id={form.value} ref={formReviewRef} />}
        </div>
      </form>
    </Card>
  );
};

export default FormRenderer;
