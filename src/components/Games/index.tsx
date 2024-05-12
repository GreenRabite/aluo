import React from "react";
import colors from "src/themes/colors";
import {
  Heading,
  Link,
  Text,
  TableCaption,
  Card, CardHeader, CardBody, CardFooter, StackDivider,
  Box,
  Stack
} from "@chakra-ui/react";
import {NY_TIMES} from "src/components/Games/utils/constants";
import GameItem from "src/components/Games/GameItem";

const Games = () => {
  return (
    <Box w="100vw" h="100vh" p={"4em"} backgroundColor={colors.gray[25]}>
      <Heading as="h1" size="2xl" mb="20px">
        🎮 Daily Games 🎮
      </Heading>
      <Heading as="h2" size="l" mb="10px">
        Word Games
      </Heading>
      <Card>
        <CardBody>
          <Stack divider={<StackDivider />}>
            {NY_TIMES.map(gameItem => <GameItem {...gameItem}/>)}
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default Games;
