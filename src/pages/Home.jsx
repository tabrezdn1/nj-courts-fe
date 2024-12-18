import {
  Card,
  CardBody,
  Typography,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Heading from "../components/Heading";
import SVGRenderer from "../components/SVGRenderer";
import questions from "../data/homescreen.json";

const Home = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );
  const [userSelection, setUserSelection] = useState({});
  const navigate = useNavigate();
  const heading = "Questionnaire";

  const routeTo = (card) => {
    // selection for first question
    if (card.formLink) {
      userSelection.formLink = card.formLink;
    }

    // selection for second question
    if (card.actionType) {
      userSelection.actionType = card.actionType;
    }

    // selection for third question
    if (card.userType) {
      userSelection.userType = card.userType;
    }

    setUserSelection(userSelection);

    if (card.noQuestionForward || userSelection.actionType === "continue") {
      navigate(`${userSelection.formLink}/${userSelection.actionType}`);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex + 1]);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const back = () => {
    setCurrentQuestion(questions[currentQuestionIndex - 1]);
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  return (
    <>
      <div className="w-full h-full overflow-y-auto" role="main">
        <div className="pt-[80px] md:pt-0">
          <Heading className="hidden md:block" heading={heading} />
          <Typography
            color="black"
            className="mt-[20px] pb-4 px-4 text-xl md:text-2xl text-center font-bold"
            aria-live="polite"
          >
            {currentQuestion.question}
          </Typography>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-[15px] md:gap-[30px] px-[10px] md:px-[100px] lg:px-[250px] pt-[30px] md:pt-[60px]`}
            role="group"
            aria-labelledby="question-options"
          >
            {currentQuestion.options.map((card, index) => (
              <Card
                key={index}
                className={`w-full md:w-[300px] lg:w-[350px] mx-auto h-[200px] md:h-[250px] cursor-pointer shadow-md transition-transform transform hover:scale-105 ${card.disable ? "cursor-not-allowed" : "hover:bg-teal-400"}`}
                onClick={() => !card.disable && routeTo(card)}
                role="button"
                aria-label={`Select ${card.title}`}
                aria-disabled={card.disable}
              >
                <CardBody className="flex justify-center items-center text-center">
                  <SVGRenderer svgName={card.name} />
                </CardBody>
                <CardFooter className="pt-0 text-center">
                  <Typography
                    variant="h5"
                    color="black"
                    className="mb-2 text-sm md:text-lg"
                  >
                    {card.title}
                  </Typography>
                </CardFooter>
              </Card>
            ))}
          </div>
          {currentQuestion.id !== 1 && (
            <div className="flex justify-center mt-4">
              <Button
                color="teal"
                size="md"
                className="w-auto md:w-32"
                variant="outlined"
                onClick={back}
                aria-label="Go back to the previous question"
              >
                Back
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
