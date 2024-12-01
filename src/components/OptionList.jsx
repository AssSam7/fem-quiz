import Option from "./Option";

export default function OptionList({ options }) {
  return (
    <div className="w-[45%] flex flex-col gap-5">
      {options.map((option) => (
        <Option option={option} key={option.title} />
      ))}
    </div>
  );
}
