import React from "react";
import { SimpleGrid, Flex } from "@chakra-ui/react";

import Cards from "../components/Cards";
import { Pagination } from "../components/Pagination";
import { getMoviesData } from "../lib/getMoviesData";

const ResultSearch = ({ searchResult, page, query }) => (
  <SimpleGrid maxWidth="1280px" m="auto" direction="column">
    {searchResult?.results?.length > 0 ? (
      <>
        <Flex justifyContent="flex-end" p="4px">
          <Pagination
            page={page}
            total_pages={searchResult.total_pages}
            query={query}
          />
        </Flex>

        <SimpleGrid
          columns={{ sm: 2, md: 4 }}
          spacing="40px"
          justifyContent="center"
        >
          {searchResult?.results?.map((result) => (
            <Cards moviesData={result} key={result.id} />
          ))}
        </SimpleGrid>
      </>
    ) : (
      //TODO  aviso de que no se encontro resultado
      <h1>NO hay resultado</h1>
    )}
  </SimpleGrid>
);

export async function getServerSideProps({ query: { page = 1, query } }) {
  const searchResult = await getMoviesData("/search/movie", { page, query });

  return {
    props: {
      searchResult: searchResult,
      page: +page,
      query: query,
    },
  };
}

export default ResultSearch;
