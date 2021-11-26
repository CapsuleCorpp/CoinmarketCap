import { rest } from "msw";
import AppBar from "../Component/AppBar/appBar";
import {
  render,
  fireEvent,
  screen,
  waitFor,
  act,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import axios from "axios";
import { server } from "../mocks/server";
import FormDialog from "../Component/AppBar/languageDialog";

describe("testing App bar details ", () => {
  beforeEach(async () => {
    render(<AppBar />);
    await act(async () => {
      await axios.get(
        "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest"
      );
    });
  });

  it("testing crypto information", async () => {
    const crypto = await waitFor(() => screen.getByTestId("crypto"));

    expect(crypto).toHaveTextContent("Crypto: 14121");
  });
  it("testing exchange info", async () => {
    const Exchange = await waitFor(() => screen.getByTestId("Exchanges"));

    expect(Exchange).toHaveTextContent("Exchanges: 430");
  });
  it("testing MarketCap info", async () => {
    const MarketCap = await waitFor(() => screen.getByTestId("MarketCap"));

    expect(MarketCap).toHaveTextContent("MarketCap: 2452343576667");
  });
  it("testing Volume info", async () => {
    const Volume = await waitFor(() => screen.getByTestId("Volume"));

    expect(Volume).toHaveTextContent("Volume: 83186318273");
  });
  it("testing EthGas info", async () => {
    const Dominance = await waitFor(() => screen.getByTestId("Dominance"));

    expect(Dominance).toHaveTextContent("Dominance:BTC 15 ETH 15");
  });
});
describe("testing Buttons", () => {
  it("dialog should pop", async () => {
    await render(<AppBar />);

    const LanguageButton = screen.getByTestId("language-button");
    fireEvent.click(LanguageButton);
    const LanguageList = screen.getByTestId("language-list");
    expect(LanguageList).toBeInTheDocument();
  });
});
