import { createAction, createAsyncThunk, createReducer, createSlice  } from "@reduxjs/toolkit"
import axios from "axios"

const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',

  async (currency : string, thunkAPI) => {
  const data=await axios
      .get(
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
        {
          headers: {
            "X-CMC_PRO_API_KEY": "3d2d0d01-ba48-49d3-8c67-bd70e5ead140",
          },
          params: {
            convert: currency,
          },
        }
      )
      const s=data.data.data
      console.log(s)
      return s

  }
)


const usersSlice = createSlice({
  name: 'users',
  initialState: { currency :"USD", entities: []  },

  reducers: {
    currencySelected: (state , action) => {
      console.log(action),
      console.log(state),
      state.currency=action.payload.currency
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      console.log(state)
      console.log(action)
      console.log(action.payload)
      state.entities.push(action.payload)
    })
  },
})

// Later, dispatch the thunk as needed in the app
const { reducer ,actions} =usersSlice
 const { currencySelected } = actions
export {fetchUserById ,reducer,currencySelected}
