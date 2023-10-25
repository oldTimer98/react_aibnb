import { configureStore } from "@reduxjs/toolkit"
import homeReducer from "./modules/home"
import entireReducer from "./modules/entire"
import mainReducer from "./modules/main"
const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    main: mainReducer,
  },
})

export default store
