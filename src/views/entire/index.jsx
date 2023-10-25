import { fetchRoomListAction } from "@/stores/modules/entire/actionCreator"
import { changeHeadConfig } from '@/stores/modules/main'
import EntireRooms from "@/views/entire/c-cpns/enitre-rooms"
import EntireFilter from "@/views/entire/c-cpns/entire-filter"
import EntirePagination from "@/views/entire/c-cpns/entire-pagination"
import { ViewWrapper } from "@/views/entire/style"
import React, { memo, useEffect } from "react"
import { useDispatch } from "react-redux"

const Entire = memo(() => {
  const dispatch = useDispatch()
  //请求数据
  useEffect(() => {
    dispatch(fetchRoomListAction())
    dispatch(changeHeadConfig({ isFixed: true, topAlpha: false }))
  }, [dispatch])
  return (
    <ViewWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </ViewWrapper>
  )
})

export default Entire
