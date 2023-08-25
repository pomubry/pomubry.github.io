import { IconType } from "react-icons";

interface TagProps {
  text: string;
  Icon: IconType;
}

const Tag = ({ text, Icon }: TagProps) => {
  return (
    <span className="flex flex-1 justify-center gap-3 rounded-lg bg-gray-300 p-3 text-center font-semibold  dark:bg-gray-700 ">
      <Icon className="text-purple text-2xl" />
      {text}
    </span>
  );
};

export default Tag;
