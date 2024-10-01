import {
  Heading,
  Box,
  Stack,
  Image,
} from "@chakra-ui/react";

import Card from "src/components/Cards/Card";
import { PARALLELS } from "./utils/constants";

const Cards = () => {
  return (
    <Box p="4em">
      <Heading as="h1" size="2xl" mb="20px">
        Sports Cards
      </Heading>
      <Heading as="h3" size="md" mb="20px">
        2024 Topps Chrome Parallels
      </Heading>
      <Image
        width="200px"
        src="/images/yoshinobu_yamamoto.webp"
        alt="Topps Chrome"
      />
      <Stack direction="column" my="20px">
        {PARALLELS.map((config) => (<Card key={config.variant} {...config} />))}
      </Stack>
    </Box>
  );
};

export default Cards;
