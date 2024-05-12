import React from "react";
import { Box, Heading, Text, Link, Tooltip } from "@chakra-ui/react";
import colors from "src/themes/colors";

const GameItem = (gameCard) => {
  const { gameName, url, description } = gameCard;
  return (
    <Tooltip label={description} aria-label="A tooltip" placement="auto-start">
      <Link href={url} isExternal cursor="pointer" _hover={{textDecoration: 'none'}}>
        <Box p="10px" _hover={{ bg: colors.gray[50], borderRadius: "5px" }}>
          <Heading size="xs" textTransform="uppercase">
            {gameName}
          </Heading>
        </Box>
      </Link>
    </Tooltip>
  );
};

export default GameItem;
