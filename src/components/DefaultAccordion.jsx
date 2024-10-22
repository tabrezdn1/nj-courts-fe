import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";

export default function DefaultAccordion({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <Accordion key={index} open={item.open}>
          {/* Accordion Header with custom typography */}
          <AccordionHeader onClick={item.handleOpen}>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2"
            >
              {item.header}
            </Typography>
          </AccordionHeader>

          {/* Accordion Body with custom styling */}
          <AccordionBody className="bg-gray-50 px-6 py-4">
            <Typography
              color="gray"
              className="text-base font-normal text-gray-700"
            >
              {item.content.description}
            </Typography>
          </AccordionBody>
        </Accordion>
      ))}
    </>
  );
}
