import { actionTypes } from "@/stores/modules/entire/constants"

const initialState = {
  currentPage: 0,
  roomList: [],
  totalCount: 0,
  isLoading: false,
}
export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.payload }
    case actionTypes.CHANGE_ROOM_LIST:
      return { ...state, roomList: action.payload }
    case actionTypes.CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.payload }
    case actionTypes.CHANGE_LOADING:
      return { ...state, isLoading: action.payload }
    default:
      return state
  }
}
