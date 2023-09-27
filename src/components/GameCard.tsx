import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Games } from "../Hooks/useGames";
import PlatformIconList from "./platformIconList";
import CriticScore from "./CriticScore";
import getCropedImage from "../services/getCropedImage";
interface GamesProp {
  game: Games;
}
function GameCard({ game }: GamesProp) {
  return (
    <Card>
      <Image src={getCropedImage(game.background_image)} />
      <CardBody>
        <Heading fontSize="lg">{game.name}</Heading>
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
