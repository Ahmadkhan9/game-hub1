import { useState } from "react";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./Hooks/useGenre";
import { Platform } from "./Hooks/usePlatform";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
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
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.parent_platforms}
            onSelectPlatform={(parent_platforms) =>
              setGameQuery({ ...gameQuery, parent_platforms })
            }
          />
          <SortSelector
            onSelect={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
