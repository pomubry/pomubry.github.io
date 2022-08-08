import { extendTheme } from "@chakra-ui/react";
import config from "./config";
import Button from "./components/button";
import Link from "./components/link";
const overrides = {
  config,
  components: {
    Button,
    Link,
  },
};

export default extendTheme(overrides);
