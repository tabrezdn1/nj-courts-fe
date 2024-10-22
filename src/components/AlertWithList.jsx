import React from "react";
import { Alert, Typography } from "@material-tailwind/react";

function IconOutlined() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

  );
}

function IconSolid() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const AlertWithList = ({ alerts }) => {
  return (
    <div className="flex w-full flex-col gap-2">
      {alerts.map((alert, index) => (
        <Alert key={index} variant={alert.variant} icon={alert.icon === "outlined" ? <IconOutlined /> : <IconSolid />}>
          <Typography className="font-medium">
            {alert.title}
          </Typography>
          <ul className="mt-2 ml-2 list-inside list-disc">
            {alert.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Alert>
      ))}
    </div>
  );
};

export default AlertWithList;
