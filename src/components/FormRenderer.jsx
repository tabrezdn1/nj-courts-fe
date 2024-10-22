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
import { useState } from "react";

const FieldRenderer = ({ field, onOptionChange, selectedOptions }) => {
  switch (field.type) {
    case "input":
      return (
        <Input
          size="lg"
          placeholder={field.placeholder}
          className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          onChange={(e) => onOptionChange(field.id, e.target.value)}
          value={selectedOptions[field.id] || ""}
        />
      );
    case "radio":
      return (
        <div className="flex gap-4">
          {field.options.map((option, i) => (
            <Radio
              key={i}
              name={field.name}
              label={option}
              color="teal"
              onChange={() => onOptionChange(field.id, option)}
              checked={selectedOptions[field.id] === option}
            />
          ))}
        </div>
      );
    case "checkbox":
      return (
        <div className="flex gap-4">
          {field.options.map((option, i) => (
            <Checkbox
              key={i}
              ripple={true}
              label={option}
              color="teal"
              onChange={(e) => onOptionChange(field.id, option, e.target.checked)}
              checked={selectedOptions[field.id]?.[option] || false}
            />
          ))}
        </div>
      );
    case "select":
      return (
        <Select
          color="teal"
          label={field.name}
          animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
          }}
          onChange={(value) => onOptionChange(field.id, value)}
          value={selectedOptions[field.id]}
        >
          {field.options.map((option, i) => (
            <Option key={i} value={option.trim()}>
              {option}
            </Option>
          ))}
        </Select>
      );
    case "textarea":
      return (
        <Textarea
          color="teal"
          placeholder={field.placeholder}
          rows={8}
          onChange={(e) => onOptionChange(field.id, e.target.value)}
          value={selectedOptions[field.id] || ""}
        />
      );
    case "date":
      return (
        <Input
          type="date"
          size="lg"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          onChange={(e) => onOptionChange(field.id, e.target.value)}
          value={selectedOptions[field.id] || ""}
        />
      );
    default:
      return null;
  }
};

const RecursiveFieldRenderer = ({ fields, selectedOptions, onOptionChange }) => {
  return fields.map((field, index) => (
    <div key={index}>
      <Typography variant="h6" color="blue-gray">
        {field.label}
      </Typography>
      <FieldRenderer field={field} onOptionChange={onOptionChange} selectedOptions={selectedOptions} />
      {field.subFields && selectedOptions[field.id] && field.subFields[selectedOptions[field.id]] && (
        <RecursiveFieldRenderer 
          fields={field.subFields[selectedOptions[field.id]]} 
          selectedOptions={selectedOptions}
          onOptionChange={onOptionChange}
        />
      )}
    </div>
  ));
};

const GPTFormRenderer = ({ form }) => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionChange = (fieldId, option, isChecked = true) => {
    setSelectedOptions(prevOptions => {
      const field = form.fields.find(f => f.id === fieldId);
      if (field && field.type === 'checkbox') {
        return {
          ...prevOptions,
          [fieldId]: { 
            ...prevOptions[fieldId],
            [option]: isChecked 
          }
        };
      } else {
        return {
          ...prevOptions,
          [fieldId]: option
        };
      }
    });
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        {form.title}
        {form?.helper && <HelpDrawer />}
      </Typography>
      <Typography color="gray" className="mt-1 font-normal max-w-96">
        {form?.subtitle || ""}
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <RecursiveFieldRenderer 
            fields={form.fields} 
            selectedOptions={selectedOptions}
            onOptionChange={handleOptionChange}
          />
        </div>
      </form>
    </Card>
  );
};

export default GPTFormRenderer;
