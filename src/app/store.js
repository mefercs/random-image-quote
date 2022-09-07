import { configureStore } from "@reduxjs/toolkit";
import quoteSlice from '../features/quote/quoteSlice'
import colorsSlice from "../features/colors/colorsSlice";
const store = configureStore( {
  reducer:{
    quote: quoteSlice,
    colors: colorsSlice
  }
  }
)

export default store; 

