import React from "react";
import { Heading, Flex } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="white"
      borderRadius="12px"
      boxShadow="2xl"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"} color="#f4364c">
          <Link href="/">MUVI</Link>
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Navbar;
