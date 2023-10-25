import ScrollView from "@/base-ui/scroll-view"
import RoomItem from "@/components/room-item"
import SectionFooter from "@/components/section-footer"
import SectionHeader from "@/components/section-header"
import { ViewWrapper } from "@/views/home/c-cpns/home-section-v3/style"
import React, { memo } from "react"

const HomeSectionV3 = memo(props => {
  const { infoData } = props
  return (
    <ViewWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="room-list">
        <ScrollView>
          {infoData.list.map(item => {
            return <RoomItem itemData={item} itemWidth="20%" key={item.id} />
          })}
        </ScrollView>
      </div>
      <SectionFooter name="plus" />
    </ViewWrapper>
  )
})

export default HomeSectionV3
