import { createSlice } from "@reduxjs/toolkit"

export const mainSlice = createSlice({
  name: "main",
  initialState: {
    headConfig: {
      isFixed: false,
      topAlpha: false,
    },
  },
  reducers: {
    changeHeadConfig(state, { payload }) {
      state.headConfig = payload
    },
  },
})
export const { changeHeadConfig } = mainSlice.actions
export default mainSlice.reducer
