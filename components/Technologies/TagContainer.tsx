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
    <div className="bg-card rounded-xl p-10 shadow-xl">
      <h3 className="text-4xl font-extrabold">Primary</h3>
      <ul className="my-5 flex flex-wrap justify-around gap-3">
        <Tag text="React" Icon={SiReact} />
        <Tag text="Next.js" Icon={SiNextdotjs} />
        <Tag text="TypeScript" Icon={SiTypescript} />
      </ul>

      <br />

      <h3 className="text-2xl font-extrabold">Secondary</h3>
      <ul className="my-5 flex flex-wrap justify-around gap-3">
        <Tag text="Vue.js" Icon={SiVuedotjs} />
        <Tag text="Express.js" Icon={SiExpress} />
        <Tag text="PostgreSQL" Icon={SiPostgresql} />
      </ul>
    </div>
  );
};
export default Icon;
