import Dialog from "@mui/material/Dialog";
import React from "react";

import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, capitalize, InputBase, styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  bitcoinUnits,
  cryptoCu,
  cryptoCurrencyUsed,
  fiat,
  fiatCurrency,
  popularCyrrencies,
} from "../../util/currencies";
import { IconButton } from "@mui/material";
import { useContext, useState } from "react";
import FiatCurrencies from "../Fiatcomponent/FiatCurrencies";
import PopularCurrencies from "./PopularCurrencies";
import Cryptocurrencies from "../cryptocomponent/Cryptocurrencies";
import BitcoinUnits from "../cryptocomponent/BitcoinUnits";
import { useDispatch } from "react-redux";
import { DialogState } from "./appBar";

export default function FormDialog() {
  const { open, setopen } = useContext(DialogState);

  const [searchValue, setsearchValue] = useState<string>("");
  const filteredarray: fiat[] = fiatCurrency.filter(
    (e) =>
      e.name?.startsWith(capitalize(searchValue)) ||
      e.code?.startsWith(searchValue.toUpperCase())
  );
  const popularOnes: Array<cryptoCu | fiat> = popularCyrrencies.filter(
    (e) =>
      e.name?.startsWith(capitalize(searchValue)) ||
      e.symbol?.startsWith(searchValue)
  );
  const cryptoOne: Array<cryptoCu> = cryptoCurrencyUsed.filter(
    (e) =>
      e.name?.startsWith(capitalize(searchValue)) ||
      e.symbol?.startsWith(searchValue)
  );
  const bitsOne: Array<cryptoCu> = bitcoinUnits.filter(
    (e) =>
      e.name?.startsWith(capitalize(searchValue)) ||
      e.symbol?.startsWith(searchValue)
  );
  return (
    <Dialog
      scroll="paper"
      maxWidth="lg"
      PaperProps={{
        square: true,
        sx: {
          borderRadius: "10px",
          width: "848px",
          height: "500px",
        },
      }}
      onClose={() => {
        setopen(false);
      }}
      open={open}
      data-testid="language-list"
    >
      <DialogTitle>
        <Box display="flex" justifyContent="space-between">
          <h3>Select Currency</h3>
          <IconButton
            focusRipple={false}
            sx={{
              width: "50px",
              height: "50px",
              ":hover": {
                backgroundColor: "white",
                ":focus": {
                  backgroundColor: "white",
                },
              },
            }}
            data-testid="close"
            onClick={(e) => setopen(false)}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <InputBase
          value={searchValue}
          onChange={(e) => setsearchValue(e.target.value)}
          placeholder="search"
          sx={{
            height: "32px",
            width: "800px",
            fontSize: "12px",
            ":hover": {
              border: "1px double black",
            },
            "&.Mui-focused": {
              boxShadow: "rgb(239 242 245) 0px 0px 0px 4px",
              border: "1px double #3861FB",
            },

            backgroundColor: "#EFF2F5",
            position: "fixed",
            borderRadius: "8px",
            paddingLeft: "10px",
          }}
        />
      </DialogTitle>
      <DialogContent>
        <Box
          marginTop="50px"
          display="flex"
          flexDirection="column"
          width="800px"
          height="fit-content"
        >
          <PopularCurrencies currency={popularOnes} />
          <BitcoinUnits currency={bitsOne} />
          <FiatCurrencies {...{ currency: filteredarray }} />
          <Cryptocurrencies currency={cryptoOne} />
        </Box>
      </DialogContent>
    </Dialog>
  );
}

const Paragraph = styled("p")({
  color: "#A6B0C3",
  fontSize: "12px",
  margin: 0,
  paddingLeft: "10px",
});
export { Paragraph };
//  <FiatCurrencies />
//           <BitcoinUnits />
//           <Cryptocurrencies />
