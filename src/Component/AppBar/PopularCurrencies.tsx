import { Box } from "@mui/system";
import React from "react";

import { cryptoCu, fiat } from "../../util/currencies";
import CryptoCurrency from "../cryptocomponent/CryptoCurrency";
import FiatCurrency from "../Fiatcomponent/FiatCurrency";
import { Paragraph } from "./languageDialog";
interface popular {
  currency: Array<cryptoCu | fiat>;
}
export default function PopularCurrencies({ currency }: popular) {
  return currency.length !== 0 ? (
    <Box>
      <Paragraph> Popular currencies</Paragraph>
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {currency.map((currency) => {
          return currency.type === "fiat" ? (
            <FiatCurrency {...currency} />
          ) : (
            <CryptoCurrency {...currency} />
          );
        })}
      </Box>
    </Box>
  ) : (
    <div></div>
  );
}
