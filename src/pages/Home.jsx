import {
  Card,
  CardBody,
  Typography,
  CardFooter,
  Button,
  Input,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Heading from "../components/Heading";
import SVGRenderer from "../components/SVGRenderer";
import questions from "../data/homescreen.json";
import { useTranslation } from "react-i18next";
const Home = () => {
  const { t } = useTranslation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );
  const [userSelection, setUserSelection] = useState({});
  const navigate = useNavigate();
  const heading = "Questionnaire 🤔";

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

    if (card.noQuestionForward) {
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
      <div className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading} />
        <Typography
          color="gray"
          className="pt-[60px] pb-4 px-4 text-2xl text-center font-bold"
        >
          {t(`homescreen.${currentQuestionIndex}.question`)}
        </Typography>
        <div className={`grid grid-cols-2 gap-[30px] px-[250px] pt-[60px]`}>
          {currentQuestion.options.map((card, index) => (
            <Card
              key={index}
              className="w-120 h-60 cursor-pointer"
              onClick={() => routeTo(card)}
            >
              <CardBody className="flex justify-center items-center text-center">
                <SVGRenderer svgName={card.name} />
              </CardBody>
              <CardFooter className="pt-0 text-center">
                <Typography variant="h5" color="gray" className="mb-2">
                  {t(
                    `homescreen.${currentQuestionIndex}.options.${index}.title`
                  )}
                </Typography>
              </CardFooter>
            </Card>
          ))}
        </div>
        {currentQuestion.id !== 1 && (
          <div className="flex justify-center mt-4">
            <Button
              color="teal"
              size="lg"
              className="w-auto"
              variant="outlined"
              onClick={back}
            >
              Back
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
