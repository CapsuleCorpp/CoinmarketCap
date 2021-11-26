import { Box } from "@mui/system";
import React from "react";
import { fiat } from "../../util/currencies";
import FiatCurrency from "./FiatCurrency";
import { Paragraph } from "../AppBar/languageDialog";
interface arrayprops {
  currency: fiat[];
}
export default function FiatCurrencies({ currency }: arrayprops) {
  return currency.length !== 0 ? (
    <Box>
      <Paragraph>Fiat currencies</Paragraph>
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {currency.map((fiatCurrency: fiat) => {
          return <FiatCurrency {...fiatCurrency} />;
        })}
      </Box>
    </Box>
  ) : (
    <div></div>
  );
}
