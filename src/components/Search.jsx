import React, { useState } from "react";
import { useRouter } from "next/router";
import { SearchIcon } from "@chakra-ui/icons";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";

export const Search = () => {
  const [movieSearch, setMovieSearch] = useState("");
  const router = useRouter();

  const handleInputChange = (event) => {
    setMovieSearch(event.target.value);
  };
  const handleSearch = (event) => {
    event.preventDefault();
    router.push({
      pathname: "/resultSearch",
      query: {
        query: movieSearch,
      },
    });
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <InputGroup>
          <Input
            focusBorderColor="disable"
            placeholder="Buscar"
            size="lg"
            variant="outline"
            borderRadius="14px"
            mb="8"
            onChange={handleInputChange}
          />
          <InputRightElement>
            <SearchIcon color="secondary" mt="4px" />
          </InputRightElement>
        </InputGroup>
      </form>
    </>
  );
};
