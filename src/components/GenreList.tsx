import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useData from "../Hooks/useData";
import useGames from "../Hooks/useGames";
import useGenre, { Genre } from "../Hooks/useGenre";
import getCropedImage from "../services/getCropedImage";
function GenreList() {
  const { data, loading, error } = useGenre();
  if (error) return null;
  return (
    <>
      {loading && <Spinner />}
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
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
