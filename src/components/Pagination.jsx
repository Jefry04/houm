import React from "react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const Pagination = ({page, total_pages}) => {
    const router = useRouter();

  return (
    <>
      <IconButton
        color="#f4364c"
        aria-label="Bacward pagination"
        icon={<ArrowBackIcon />}
        marginRight="6px"
        onClick={() => router.push(`?page=${page - 1}`)}
        disabled={page <= 1}
      />
      <IconButton
        color="#f4364c"
        aria-label="forward pagination"
        icon={<ArrowForwardIcon />}
        onClick={() => router.push(`?page=${page + 1}`)}
        disabled={page >= 500 || page === total_pages} // 500 Porque es una restricciond de la API
      />
    </>
  );
};
