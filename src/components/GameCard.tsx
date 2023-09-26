import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Games } from "../Hooks/useGames";
import PlatformIconList from "./platformIconList";
import CriticScore from "./CriticScore";
import getCropedImage from "../services/getCropedImage";
interface GamesProp {
  game: Games;
}
function GameCard({ game }: GamesProp) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={getCropedImage(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
