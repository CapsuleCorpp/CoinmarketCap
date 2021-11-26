import axios from "axios";
import React from "react";

import { createContext, useEffect, useState } from "react";
import { Box, Button, Icon } from "@mui/material";
import { styled } from "@mui/system";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FormDialog from "./languageDialog";
import { useDispatch, useSelector } from "react-redux";
import Flag from "react-world-flags";
import { OpenInBrowser } from "@mui/icons-material";
interface cryptoInfo {
  total_cryptocurrencies: string;
  active_exchanges: string;
  total_market_cap: string;
  total_volume_24h: string;
  Dominance: {
    btc_dominance: string;
    eth_dominance: string;
  };
}
export default function AppBar() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<cryptoInfo>();
  const currency = useSelector((state: any) => state.reducer.currency);

  useEffect(() => {
    axios
      .get(
        "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest",
        {
          headers: {
            "X-CMC_PRO_API_KEY": "3d2d0d01-ba48-49d3-8c67-bd70e5ead140",
          },
        }
      )
      .then(({ data }) => {
        const {
          total_cryptocurrencies,
          active_exchanges,
          btc_dominance,
          eth_dominance,
        } = data.data;
        const { total_volume_24h, total_market_cap } = data.data.quote.USD;
        const cryptoInformation: cryptoInfo = {
          total_cryptocurrencies,
          active_exchanges,
          total_market_cap,
          total_volume_24h,
          Dominance: {
            btc_dominance,
            eth_dominance,
          },
        };

        setData(cryptoInformation);
      });
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "30px",
        display: "inline-flex",
        justifyContent: "start",
        borderBottom: "1px solid rgb(239, 242, 245)",
      }}
    >
      <DialogState.Provider
        value={{
          open: open,
          setopen: setOpen,
        }}
      >
        <FormDialog />
      </DialogState.Provider>
      <Box
        sx={{
          flexBasis: "70%",
          display: "inline-flex",
          justifyContent: "start",
          ml: "0px",
        }}
      >
        <Text data-testid="crypto">
          Crypto:
          <Bluespan>
            {" "}
            {data?.total_cryptocurrencies
              ? data?.total_cryptocurrencies
              : "loading.."}
          </Bluespan>
        </Text>
        <Text data-testid="Exchanges">
          Exchanges:{" "}
          <Bluespan>
            {data?.active_exchanges ? data?.active_exchanges : "loading ..."}
          </Bluespan>
        </Text>
        <Text data-testid="MarketCap">
          MarketCap:{" "}
          <Bluespan>
            {data?.total_market_cap ? data.total_market_cap : "loading..."}{" "}
          </Bluespan>{" "}
        </Text>
        <Text data-testid="Volume">
          Volume:{" "}
          <Bluespan>
            {" "}
            {data?.total_volume_24h ? data?.total_volume_24h : "loading"}
          </Bluespan>
        </Text>
        <Text data-testid="Dominance">
          Dominance:
          <Bluespan>
            BTC{" "}
            {data?.Dominance.btc_dominance
              ? data?.Dominance.btc_dominance
              : "loading"}{" "}
            ETH{" "}
            {data?.Dominance.eth_dominance
              ? data?.Dominance.eth_dominance
              : "loading"}
          </Bluespan>
        </Text>
      </Box>
      <Box
        sx={{
          flexBasis: "30%",
          display: "inline-flex",
          justifyContent: "flex-end",
          alignContent: "center",
          marginRight: "20px",
        }}
      >
        <Button
          data-testid="language-button"
          sx={{ width: "35px" }}
          disableRipple
        >
          <ButtonText> English</ButtonText>
          <ArrowDropDownIcon sx={{ fontSize: 15 }} />
        </Button>
        <Button
          onClick={() => {
            setOpen(true);
          }}
          data-testid="language-button"
          disableRipple
        >
          <Icon>
            <Flag code={currency.substring(0, 2)} />
          </Icon>
          <ButtonText> {currency}</ButtonText>
          <ArrowDropDownIcon sx={{ fontSize: 15 }} />
        </Button>
      </Box>
    </Box>
  );
}

const Bluespan = styled("span")({
  color: "#001FEE",
  fontSize: "11px",
});

const Text = styled("p")({
  fontFamily: "serif",
  fontSize: "11px",
  marginLeft: "10px",
  color: "#58667E",
});

const ButtonText = styled("p")({
  color: "#171924",
  fontSize: "10px",
  fontWeight: 900,
});

const DialogState = createContext({
  open: false,
  setopen: (close: boolean) => {},
});

export { DialogState };
