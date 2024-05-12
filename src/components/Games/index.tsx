import React from "react";
import {
  Heading,
  Card,
  CardBody,
  StackDivider,
  Box,
  Stack,
} from "@chakra-ui/react";
import {
  WORD_GAMES,
  TRIVIA,
  PUZZLES,
} from "src/components/Games/utils/constants";
import GameItem from "src/components/Games/GameItem";

const Games = () => {
  return (
    <Box p={"4em"}>
      <Heading as="h1" size="2xl" mb="20px">
        🎮 Daily Games
      </Heading>
      {/* Word Games Section */}
      <Heading as="h2" size="l" mb="10px">
        Word Games
      </Heading>
      <Card>
        <CardBody>
          <Stack divider={<StackDivider />}>
            {WORD_GAMES.map((gameItem) => (
              <GameItem {...gameItem} />
            ))}
          </Stack>
        </CardBody>
      </Card>
      {/* Trivia Section */}
      <Heading as="h2" size="l" my="10px">
        Trivia
      </Heading>
      <Card>
        <CardBody>
          <Stack divider={<StackDivider />}>
            {TRIVIA.map((gameItem) => (
              <GameItem {...gameItem} />
            ))}
          </Stack>
        </CardBody>
      </Card>
      {/* Puzzle Section */}
      <Heading as="h2" size="l" my="10px">
        Puzzles
      </Heading>
      <Card>
        <CardBody>
          <Stack divider={<StackDivider />}>
            {PUZZLES.map((gameItem) => (
              <GameItem {...gameItem} />
            ))}
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default Games;
