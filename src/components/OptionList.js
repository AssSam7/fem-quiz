import { useEffect, useState } from "react";
import Option from "./Option";
import { ReactComponent as WrongAnswerIcon } from "../assets/images/icon-incorrect.svg";

export default function OptionList({ options, answer, onClick, handleNext }) {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [showSelectOptionError, setShowSelectOptionError] = useState(false);

  const onSelectAnswer = (answer) => {
    setSelectedAnswer(answer);
    onClick(answer);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer) {
      setShowSelectOptionError(false);
      setIsAnswerSubmitted(true);
      proceedToNext();
    } else {
      setShowSelectOptionError(true);
    }
  };

  const proceedToNext = () => {
    if (isAnswerSubmitted) {
      handleNext(selectedAnswer === answer);
      setSelectedAnswer("");
      setIsAnswerSubmitted(false);
    }
  };

  return (
    <div className="w-[45%] flex flex-col gap-5">
      {options.map((option) => (
        <Option
          option={option}
          key={option.title}
          handleClick={onSelectAnswer}
          selectedAnswer={selectedAnswer}
          correctAnswer={answer}
          answerSubmitted={isAnswerSubmitted}
        />
      ))}
      {answer && (
        <button
          className="mt-5 bg-purple rounded-3xl text-base font-normal text-pure-white p-8"
          onClick={handleSubmitAnswer}
        >
          {isAnswerSubmitted ? "Next Question" : "Submit Answer"}
        </button>
      )}
      {showSelectOptionError && (
        <p className="text-red text-[24px] flex self-center gap-3">
          <WrongAnswerIcon />
          Please select an answer
        </p>
      )}
    </div>
  );
}
