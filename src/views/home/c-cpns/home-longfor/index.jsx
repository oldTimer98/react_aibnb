import ScrollView from "@/base-ui/scroll-view"
import LongForItem from "@/components/longfor-item"
import SectionHeader from "@/components/section-header"
import { ViewWrapper } from "@/views/home/c-cpns/home-longfor/style"
import React, { memo } from "react"

const HomeLongFor = memo(props => {
  const { infoData } = props
  return (
    <ViewWrapper>
      <SectionHeader title={infoData?.title} subtitle={infoData?.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {infoData.list.map(item => {
            return <LongForItem itemData={item} key={item.city} />
          })}
        </ScrollView>
      </div>
    </ViewWrapper>
  )
})


export default HomeLongFor
