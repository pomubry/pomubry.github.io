import GHButton from "./GHButton";

const Header = () => {
  return (
    <section className="my-20 max-w-[80%] sm:max-w-[70%]">
      <h1 className="text-5xl font-black sm:text-6xl md:text-7xl">
        Welcome to my profile!
      </h1>
      <div className="my-10 grid gap-3 text-base font-bold sm:text-xl md:text-2xl">
        <p>
          Check all the projects that I have done so far or take a look at all
          the technologies used for my projects
        </p>
      </div>
      <GHButton />
    </section>
  );
};

export default Header;
