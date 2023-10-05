import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Games } from "../Hooks/useGames";
import PlatformIconList from "./platformIconList";
import CriticScore from "./CriticScore";
import getCropedImage from "../services/getCropedImage";
import Emojis from "./Emojis";
interface GamesProp {
  game: Games;
}
function GameCard({ game }: GamesProp) {
  return (
    <Card>
      <Image src={getCropedImage(game.background_image)} />
      <CardBody>
        <HStack marginBottom={2} justifyContent="space-between">
          <PlatformIconList
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="lg">{game.name}</Heading>
        <Emojis rating={game.rating_top} />
      </CardBody>
    </Card>
  );
}

export default GameCard;
