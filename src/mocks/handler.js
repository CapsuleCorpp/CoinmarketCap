import {rest} from 'msw'
export const handlers = [
  rest.get("https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest", (req, res, ctx) => {
    // Check if the user is authenticated in this session
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        data :{
          total_cryptocurrencies :"14121",
          active_exchanges: "430" ,
          btc_dominance :"15",
          eth_dominance:"15",
          quote: {
            "USD" :{
              total_volume_24h :"83186318273" ,
              total_market_cap :"2452343576667"
            }
          }
        
         
      }}),
    )
  }),
]

