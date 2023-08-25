import {
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiPostgresql,
  SiExpress,
} from "react-icons/si";
import Tag from "./Tag";

const Icon = () => {
  return (
    <div className="rounded-xl bg-gray-100 p-10 shadow-xl dark:bg-gray-900">
      <h3 className="text-4xl font-extrabold">Primary</h3>
      <div className="my-5 flex flex-wrap justify-around gap-3">
        <Tag text="React" Icon={SiReact} />
        <Tag text="Next.js" Icon={SiNextdotjs} />
        <Tag text="TypeScript" Icon={SiTypescript} />
      </div>

      <br />

      <h3 className="text-2xl font-extrabold">Secondary</h3>
      <div className="my-5 flex flex-wrap justify-around gap-3">
        <Tag text="Vue.js" Icon={SiVuedotjs} />
        <Tag text="Express.js" Icon={SiExpress} />
        <Tag text="PostgreSQL" Icon={SiPostgresql} />
      </div>
    </div>
  );
};
export default Icon;
