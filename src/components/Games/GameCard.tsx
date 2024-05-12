import React from "react";
import {
  Heading,
  Card,
  CardBody,
  StackDivider,
  Stack
} from "@chakra-ui/react";
import GameItem from "src/components/Games/GameItem";
import { Box } from "@chakra-ui/react";
import {type GameItemType} from "src/components/Games/GameItem";

type GameCardType = {
  title: string;
  gameList: GameItemType[];
};

const GameCard = (games: GameCardType) => {
  const { title, gameList } = games;

  return (
    <Box>
      <Heading as="h2" size="l" my="10px">
        {title}
      </Heading>
      <Card>
        <CardBody>
          <Stack divider={<StackDivider />}>
            {gameList.map((gameItem) => (
              <GameItem {...gameItem} />
            ))}
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default GameCard;
