import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getMovieDetail } from "../lib/getMoviesData";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";

const MovieDetail = () => {
  const router = useRouter();
  const [movieDetail, setMovieDetail] = useState([]);
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      getMovieDetail(`/movie/${id}`).then((data) => setMovieDetail(data));
    }
  }, [id]);

  return (
    <Container maxW="7xl">
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 0 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded="md"
            alt="movie image"
            src={`https://image.tmdb.org/t/p/w300${movieDetail.poster_path}`}
            align="center"
            w="60%"
            h={{ base: "100%", sm: "400px", lg: "400px" }}
            fallbackSrc="https://via.placeholder.com/150"
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 8 }}>
          <Box as="header">
            <Heading
              lineHeight={1.1}
              color="title"
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {movieDetail.title}
            </Heading>
            <Text mt="4" color="secondary" fontWeight={300} fontSize="2xl">
              {movieDetail?.release_date?.slice(0, 4)}
            </Text>
          </Box>
          <Stack spacing={{ base: 4, sm: 6 }} direction="column">
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text color="secondary" fontSize="2xl" fontWeight="300">
                Puntuacion de usuarios: {movieDetail.vote_average}
              </Text>
              <Text fontSize="lg">{movieDetail.overview}</Text>
            </VStack>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default MovieDetail;
