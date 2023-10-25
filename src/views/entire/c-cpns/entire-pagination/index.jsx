import { ViewWrapper } from "@/views/entire/c-cpns/entire-pagination/style"
import React, { memo } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import Pagination from "@mui/material/Pagination"
import { fetchRoomListAction } from "@/stores/modules/entire/actionCreator"
const EntirePagination = memo(props => {
  const { totalCount, roomList, currentPage } = useSelector(state => {
    return {
      totalCount: state.entire.totalCount,
      roomList: state.entire.roomList,
      currentPage: state.entire.currentPage,
    }
  }, shallowEqual)
  // 小算法:必须掌握
  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20
  const dispatch = useDispatch()
  /** 事件处理的逻辑 */
  const pageChangeHandle = (e, pageCount) => {
    // 点击后回到顶部
    window.scrollTo(0, 0)
    // 更新最新的页码: redux => currentPage
    dispatch(fetchRoomListAction(pageCount - 1))
  }
  return (
    <ViewWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination count={totalPage} onChange={pageChangeHandle} />
          <div className="desc">
            第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个
          </div>
        </div>
      )}
    </ViewWrapper>
  )
})

export default EntirePagination
