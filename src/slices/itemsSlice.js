import { createSlice } from "@reduxjs/toolkit";
import products from '../../products.json';

const initialState = {
  items: [],
  shoppingCart: [],
  favorites: [],
  profile : {}
}

const itemsSlice = createSlice({
  name: "items",
  initialState: initialState,
  reducers: {
    fetchItems: (state) => {
      state.items = [...products]
    },
    addToShoppingCart: (state, action) => {
      state.shoppingCart = [...state.shoppingCart, action.payload]
    }
  }
})

export const { fetchItems, addToShoppingCart } = itemsSlice.actions

export default itemsSlice.reducer