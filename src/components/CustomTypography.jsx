import { Typography } from "@material-tailwind/react";

const CustomTypography = ({ children, variant = "heading" }) => {
  const styleMap = {
    heading: "w-full text-xl mb:text-3xl font-bold text-black",
    paragraph: "w-full text-base mb:text-lg text-gray-700",
  };

  const classes = styleMap[variant] || "";

  return <Typography className={classes}>{children}</Typography>;
};

export default CustomTypography;
