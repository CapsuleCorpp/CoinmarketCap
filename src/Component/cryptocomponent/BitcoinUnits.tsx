import { Box } from "@mui/system";
import React from "react";
import { bitcoinUnits } from "../../util/currencies";
import { cryptoOnes } from "./Cryptocurrencies";
import CryptoCurrency from "./CryptoCurrency";
import { Paragraph } from "../AppBar/languageDialog";

export default function BitcoinUnits({ currency }: cryptoOnes) {
  return currency.length !== 0 ? (
    <Box>
      <Paragraph>Bitcoin Units</Paragraph>
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {bitcoinUnits.map((fiatCurrency) => {
          return <CryptoCurrency {...fiatCurrency} />;
        })}
      </Box>
    </Box>
  ) : (
    <div></div>
  );
}
