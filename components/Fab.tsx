import { IconButton, Tooltip } from "@chakra-ui/react";
import { IoIosArrowUp } from "react-icons/io";

const Fab = () => {
  const handleScroll = () => {
    const body = document.querySelector("body");
    body?.scrollIntoView();
  };

  return (
    <Tooltip label="Scroll to the top" hasArrow>
      <IconButton
        aria-label="Button to scroll to the top"
        borderWidth={0}
        position="fixed"
        right={10}
        bottom={10}
        size="lg"
        boxShadow="dark-lg"
        icon={<IoIosArrowUp />}
        onClick={handleScroll}
      />
    </Tooltip>
  );
};
export default Fab;
