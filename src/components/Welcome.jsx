export default function Welcome({ children }) {
  return (
    <section className="flex justify-between">
      <div className="w-[40%] flex flex-col gap-[48px]">
        <h1 className="text-2xl text-dark-navy font-thin">
          Welcome to the <span className="font-bold">Frontend Quiz!</span>
        </h1>
        <p className="text-grey-navy italic">Pick a subject to get started</p>
      </div>
      {children}
    </section>
  );
}
