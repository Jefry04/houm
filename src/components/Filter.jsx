import React from "react";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

export const Filter = () => {
  return (
    <>
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
        <Link href={"/popular"}>
          <a>Populares</a>
        </Link>
      </Button>
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
        <Link href={"/upcoming"}>
          <a>Proximos Estrenos</a>
        </Link>
      </Button>
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
        <Link href={"/topRated"}>
          <a>Mejor Valoradas</a>
        </Link>
      </Button>
    </>
  );
};
