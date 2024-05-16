import React from "react";
import {
  Heading,
  Box,
} from "@chakra-ui/react";
import {
  WORD_GAMES,
  TRIVIA,
  PUZZLES,
  GRIDS,
  MUSIC,
} from "src/components/Games/utils/constants";
import GameCard from "src/components/Games/GameCard";

const Games = () => {
  return (
    <Box p={"4em"}>
      <Heading as="h1" size="2xl" mb="20px">
        🎮 Daily Games
      </Heading>
      <GameCard title="Word Games" gameList={WORD_GAMES} />
      <GameCard title="Trivia" gameList={TRIVIA} />
      <GameCard title="Puzzles" gameList={PUZZLES} />
      <GameCard title="Grids" gameList={GRIDS} />
      <GameCard title="Music Games" gameList={MUSIC} />
    </Box>
  );
};

export default Games;
