import { Card, CardBody, Typography } from "@material-tailwind/react";

import Heading from "../components/Heading";
import NavigateLink from "../components/NavigateLink";

const Home = () => {
  const heading = "Home";
  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading} />
        <CardBody className="font-normal px-[64px]">
          <Typography color="gray" className="py-1 w-1/2 text-2xl">
            Welcome to the New Jersey Courts Online Forms Portal. Simplify your
            legal processes by accessing and completing court forms online. Our
            user-friendly platform guides you through each step, ensuring that
            you provide all necessary information accurately.
          </Typography>
          <Typography
            color="blue-gray"
            className="py-1 w-1/2 text-2xl "
            variant="h4"
          >
            <NavigateLink
              label="Take me to expungement form"
              link="./expungement-forms/form"
            />
          </Typography>
        </CardBody>
      </Card>
    </>
  );
};

export default Home;
