import { useEffect, useState } from "react";

export default function Option({ option }) {
  const [icon, setIcon] = useState("");

  useEffect(() => {
    async function importIcon() {
      const importedIcon = await import(`../assets/images/${option.icon}`);
      setIcon(importedIcon.default);
    }
    importIcon();
  }, []);

  return (
    <div className="w-full h-[96px] bg-pure-white shadow-lg flex items-center gap-[22px] rounded-2xl cursor-pointer p-7">
      <img src={icon} alt="Option Icon" />
      <p className="text-base font-medium text-dark-navy">{option.title}</p>
    </div>
  );
}
