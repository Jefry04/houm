import React from "react";
import { useRouter } from "next/router";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

export const Pagination = ({ page, total_pages, query }) => {
  const router = useRouter();

  return (
    <>
      <IconButton
        color="secondary"
        aria-label="Bacward pagination"
        icon={<ArrowBackIcon />}
        marginRight="6px"
        onClick={() => {
          if (query === undefined) {
            router.push(`?page=${page - 1}`);
          } else {
            router.push(`?page=${page - 1}&query=${query}`);
          }
        }}
        disabled={page <= 1}
      />
      <IconButton
        color="secondary"
        aria-label="forward pagination"
        icon={<ArrowForwardIcon />}
        onClick={() => {
          if (query === undefined) {
            router.push(`?page=${page + 1}`);
          } else {
            router.push(`?page=${page + 1}&query=${query}`);
          }
        }}
        disabled={page >= 500 || page === total_pages} // 500 It is an API restriction
      />
    </>
  );
};
