import React from "react";
import { SimpleGrid, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Filter } from "../components/Filter";
import { Search } from "../components/Search";

export default function Home() {
  return (
    <>
      <SimpleGrid
        maxWidth="1280px"
        m="auto"
        direction="column"
        justifyItems="center"
      >
        <Flex mt="16" flexDirection="column" alignItems="center" width="68%">
          <Heading as="h2" size="xl" pb="4" color="title">
            BIENVENIDOS
          </Heading>
          <Text fontSize="2xl" color="primary" pb="8">
            La mas completa base de datos de peliculas de internet, busca tu
            favorita
          </Text>
          <Box width="80%">
            <Search />
          </Box>
          <Flex mr="10" direction={{ base: "column", sm: "row", md: "row" }}>
            <Filter />
          </Flex>
          <Text mt="16" fontSize="6xl" color="secondary">
            MUVI
          </Text>
        </Flex>
      </SimpleGrid>
    </>
  );
}
