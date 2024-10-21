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

const GPTFormRenderer = ({ tab_id, form, formData, updateField }) => {

  const handleInputChange = (e) => {
    const { id, value, type } = e.target;
    switch (type) {
      case "text":
        updateField(tab_id, id, value);    
        break;
      case "textarea":
        updateField(tab_id, id, value);    
        break;
      case "radio":
        updateField(tab_id, id, value);
        break; 
      case "date":
        updateField(tab_id, id, value);
        break;
      case "checkbox":
        handleCheckboxChange(e, id);
        break; 
      default:
        console.error("Unsupported input field", type);
    }
  };


  const handleCheckboxChange = (e, fieldId) => {
    console.log(fieldId);
    const { value, checked } = e.target;
    const updatedValues = formData[tab_id]?.[fieldId] || [];
  
    if (checked) {
      // Add the checked value to the array
      updateField(tab_id, fieldId, [...updatedValues, value]);
    } else {
      // Remove the unchecked value from the array
      updateField(
        tab_id,
        fieldId,
        updatedValues.filter((item) => item !== value)
      );
    }
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
          {form.fields.map((field, index) => (
            <div key={index}>
              <Typography variant="h6" color="blue-gray">
                {field.label}
              </Typography>
              {field.type === "input" && (
                <Input
                  size="lg"
                  placeholder={field.placeholder}
                  id={field.id}
                  value={formData[tab_id]?.[field.id] || ""}
                  onChange={handleInputChange}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              )}
              {field.type === "radio" && (
                <div className="flex gap-4">
                  {field.options.map((option, i) => (
                    <Radio
                      id={field.id}
                      key={i}
                      name={field.name}
                      label={option}
                      color="teal"
                      value={option}
                      checked={formData[tab_id]?.[field.id] === option}
                      onChange={handleInputChange}
                    />
                  ))}
                </div>
              )}
              {field.type === "checkbox" && (
                <div className="flex gap-4">
                  {field.options.map((option, i) => (
                    <Checkbox
                      key={i}
                      ripple={true}
                      label={option}
                      name={field.name}
                      color="teal"
                      value={option}
                      checked={formData[tab_id]?.[field.id]?.includes(option) || false}
                      onChange={(e) => handleCheckboxChange(e, field.id)}
                    />
                  ))}
                </div>
              )}
              {field.type === "select" && (
                <Select
                  color="teal"
                  label={field.name}
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 },
                  }}
                >
                  {field.options.map((option, i) => (
                    <Option key={i} value={option.trim()}>
                      {option}
                    </Option>
                  ))}
                </Select>
              )}
              {field.type === "textarea" && (
                <Textarea
                  id={field.id}
                  color="teal"
                  placeholder={field.placeholder}
                  rows={8}
                  value={formData[tab_id]?.[field.id] || ""}
                  onChange={handleInputChange}
                />
              )}
              {field.type === "date" && (
                  <Input
                    id={field.id}
                    type="date"
                    size="lg"
                    value={formData[tab_id]?.[field.id] || ""}
                    onChange={handleInputChange}
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
              )}
            </div>
          ))}
        </div>
      </form>
    </Card>
  );
};

export default GPTFormRenderer;
