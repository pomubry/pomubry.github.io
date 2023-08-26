import { BsGithub, BsLink } from "react-icons/bs";
import type { IconType } from "react-icons";
import Image from "next/image";

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
  Icon: IconType;
}

const LinkButton = ({ title, site, text, Icon }: LinkProps) => {
  const ariaLabel = `${
    site.includes("github") ? "Github repository" : "Application"
  } link for ${title}`;

  return (
    <a
      href={site}
      target="_blank"
      rel="noopener"
      className="duration-ease flex items-center justify-between gap-5 rounded-lg border border-purple-600 p-2 text-sm font-semibold hover:bg-gray-200 dark:border-purple-300 dark:hover:bg-gray-800 md:mr-3 md:p-3"
      aria-label={ariaLabel}
    >
      {text} <Icon className="text-purple" />
    </a>
  );
};

const Project = ({ title, img, desc, github, site, index }: ProjectProps) => {
  const isEven = index % 2 === 0;
  return (
    <li className="bg-card my-10 grid grid-cols-1 items-center gap-5 rounded-lg p-8 shadow-xl md:grid-cols-2">
      {/* Image */}
      <div
        className={`relative order-1 aspect-video overflow-hidden rounded-lg ${
          isEven ? "md:order-1" : "md:order-2"
        }`}
      >
        <Image src={img} alt={title} fill />
      </div>

      {/* Description */}
      <div className={`order-2 ${isEven ? "md:order-2" : "md:order-1"}`}>
        <h3 className="text-3xl font-extrabold">{title}</h3>
        <p className="mb-5 mt-2 whitespace-pre-line">{desc}</p>
        <div className="flex gap-3">
          <LinkButton
            title={title}
            site={github}
            text="Github"
            Icon={BsGithub}
          />
          {site && (
            <LinkButton title={title} site={site} text="App" Icon={BsLink} />
          )}
        </div>
      </div>
    </li>
  );
};
export default Project;
