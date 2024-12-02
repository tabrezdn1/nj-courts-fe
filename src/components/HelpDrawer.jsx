import React from "react";
import {
  Button,
  Typography,
  IconButton,
  Drawer,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const HelpDrawer = () => {
  const [openRight, setOpenRight] = React.useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  return (
    <>
      <IconButton
        onClick={openDrawerRight}
        className="ml-5 rounded-full w-7 h-7"
        variant="text"
        aria-label="Open Help Drawer"
      >
        <InformationCircleIcon className="w-7 h-7" aria-hidden="true" />
      </IconButton>

      <Drawer
        placement="right"
        overlay={false}
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4 z-30"
        aria-labelledby="help-drawer-title"
        aria-describedby="help-drawer-description"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography id="help-drawer-title" variant="h5" color="blue-gray">
            NJ Courts
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
            aria-label="Close Help Drawer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Typography
          id="help-drawer-description"
          color="black"
          className="mb-8 pr-4 font-normal"
        >
          You need more help?
        </Typography>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outlined"
            aria-label="Click here for more help"
          >
            Click here
          </Button>
          <Button size="sm" aria-label="Contact Us">
            Contact Us
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default HelpDrawer;
