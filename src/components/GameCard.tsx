import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Games } from "../Hooks/useGames";
import PlatformIconList from "./platformIconList";
interface GamesProp {
  game: Games;
}
function GameCard({ game }: GamesProp) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platform={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
}

export default GameCard;
