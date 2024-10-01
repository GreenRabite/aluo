import React from 'react';
import { Heading, Box, Link } from "@chakra-ui/react";
import { gamesRoute, cardsRoute, resumeRoute } from "src/utils/routes";

export default function Page() {
  return (
    <Box p="3em">
      <Heading as="h1" size="2xl" mb="20px">
        Rabite
      </Heading>
      <Box>
        <Link href={gamesRoute()}>Games</Link>
      </Box>
      <Box>
        <Link href={cardsRoute()}>Cards</Link>
      </Box>
      <Box>
        <Link href={resumeRoute()}>Resume</Link>
      </Box>
    </Box>
  );
}
