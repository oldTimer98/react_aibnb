import { getEntireRoomList } from "@/services/modules/enitre"
import { actionTypes } from "@/stores/modules/entire/constants"

export const changeCurrentPageAction = payload => {
  return {
    type: actionTypes.CHANGE_CURRENT_PAGE,
    payload,
  }
}

export const changeRoomListAction = payload => {
  return {
    type: actionTypes.CHANGE_ROOM_LIST,
    payload,
  }
}
export const changeTotalCountAction = payload => {
  return {
    type: actionTypes.CHANGE_TOTAL_COUNT,
    payload,
  }
}

export const changeLoadingAction = payload => {
  return {
    type: actionTypes.CHANGE_LOADING,
    payload,
  }
}
export const fetchRoomListAction = (page = 0) => {
  console.log(page)
  return async dispatch => {
    // 获取最新的页码
    dispatch(changeCurrentPageAction(page))
    // 请求最新的数据
    dispatch(changeLoadingAction(true))
    const res = await getEntireRoomList(page * 20)
    dispatch(changeLoadingAction(false))
    // 2.获取到最新的数据, 保存redux的store中
    dispatch(changeRoomListAction(res.list))
    dispatch(changeTotalCountAction(res.totalCount))
  }
}
