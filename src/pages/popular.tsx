import React from "react";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import Cards from "../components/Cards";
import { getMoviesData } from "../lib/getMoviesData";
import { Filter } from "../components/Filter";
import { Pagination } from "../components/Pagination";
import { NextPageContext } from "next";
import { Movies, IMovies } from "../types/movies";

export interface PopularProps {
  popularMovies?:Movies;
  page:number;
}

const Popular = ({ popularMovies, page }:PopularProps) => {

  return (
    <div>
      <SimpleGrid maxWidth="1280px" m="auto" >
        <Flex justifyContent="flex-end" p="4px">
          <Flex mr="10" direction={{ base: "column", sm: "row", md: "row" }}>
            <Filter />
          </Flex>
          <Pagination page={page} total_pages={popularMovies?.total_pages} />
        </Flex>
        <SimpleGrid
          columns={{ sm: 2, md: 4 }}
          spacing="40px"
          justifyContent="center"
        >
          {popularMovies?.results?.map((movie:IMovies) => (
            <Cards moviesData={movie} key={movie.id} />
          ))}
        </SimpleGrid>
        <Flex justifyContent="flex-end" p="4px">
          <Pagination page={page} total_pages={popularMovies?.total_pages} />
        </Flex>
      </SimpleGrid>
    </div>
  );
};


export async function getServerSideProps({ query: { page =1 } }) {
  const popularMovies:Movies = await getMoviesData("/movie/popular?", { page });

  return {
    props: {
      popularMovies: popularMovies,
      page: +page,
    },
  };
}
export default Popular;
