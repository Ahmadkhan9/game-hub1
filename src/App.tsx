import { useState } from "react";
import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./Hooks/useGenre";
import { Platform } from "./Hooks/usePlatform";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameComponent from "./components/GameComponent";
export interface gameQuery {
  genres: Genre | null;
  parent_platforms: Platform | null;
  event: string;
  sortOrder: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<gameQuery>({} as gameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(event) => setGameQuery({ ...gameQuery, event })} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX="5px">
          <GenreList
            selectedGenre={gameQuery.genres}
            onSelectGenre={(genres) => setGameQuery({ ...gameQuery, genres })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameComponent gameQuery={gameQuery} />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.parent_platforms}
              onSelectPlatform={(parent_platforms) =>
                setGameQuery({ ...gameQuery, parent_platforms })
              }
            />
            <SortSelector
              onSelect={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
