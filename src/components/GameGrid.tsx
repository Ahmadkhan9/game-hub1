import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import { Platform } from "../Hooks/usePlatform";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../Hooks/useGenre";
import { gameQuery } from "../App";
interface Props {
  gameQuery: gameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, loading } = useGames(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (gameQuery.event) {
    return (
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {loading &&
          skeleton.map((skeletons) => (
            <GameCardContainer key={skeletons}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((res) => (
          <GameCardContainer key={res.id}>
            <GameCard game={res} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    );
  }
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={10}
      padding="10px"
    >
      {loading &&
        skeleton.map((skeletons) => (
          <GameCardContainer key={skeletons}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data.map((res) => (
        <GameCardContainer key={res.id}>
          <GameCard game={res} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
