import PropTypes from "prop-types"
import React, { memo } from "react"
import { SectionRoomsWrapper } from "./style"
import RoomItem from "@/components/room-item"
const SectionRooms = memo(props => {
  const { list = [], itemWidth } = props
  return (
    <SectionRoomsWrapper>
      {list.slice(0, 8)?.map(item => {
        return <RoomItem key={item.id} itemData={item} itemWidth={itemWidth}></RoomItem>
      })}
    </SectionRoomsWrapper>
  )
})

SectionRooms.propTypes = {
  list: PropTypes.array,
  itemWidth: PropTypes.string,
}
export default SectionRooms
