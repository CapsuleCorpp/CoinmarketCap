import { Box, Icon } from "@mui/material";
import getSymbolFromCurrency from "currency-symbol-map";
import React, { useContext } from "react";
import { fiat } from "../../util/currencies";
import Flag from "react-world-flags";
import { useDispatch } from "react-redux";
import { currencySelected } from "../../redux/test";
import { DialogState } from "../AppBar/appBar";
export default function FiatCurrency({ name, code, countryFlag }: fiat | any) {
  const dispatch = useDispatch();
  const { open, setopen } = useContext(DialogState);
  return (
    <Box
      component="div"
      display="flex"
      flexDirection="row"
      borderRadius={2}
      height="50px"
      width="200px"
      border="0px"
      sx={{
        backgroundColor: "white",
        ":hover": {
          backgroundColor: "#EFF2F5",
          cursor: "pointer",
        },
      }}
      onClick={() => {
        dispatch(
          currencySelected({
            currency: code,
          })
        );
        setopen(false);
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
        <Icon sx={{ height: "30px", width: "30px", borderRadius: 7 }}>
          <Flag code={countryFlag} height="30px" />
        </Icon>
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
          {code}-{getSymbolFromCurrency(code)}
        </span>
      </Box>
    </Box>
  );
}
