import { useEffect, useState } from "react";

export default function Option({ option, handleClick }) {
  const [icon, setIcon] = useState("");

  useEffect(() => {
    async function importIcon() {
      const importedIcon = await import(`../assets/images/${option.iconName}`);
      setIcon(importedIcon.default);
    }
    if (option.iconName) {
      importIcon();
    }
  }, []);

  return (
    <div
      className="w-full h-[96px] bg-pure-white shadow-lg flex items-center gap-[22px] rounded-2xl cursor-pointer p-7"
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
