import React from "react";
import {
  HamburgerIcon,
} from "@chakra-ui/icons";
import {  Box, Stack,  Link, useDisclosure } from "@chakra-ui/react";

export const Filter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <div>
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
    </div>
  );
};
