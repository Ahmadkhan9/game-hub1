import { Heading } from "@chakra-ui/react";
import React from "react";
import { gameQuery } from "../App";
interface props {
  gameQuery: gameQuery;
}
function GameComponent({ gameQuery }: props) {
  let Name = `${gameQuery.parent_platforms?.name || ""} ${
    gameQuery.genres?.name || ""
  } Games`;
  return <Heading as="h1">{Name}</Heading>;
}

export default GameComponent;
