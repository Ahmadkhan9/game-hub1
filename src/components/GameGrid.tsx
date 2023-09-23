import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
function GameGrid() {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={5}
      >
        {games.map((res) => (
          <GameCard key={res.id} game={res} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
