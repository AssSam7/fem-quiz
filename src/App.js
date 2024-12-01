import data from "./data.json";

import { useState } from "react";

import OptionList from "./components/OptionList";
import QuestionCard from "./components/QuestionCard";
import Welcome from "./components/Welcome";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);

  const subjects = data.quizzes.map((item) => ({
    title: item.title,
    iconName: item.icon,
  }));
  const currentQuestionObj =
    selectedTopic && selectedTopic?.questions[currentQuestionNumber];
  const qOptions =
    currentQuestionObj &&
    currentQuestionObj?.options.map((option, i) => ({
      id: i + 1,
      title: option,
    }));

  const onQuizStart = (topic) => {
    const topicData = data.quizzes.filter((item) => item.title === topic);
    console.log("Topic Data is: ", topicData);
    setSelectedTopic(topicData[0]);
  };

  return (
    <div className="container">
      {selectedTopic ? (
        <QuestionCard
          question={{
            id: currentQuestionNumber + 1,
            total: selectedTopic.questions.length,
            ...selectedTopic.questions[currentQuestionNumber],
          }}
        >
          <OptionList
            options={qOptions}
            answer={currentQuestionObj.answer}
            onClick={(answer) => console.log(answer)}
          />
        </QuestionCard>
      ) : (
        <Welcome>
          <OptionList options={subjects} onClick={onQuizStart} />
        </Welcome>
      )}
    </div>
  );
}

export default App;
