import { gameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatform";
export interface Games {
  id: number;
  name: string;
  background_image :string
  parent_platforms: {platform : Platform}[] 
  metacritic : number;
  rating_top:number;
}
const useGames = (gameQuery : gameQuery) => useData<Games>('/games' , 
{params:
  {genres: 
    gameQuery.genres?.id , parent_platforms : gameQuery.parent_platforms?.id, sortOrder : gameQuery.sortOrder , search : gameQuery.event
  }}, 
  [gameQuery])
export default useGames;