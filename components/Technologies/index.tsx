import TagContainer from "./TagContainer";

const Technologies = () => {
  return (
    <section className="grid items-center gap-10 md:grid-cols-2">
      <div>
        <h3 className="text-center text-2xl font-extrabold">
          These are what I have used so far
        </h3>
        <hr className="border-lg my-5 border-2 border-dashed border-gray-500" />
        <p className="text-center">
          I&apos;m mostly familiar with React for the frontend, while I know
          just enough to make a functional API with Express.js for the backend,
          and PostgreSQL for the database.
        </p>
      </div>
      <TagContainer />
    </section>
  );
};
export default Technologies;
