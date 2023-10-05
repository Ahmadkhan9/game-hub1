import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useData from "../Hooks/useData";
import useGames from "../Hooks/useGames";
import useGenre, { Genre } from "../Hooks/useGenre";
import getCropedImage from "../services/getCropedImage";
interface Props {
  onSelectGenre: (genres: Genre) => void;
  selectedGenre: Genre | null;
}
function GenreList({ selectedGenre, onSelectGenre }: Props) {
  const { data, loading, error } = useGenre();
  if (error) return null;
  return (
    <>
      {loading && <Spinner />}
      <Heading fontSize="2xl" marginBottom={2}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCropedImage(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                fontSize="l"
                variant="link"
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
