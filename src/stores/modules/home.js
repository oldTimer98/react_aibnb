import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
  getHomeHotRecommendData,
  getHomeLongforData,
  getHomePlusData,
} from "@/services/modules/home"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchHomeDataAction = createAsyncThunk("fetchData", async (extraInfo, { dispatch }) => {
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfo(res))
  })
  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfo(res))
  })
  getHomeDiscountData().then(res => {
    dispatch(changeDiscountInfo(res))
  })
  getHomeHotRecommendData().then(res => {
    dispatch(changeRecommendInfo(res))
  })
  getHomeLongforData().then(res => {
    dispatch(changeLongForInfo(res))
  })
  getHomePlusData().then(res => {
    dispatch(changePlusInfo(res))
  })
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longForInfo: {},
    plusInfo: {},
  },
  reducers: {
    changeGoodPriceInfo(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfo(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfo(state, { payload }) {
      state.discountInfo = payload
    },
    changeRecommendInfo(state, { payload }) {
      state.recommendInfo = payload
    },
    changeLongForInfo(state, { payload }) {
      state.longForInfo = payload
    },
    changePlusInfo(state, { payload }) {
      state.plusInfo = payload
    },
  },
})
export const {
  changeGoodPriceInfo,
  changeHighScoreInfo,
  changeDiscountInfo,
  changeRecommendInfo,
  changeLongForInfo,
  changePlusInfo,
} = homeSlice.actions
export default homeSlice.reducer
