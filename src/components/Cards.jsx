import React from "react";
import { Box, Image, Text, Stack, Heading, Link } from "@chakra-ui/react";

const Cards = ({ moviesData }) => {
  const { poster_path, title, release_date, id } = moviesData;

  return (
    <Link href={`/${id}`}>
      <Box
        maxW="280px"
        maxH="520px"
        boxShadow="2xl"
        borderRadius="12px"
        p={6}
        overflow="hidden"
        margin="8px"
        cursor="pointer"
      >
        <Box
          bg="gray.100"
          mt={-6}
          mx={-6}
          mb={6}
          pos="relative"
          overflow="hidden"
        >
          <Image
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            w="100%"
            h="100%"
            objectFit="cover"
            alt="Imagen de Pelicula"
            fallbackSrc="https://via.placeholder.com/150"
          />
        </Box>
        <Stack>
          <Text
            color="secondary"
            textTransform="uppercase"
            fontWeight={800}
            fontSize="sm"
            letterSpacing={1.1}
          >
            {release_date?.slice(0, 4)}
          </Text>
          <Heading
            color="title"
            marginTop="0 !important"
            fontSize="medium"
            fontFamily="body"
          >
            {title}
          </Heading>
        </Stack>
      </Box>
    </Link>
  );
};

export default Cards;
