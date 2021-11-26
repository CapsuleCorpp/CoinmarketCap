 interface fiat {
    type: string,
    name :string,
    code :string ,
    countryFlag:string
}
interface cryptoCu{
 type: string ,
 name: string ,
 code :string,
 symbol :string

}

const fiatCurrency :fiat[]=[
    {
     type : "fiat",
     name :"United States Dollar",
     code :"USD",
     countryFlag :'USA'
    },
    {
    type:  "fiat",
	name: "Euro",
	code: "EUR",
    countryFlag :"EU"
    },
        {
     type : "fiat",
     name :"Pound Sterling",
     code :"GBP",
     countryFlag :'GB'
    },
     {
    type:  "fiat",
	name: "Canadian Dollar",
	code: "CAD",
    countryFlag :"CA"
    },
     {
    type:  "fiat",
	name: "Norwegian Krone",
	code: "NOK",
    countryFlag :"NO"

    },
     {
    type:  "fiat",
	name: "New Zealand Dollar",
	code: "NZD",
    countryFlag :"NZ"

    },
     {
    type:  "fiat",
	name: "Swedish Krona",
	code: "SEK",
    countryFlag :"SE"

    },
     {
    type:  "fiat",
	name: "Russian Ruble",
	code: "RUB",
    countryFlag :"RU"

    },
     {
    type:  "fiat",
	name: "Turkish Lira",
	code: "TRY",
    countryFlag :"TR"

    },
     {
    type:  "fiat",
	name: "Moroccan Dirham",
	code: "MAD",
    countryFlag :"MA"

    },
     {
    type:  "fiat",
	name: "United Arab Emirates Dirham",
	code: "AED",
    countryFlag :"AE"
    }, {
    type:  "fiat",
	name: "Mexican Peso",
	code: "MXN",
    countryFlag :"MX"
    
    },
     {
    type:  "fiat",
	name: "Polish Złoty",
	code: "PLN",
    countryFlag :"PL"
    },



]
const cryptoCurrencyUsed : cryptoCu[]=[
    {
    type :"crypto" ,
    name: "Bitcoin",
    code :"BTC",
    symbol :"btc" 
    },
     {
    type :"crypto" ,
    name: "Ethereum",
    code :"ETH",
    symbol :"eth" 
    },
     {
    type :"crypto" ,
    name: "Cardano",
    code :"ADA",
    symbol :"ada" 
    },
     {
    type :"crypto" ,
    name: "Binance coin",
    code :"BNB",
    symbol :"bnb" 
    },
     {
    type :"crypto" ,
    name: "Polkadot",
    code :"DOT",
    symbol :"dot" 
    },
     {
    type :"crypto" ,
    name: "XRP",
    code :"XRP",
    symbol :"xrp" 
    },
     {
    type :"crypto" ,
    name: "Chainlink",
    code :"LINK",
    symbol :"link" 
    },
     {
    type :"crypto" ,
    name: "LiteCoin",
    code :"LTC",
    symbol :"ltc" 
    },
     {
    type :"crypto" ,
    name: "Stellar",
    code :"XLM",
    symbol :"xlm" 
    },
     {
    type :"crypto" ,
    name: "Bitcoin Cash",
    code :"BCH",
    symbol :"bch" 
    },
     {
    type :"crypto" ,
    name: "Uniswap",
    code :"UNI",
    symbol :"uni" 
    },
     {
    type :"crypto" ,
    name: "Dogecoin",
    code :"DOGE",
    symbol :"doge" 
    },



]
 const popularCyrrencies=[
       {
     type : "fiat",
     name :"United States Dollar",
     code :"USD",
     countryFlag :'US'
    },
       {
    type:  "fiat",
	name: "Euro",
	code: "EUR",
    countryFlag :"EU"
    },
     {
     type : "fiat",
     name :"Pound Sterling",
     code :"GBP",
     countryFlag :'GB'
    },
      {
    type :"crypto" ,
    name: "Bitcoin",
    code :"BTC",
    symbol :"btc" 
    },
     {
    type :"crypto" ,
    name: "Ethereum",
    code :"ETH",
    symbol :"eth" 
    },

 ]
 const bitcoinUnits :cryptoCu[]=[
         {
    type :"crypto" ,
    name: "Bits",
    code :"BITS",
    symbol :"bits" 
    },
        {
    type :"crypto" ,
    name: "Satoshi",
    code :"SATS",
    symbol :"sats" 
    },


 ]


export {fiatCurrency ,cryptoCurrencyUsed ,popularCyrrencies ,bitcoinUnits}
export type {fiat ,cryptoCu}