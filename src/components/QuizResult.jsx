import { useEffect, useState } from "react";
import ContentBox from "./ContentBox";

export default function QuizResult({ title, iconName, score, total }) {
  const [icon, setIcon] = useState("");

  useEffect(() => {
    async function importIcon() {
      const importedIcon = await import(`../assets/images/${iconName}`);
      setIcon(importedIcon.default);
    }
    if (iconName) {
      importIcon();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="flex justify-between">
      <ContentBox quizCompleted={true} />
      <div className="w-[45%] flex flex-col gap-[40px] p-[48px] content-between items-center bg-pure-white rounded-[24px]">
        <div className="flex gap-5 items-center">
          <img src={icon} alt="Icon" />
          <h2 className="text-dark-navy text-base font-normal">{title}</h2>
        </div>
        <h1 className="text-dark-navy text-3xl font-normal">{score}</h1>
        <p className="text-grey-navy text-[24px] font-light">out of {total}</p>
      </div>
    </section>
  );
}
