import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isCartOpen: false,
    cart: [],
    items: []
}

export const crateSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },

        addTocart: (state, action) => {
            state.cart = [...state.cart, action.payload.item]
            localStorage.setItem('myData',JSON.stringify(state.cart) )
        },
        removeFromCar: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)

        },
        increaseCount: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    item.count++
                }
                return item

            })
        },
        decreaseCount: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id && item.count > 1) {
                    item.count--;
                }
                return item
            })
        },
        setCartIsOpen: (state) => {
            state.isCartOpen = !state.isCartOpen;
        }

    }
})

export const {
    setItems,
    addTocart,
    increaseCount,
    decreaseCount,
    setCartIsOpen,
    removeFromCar
} = crateSlice.actions;

export default crateSlice.reducer;