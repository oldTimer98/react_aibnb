import RoomItem from "@/components/room-item"
import { ViewWrapper } from "@/views/entire/c-cpns/enitre-rooms/style"
import React, { memo, useCallback } from "react"
import { shallowEqual, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const EntireRooms = memo(props => {
  /** 从redux中获取roomList数据 */
  const { roomList, totalCount, isLoading } = useSelector(state => {
    return {
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading,
    }
  }, shallowEqual)
  const navigate = useNavigate()
  const itemClick = useCallback(
    item => {
      navigate("/detail", { state: { itemData: item } })
    },
    [navigate]
  )

  return (
    <ViewWrapper>
      {totalCount && <h2 className="title">{totalCount}多处住所</h2>}
      <div className="list">
        {roomList.map(item => {
          return <RoomItem itemData={item} itemWidth="20%" key={item._id} itemClick={itemClick} />
        })}
      </div>
      {isLoading && <div className="cover"></div>}
    </ViewWrapper>
  )
})

export default EntireRooms
