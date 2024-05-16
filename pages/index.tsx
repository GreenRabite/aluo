import React from 'react';
import { Heading, Box, Link } from "@chakra-ui/react";
import { gamesRoute } from 'src/utils/routes';

export default function Page() {
  return (
    <Box p="3em">
      <Heading as="h1" size="2xl" mb="20px">
        Rabite
      </Heading>
      <Link href={gamesRoute()}>Games</Link>
    </Box>
  );
}
