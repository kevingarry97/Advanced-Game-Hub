import { Heading } from "@chakra-ui/react";
import React from "react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore(s => s.gameQuery.genreId);
  const platformId = useGameQueryStore(s => s.gameQuery.platformId);
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id == genreId);
  const platform = usePlatform(platformId)

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginBottom={5} fontSize="5xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
