import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
export interface Platform{
    id : number,
    name : string,
    slug : string
}
export interface Games {
  id: number;
  name: string;
  background_image :string
  parent_platforms: {platform : Platform}[] 
  metacritic : number;
}
interface GameResponseProps {
  count: number;
  results: Games[];
}
const useGames = () => {
    const [games, setGames] = useState<Games[]>([]);
    const [error, setError] = useState("");
    const [loading , setLoading] = useState(false);
    useEffect(() => {
      setLoading(true)
        const controller = new AbortController();
        apiClient
        .get<GameResponseProps>("/games" , {signal: controller.signal})
        .then(res => {
          setGames(res.data.results)
          setLoading(false)
        })
        .catch((err) =>{
            if(err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false)
            })
        return () => controller.abort();
    }, []);
    return {games , error , loading}
}
export default useGames;