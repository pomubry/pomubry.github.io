import { BsGithub } from "react-icons/bs";

const GHButton = () => {
  return (
    <a
      href="https://github.com/pomubry"
      target="_blank"
      rel="noopener"
      className="flex max-w-min items-center gap-3 rounded-lg border border-purple-600 px-5 py-3 text-sm text-purple-600 duration-300 hover:bg-purple-300/50 dark:border-purple-300 dark:text-purple-300 hover:dark:bg-purple-300/20 sm:text-base"
    >
      Github <BsGithub />
    </a>
  );
};
export default GHButton;
