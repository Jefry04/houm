import React from "react";
import Link from "next/link";
import { Heading, Flex, Spacer, Box } from "@chakra-ui/react";
import { Search } from "./Search";

const Navbar = () => {
  return (
    <Flex
      borderRadius="12px"
      boxShadow="2xl"
      alignItems="baseline"
    >
      <Box p="2" pt="5">
        <Heading as="h1" size="lg" letterSpacing={"tighter"} color="secondary">
          <Link href="/">MUVI</Link>
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Search />
      </Box>
    </Flex>
  );
};

export default Navbar;
