import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'light',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    light: (state) => {
      state.value = 'light'
    },
    dark: (state) => {
      state.value = 'dark'
    }
  },
})

// Action creators are generated for each case reducer function
export const { light, dark } = themeSlice.actions

export default themeSlice.reducer