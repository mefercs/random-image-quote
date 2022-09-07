import { createSlice } from "@reduxjs/toolkit";
import colorsList from '../../data/colors'
const initialState = {
 colors: colorsList,
  index: 0, 
  color: 'grey'
}
const colorsSlice = createSlice( {
  name: "colors",
  initialState, 
  reducers:  {
    changeIndex: state => {
      let size = Object.keys(state.colors).length;
      state.index = Math.floor( Math.random() * size )
      state.color = state.colors[ state.index ]
    }
  }
})

export const { changeIndex } = colorsSlice.actions;
export default colorsSlice.reducer;
