import React from "react";
import { Button } from "@chakra-ui/react";
import NextLink from "next/link";

export const Filter = () => {
  return (
    <>
      <NextLink href={"/popular"} passHref>
        <Button
          m="4px"
          px={4}
          fontSize="sm"
          borderRadius="25px"
          bg="button"
          color="text"
          boxShadow={
            "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
          }
          _hover={{
            bg: "hover",
          }}
        >
          Populares
        </Button>
      </NextLink>
      <NextLink href={"/upcoming"} passHref>
        <Button
          m="4px"
          px={4}
          fontSize="sm"
          borderRadius="25px"
          bg="button"
          color="text"
          boxShadow={
            "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
          }
          _hover={{
            bg: "hover",
          }}
        >
          Proximos Estrenos
        </Button>
      </NextLink>
      <NextLink href={"/topRated"} passHref>
        <Button
          m="4px"
          px={4}
          fontSize="sm"
          borderRadius="25px"
          bg="button"
          color="text"
          boxShadow={
            "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
          }
          _hover={{
            bg: "hover",
          }}
        >
          Mejores valoradas
        </Button>
      </NextLink>
    </>
  );
};
