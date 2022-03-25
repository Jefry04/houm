import React from "react";
import Link from "next/link";
import { Heading, Flex } from "@chakra-ui/react";

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
        <Heading as="h1" size="lg" letterSpacing={"tighter"} color="secondary">
          <Link href="/">MUVI</Link>
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Navbar;
