import React from "react";
import {
  SimpleGrid,
  Box,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
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
          <Heading as="h2" size="xl" pb="4" color="#424242">
            BIENVENIDOS
          </Heading>
          <Text fontSize="2xl" color="#616161" pb="8">
            La mas completa base de datos de peliculas de internet, busca tu
            favorita
          </Text>
          <Box width="80%">
            <Search />
          </Box>
          <Box m="10px">
            <Filter />
          </Box>
          <Text mt="16" fontSize="6xl" color="#f4364c">
            MUVI
          </Text>
        </Flex>
      </SimpleGrid>
    </>
  );
}
