import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
interface Genre{
  id :  number;
  name : string;
}
interface FetchGenreProps{
  count : number;
  results : Genre[];
}
const useGenre = () => {
  const [genres, setGenre] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [loading , setLoading] = useState(false);
    useEffect(() => {
      setLoading(true)
        const controller = new AbortController();
        apiClient
        .get<FetchGenreProps>("/genres" , {signal: controller.signal})
        .then(res => {
          setGenre(res.data.results)
          setLoading(false)
        })
        .catch((err) =>{
            if(err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false)
            })
        return () => controller.abort();
    }, []);
    return {genres , error , loading}
}
export default useGenre;