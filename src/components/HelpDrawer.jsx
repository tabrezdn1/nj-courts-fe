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
      >
        <InformationCircleIcon onClick={openDrawerRight} className="w-7 h-7" />
      </IconButton>

      <Drawer
        placement="right"
        overlay={false}
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4 z-30"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            NJ Courts
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Typography color="gray" className="mb-8 pr-4 font-normal">
          You need more help?
        </Typography>
        <div className="flex gap-2">
          <Button size="sm" variant="outlined">
            Click here
          </Button>
          <Button size="sm">Contact Us</Button>
        </div>
      </Drawer>
    </>
  );
};

export default HelpDrawer;
