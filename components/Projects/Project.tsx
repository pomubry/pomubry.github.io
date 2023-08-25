import { BsGithub, BsLink } from "react-icons/bs";

interface ProjectProps {
  title: string;
  img: string;
  desc: string;
  github: string;
  site: string | null;
  index: number;
}

interface LinkProps {
  title: string;
  site: string;
  text: string;
  icon: React.ReactNode;
}

const LinkButton = ({ title, site, text, icon }: LinkProps) => {
  const ariaLabel = `${
    site.includes("github") ? "Github repository" : "Application"
  } link for ${title}`;

  return (
    <a
      href={site}
      target="_blank"
      rel="noopener"
      className="flex max-w-min items-center justify-between gap-5 rounded-lg border border-purple-600 p-2 text-sm font-semibold text-purple-600 duration-300 hover:bg-purple-300/50 dark:border-purple-300 dark:text-purple-300 dark:hover:bg-purple-300/20 md:mr-3 md:p-3"
      aria-label={ariaLabel}
    >
      {text} {icon}
    </a>
  );
};

const Project: React.FC<ProjectProps> = ({
  title,
  img,
  desc,
  github,
  site,
  index,
}) => {
  const isEven = index % 2 === 0;
  return (
    <ul className="my-10 grid grid-cols-1 items-center gap-5 rounded-lg bg-gray-100 p-8 shadow-xl duration-300 dark:bg-gray-900 md:grid-cols-2">
      {/* Image */}
      <li
        className={`order-1 overflow-hidden rounded-lg ${
          isEven ? "md:order-1" : "md:order-2"
        }`}
      >
        <picture>
          <img src={img} alt={title} className="object-cover" />
        </picture>
      </li>

      {/* Description */}
      <li className={`order-2 ${isEven ? "md:order-2" : "md:order-1"}`}>
        <h3 className="text-3xl font-extrabold">{title}</h3>
        <p className="mb-5 mt-2 whitespace-pre-line">{desc}</p>
        <div className="flex gap-3">
          <LinkButton
            title={title}
            site={github}
            text="Github"
            icon={<BsGithub />}
          />
          {site && (
            <LinkButton
              title={title}
              site={site}
              text="App"
              icon={<BsLink />}
            />
          )}
        </div>
      </li>
    </ul>
  );
};
export default Project;
