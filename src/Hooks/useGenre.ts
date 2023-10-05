import Genres from "../Data/Genres";
export interface Genre{
  id :  number;
  name : string;
  image_background : string;
  
}
const useGenre = () => ({data : Genres , loading : false , error : null})
export default useGenre;