import { Box, Image, Text, Stack, Heading, Link } from "@chakra-ui/react";


import React from "react";

const Cards = ({ moviesData }) => {
  const { poster_path, title, release_date } = moviesData;
  return (
    <Link href="/">
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
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
          overflow={"hidden"}
        >
          <Image
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            w="100%"
            h="100%"
            objectFit="cover"
            alt={"Imagen de muestra"}
          />
        </Box>
        <Stack>
          <Text
            color="#f4364c"
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {release_date?.slice(0, 4)}
          </Text>
          <Heading
            color="#212121"
            marginTop="0 !important"
            fontSize={"medium"}
            fontFamily={"body"}
          >
            {title}
          </Heading>
        </Stack>
      </Box>
    </Link>
  );
};

export default Cards;
