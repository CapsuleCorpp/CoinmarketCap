import React from "react";
import { Box } from "@mui/material";
import Icon from "react-crypto-icons";
import { cryptoCu } from "../../util/currencies";

export default function CryptoCurrency({ name, code, symbol }: cryptoCu | any) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      borderRadius={2}
      height="50px"
      width="200px"
      sx={{
        ":hover": {
          backgroundColor: "#EFF2F5",
          cursor: "pointer",
        },
      }}
    >
      <Box
        display="flex"
        flexBasis="20%"
        flexDirection="column"
        justifyContent="center"
        paddingLeft="5px"
        marginTop="8px"
      >
        <Icon name={symbol} size={25} />
      </Box>
      <Box
        display="flex"
        flexBasis="60%"
        flexDirection="column"
        justifyContent="center"
      >
        <span
          style={{
            margin: "0px",
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "16px",
            color: "#171924",
          }}
        >
          {name}
        </span>
        <span
          style={{
            margin: "0px",
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "16px",
            color: "#58667E",
          }}
        >
          {code}
        </span>
      </Box>
    </Box>
  );
}
