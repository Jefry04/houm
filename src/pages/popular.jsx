import React from "react";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import Cards from "../components/Cards";
import { getMoviesData } from "../lib/getMoviesData";
import { Filter } from "../components/Filter";
import { Pagination } from "../components/Pagination";

const Popular = ({ popularMovies, page }) => {
  return (
    <div>
      <SimpleGrid maxWidth="1280px" m="auto" direction="column">
        <Flex justifyContent="flex-end" p="4px">
          <Box mr="10">
            <Filter />
          </Box>
          <Pagination page={page} total_pages={popularMovies.total_pages} />
        </Flex>
        <SimpleGrid
          columns={{ sm: 2, md: 4 }}
          spacing="40px"
          justifyContent="center"
        >
          {popularMovies?.results?.map((movie) => (
            <Cards moviesData={movie} key={movie.id} />
          ))}
        </SimpleGrid>
      </SimpleGrid>
    </div>
  );
};

export async function getServerSideProps({ query: { page = 1 } }) {
  const popularMovies = await getMoviesData("/movie/popular?", { page });

  return {
    props: {
      popularMovies: popularMovies,
      page: +page,
    },
  };
}
export default Popular;
