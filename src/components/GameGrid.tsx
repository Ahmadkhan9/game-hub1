import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";
interface Games {
  id: number;
  name: string;
}
interface GameResponseProps {
  count: number;
  results: Games[];
}
function GameGrid() {
  const [Games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<GameResponseProps>("/games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => setError(err.message));
  });
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {Games.map((res) => (
          <li key={res.id}>{res.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
