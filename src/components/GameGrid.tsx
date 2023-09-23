import { Text } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
function GameGrid() {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((res) => (
          <li key={res.id}>{res.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
