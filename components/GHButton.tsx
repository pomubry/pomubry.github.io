import { BsGithub } from "react-icons/bs";

const GHButton = () => {
  return (
    <a
      href="https://github.com/pomubry"
      target="_blank"
      rel="noopener"
      className="bg-card-hover flex max-w-min items-center gap-3 rounded-lg px-5 py-3 text-sm font-semibold shadow-xl ease-linear sm:text-base"
      arial-label="Github profile link"
    >
      Github <BsGithub className="text-purple" />
    </a>
  );
};
export default GHButton;
