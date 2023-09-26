import useData from "../Hooks/useData";
import useGames from "../Hooks/useGames";
import useGenre, { Genre } from "../Hooks/useGenre";
function GenreList() {
  const { data } = useGenre();
  return (
    <>
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GenreList;
