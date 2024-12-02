import { useEffect, useState } from "react";
import { ReactComponent as CorrectAnswerIcon } from "../assets/images/icon-correct.svg";
import { ReactComponent as WrongAnswerIcon } from "../assets/images/icon-incorrect.svg";

export default function Option({
  option,
  handleClick,
  selectedAnswer,
  correctAnswer,
  answerSubmitted,
}) {
  const [icon, setIcon] = useState("");

  useEffect(() => {
    async function importIcon() {
      const importedIcon = await import(`../assets/images/${option.iconName}`);
      setIcon(importedIcon.default);
    }
    if (option.iconName) {
      importIcon();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderResultIcon = () => {
    if (answerSubmitted && option.title === correctAnswer) {
      return <CorrectAnswerIcon />;
    } else if (
      answerSubmitted &&
      selectedAnswer !== correctAnswer &&
      selectedAnswer === option.title
    ) {
      return <WrongAnswerIcon />;
    }
  };

  const getClasses = () => {
    if (selectedAnswer === option.title && !answerSubmitted) {
      return "option-active";
    }

    if (
      answerSubmitted &&
      selectedAnswer === option.title &&
      selectedAnswer === correctAnswer
    ) {
      return "option-active-correct";
    }

    if (
      answerSubmitted &&
      selectedAnswer === option.title &&
      selectedAnswer !== correctAnswer
    ) {
      return "option-active-wrong";
    }

    return "";
  };

  return (
    <div
      className={`option ${getClasses()}`}
      role="button"
      onClick={() => handleClick(option.title)}
      style={
        answerSubmitted ? { cursor: "not-allowed", pointerEvents: "none" } : {}
      }
    >
      {option.iconName ? (
        <img src={icon} alt="Option Icon" />
      ) : (
        <span>{option.id}</span>
      )}
      <p className="text-base font-medium text-dark-navy">{option.title}</p>
      {renderResultIcon()}
    </div>
  );
}
