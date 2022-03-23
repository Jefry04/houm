import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Movie database
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        flexGrow={1}
        justify={"flex-end"}
        mt={{ base: 4, md: 0 }}
      >
        <Link href={"/popular"}>
          <a>Populares</a>
        </Link>
        <Link href={"/Upcoming"}>
          <a>Upcoming</a>
        </Link>
        <Link href={"/Nowplaying"}>
          <a>Nowplaying</a>
        </Link>
      </Stack>
    </Flex>
  );
};

export default Navbar;
