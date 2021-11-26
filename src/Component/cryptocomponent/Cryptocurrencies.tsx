import { Box } from "@mui/system";
import React from "react";
import { cryptoCu } from "../../util/currencies";
import CryptoCurrency from "./CryptoCurrency";
import { Paragraph } from "../AppBar/languageDialog";
export interface cryptoOnes {
  currency: cryptoCu[];
}
export default function Cryptocurrencies({ currency }: cryptoOnes) {
  return currency.length !== 0 ? (
    <Box>
      <Paragraph>Cryptocurrencies</Paragraph>
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {currency.map((cryptoCurrency) => {
          return <CryptoCurrency {...cryptoCurrency} />;
        })}
      </Box>
    </Box>
  ) : (
    <div></div>
  );
}
