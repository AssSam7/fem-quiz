import { useEffect, useState } from "react";

export default function Option({ option, handleClick, selectedAnswer }) {
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

  return (
    <div
      className={
        selectedAnswer === option.title ? `option option-active` : "option"
      }
      role="button"
      onClick={() => handleClick(option.title)}
    >
      {option.iconName ? (
        <img src={icon} alt="Option Icon" />
      ) : (
        <span>{option.id}</span>
      )}
      <p className="text-base font-medium text-dark-navy">{option.title}</p>
    </div>
  );
}
