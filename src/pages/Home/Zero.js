import React from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { style } from "./CommonCss";
const Zero = ({ setOpenDialogBox, bet, setBetFuncton, amount }) => {
  return (
    <Stack direction="row" justifyContent="end" sx={{ height: "7.14%" }}>
      <Box
        sx={{
          background: "white",
          width: "100%",
          border: "1px solid white",
          transform: "rotate(180deg)",
          position: "relative",
          clipPath: "polygon(50% 0%, 100% 50%, 100% 100%, 0 100%, 0 50%)",
          "&::before": {
            clipPath: "polygon(50% 0%, 100% 50%, 100% 100%, 0 100%, 0 50%)",
            content: "''",
            position: "absolute",
            width: "100%",
            height: "111%",
            background: "#008C34",
          },
        }}
      >
        <IconButton
          sx={style.btn4}
          className="!flex !justify-center !text-center"
        >
          <span
            id="0"
            className="whitespace-nowrap !text-[10px] !mt-4 !text-white"
            onClick={(e) => {
              let isContainsPre = bet?.find((i) => i?.id === "0");
              if (isContainsPre) {
                setOpenDialogBox("0");
              } else {
                setBetFuncton("0", [0], amount);
              }
              e.stopPropagation();
            }}
          >
            0
          </span>
        </IconButton>
      </Box>
    </Stack>
  );
};

export default Zero;
