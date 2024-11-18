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
import { useEffect } from "react";
import React from "react";
import FormReview from "./FormReview";

const FieldRenderer = ({ field, onOptionChange, selectedOptions }) => {
  switch (field.type) {
    case "input":
      return <>
        <Input
          size="lg"
          placeholder={field.placeholder}
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 "
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          onChange={(e) => onOptionChange(field.id, e.target.value)}
          value={selectedOptions[field.id]?.value || ""}
          error={selectedOptions[field.id]?.error}
          maxLength={field?.validation?.maxLength || 255}
        />
        {
          selectedOptions[field.id]?.error && <p className="text-red-500 mt-1">{selectedOptions[field.id]?.error_desc}</p>
        }
      </>
    case "radio":
      return <>
        <div className="flex gap-4">
          {field.options.map((option, i) => (
            <Radio
              key={i}
              name={field.name}
              label={option}
              color="teal"
              onChange={() => onOptionChange(field.id, option)}
              checked={selectedOptions[field.id]?.value === option}
            />
          ))}
        </div>
        {
          selectedOptions[field.id]?.error && <p className="text-red-500 mt-1">{selectedOptions[field.id]?.error_desc}</p>
        }
      </>
    case "checkbox":
      return <>
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
            />
          ))}
        </div>
        {
          selectedOptions[field.id]?.error && <p className="text-red-500 mt-1">{selectedOptions[field.id]?.error_desc}</p>
        }
      </>
    case "select":
      return <>
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
        >
          {field.options.map((option, i) => (
            <Option
              key={i}
              value={typeof option === "string" ? option.trim() : option.value}
            >
              {typeof option === "string" ? option : option.label}
            </Option>
          ))}
        </Select>
        {
          selectedOptions[field.id]?.error && <p className="text-red-500 mt-1">{selectedOptions[field.id]?.error_desc}</p>
        }
      </>
    case "textarea":
      return (
        <Textarea
          color="teal"
          placeholder={field.placeholder}
          rows={8}
          onChange={(e) => onOptionChange(field.id, e.target.value)}
          value={selectedOptions[field.id]?.["value"] || ""}
        />
      );
    case "date":
      return <>
        <Input
          type="date"
          size="lg"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          onChange={(e) => onOptionChange(field.id, e.target.value)}
          value={selectedOptions[field.id]?.["value"] || ""}
          min="1947-08-15"
          max={new Date().toISOString().split("T")[0]}
          error={selectedOptions[field.id]?.error}
        />
        {
          selectedOptions[field.id]?.error && <p className="text-red-500 mt-1">{selectedOptions[field.id]?.error_desc}</p>
        }
      </>
    default:
      return null;
  }
};

const RecursiveFieldRenderer = ({
  fields,
  selectedOptions,
  onOptionChange,
}) => {
  return fields.map((field, index) => (
    <div key={index}>
      <Typography
        variant="h6"
        color="blue-gray"
        className="py-1 font-black font-bold"
      >
        {field.label}
      </Typography>
      <Typography variant="small" color="gray" className="py-1 font-black">
        {field.sub_label}
      </Typography>
      <FieldRenderer
        field={field}
        onOptionChange={onOptionChange}
        selectedOptions={selectedOptions}
      />
      {field.subFields &&
        selectedOptions[field.id]?.value &&
        field.subFields[selectedOptions[field.id]?.value] && (
          <RecursiveFieldRenderer
            className="p-1"
            fields={field.subFields[selectedOptions[field.id]?.value]}
            selectedOptions={selectedOptions}
            onOptionChange={onOptionChange}
          />
        )}
    </div>
  ));
};

const FormRenderer = ({
  id,
  form,
  selectedOptions,
  setSelectedOptions,
  handleOptionChangeCallback
}) => {
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
    handleOptionChangeCallback(fieldId, option, isChecked)
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
            error: false
          } ,
        };
      } else {
        return {
          ...prevOptions,
          [fieldId]: {
            ...(prevOptions[fieldId] || {}),
            value: option,
            error: false
          },
        };
      }
    });
  };

  return (
    <Card color="transparent" shadow={false} className="px-1">
      <Typography variant="h4" color="blue-gray">
        {form?.title}
        {form?.helper && <HelpDrawer />}
      </Typography>
      <Typography color="gray" className="font-normal max-w-96">
        {form?.subtitle || ""}
      </Typography>
      <form className="w-96">
        <div className="mb-1 flex flex-col gap-6">
          {!form.isReview && (<RecursiveFieldRenderer
            fields={form.fields}
            selectedOptions={form.isReview ? reviewData : selectedOptions}
            onOptionChange={handleOptionChange}
          />
          )}
          {form.isReview && (<FormReview id={form.value} />)}
        </div>
      </form>
    </Card>
  );
};

export default FormRenderer;
