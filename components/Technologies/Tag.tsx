import { Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  label: string;
  icon: IconType;
}

const IconContainer = ({ label, icon }: Props) => {
  return (
    <Tag size="lg" variant="subtle" colorScheme="purple" p={3}>
      <TagLeftIcon boxSize={7} as={icon} />
      <TagLabel>{label}</TagLabel>
    </Tag>
  );
};
export default IconContainer;