import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../Hooks/useGenre";
interface Props {
  selectedGenre: Genre | null;
}
const GameGrid = ({ selectedGenre }: Props) => {
  const { data, loading } = useGames(selectedGenre);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      spacing={10}
      padding={5}
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
