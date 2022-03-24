import React from "react";
import {  Button } from "@chakra-ui/react";
import Link from "next/link";

export const Filter = () => {
  return (
    <>
      <Button
        m="4px"
        px={4}
        fontSize={"sm"}
        borderRadius="25px"
        bg="#FF452B"
        color={"white"}
        boxShadow={
          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
        }
        _hover={{
          bg: "rgb(178, 48, 30)",
        }}
      >
        <Link href={"/popular"}>
          <a>Populares</a>
        </Link>
      </Button>
      <Button
        m="4px"
        px={4}
        fontSize={"sm"}
        borderRadius="25px"
        bg="#FF452B"
        color={"white"}
        boxShadow={
          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
        }
        _hover={{
          bg: "rgb(178, 48, 30)",
        }}
        // _focus={{
        //   bg: "blue.500",
        // }}
      >
        OTRAS
      </Button>
      <Button
        m="4px"
        px={4}
        fontSize={"sm"}
        borderRadius="25px"
        bg="#FF452B"
        color={"white"}
        boxShadow={
          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
        }
        _hover={{
          bg: "rgb(178, 48, 30)",
        }}
        // _focus={{
        //   bg: "blue.500",
        // }}
      >
        latest movies
      </Button>
    </>
  );
};
