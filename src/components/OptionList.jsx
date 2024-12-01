import Option from "./Option";

export default function OptionList({ options }) {
  return (
    <div className="w-[45%] flex flex-col gap-5">
      {options.map((option) => (
        <Option option={option} key={option.title} />
      ))}
      {!options.iconName && (
        <button className="mt-5 bg-purple rounded-3xl text-base font-normal text-pure-white p-8">
          Submit answer
        </button>
      )}
    </div>
  );
}
