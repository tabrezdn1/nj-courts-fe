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

const GPTFormRenderer = ({ form }) => {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        {form.title}
        <HelpDrawer />
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
                      key={i}
                      name={field.name}
                      label={option}
                      color="teal"
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
                  color="teal"
                  placeholder={field.placeholder}
                  rows={8}
                />
              )}
              {field.type === "date" && (
                  <Input
                    type="date"
                    size="lg"
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
