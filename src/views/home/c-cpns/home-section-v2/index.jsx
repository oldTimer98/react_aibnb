import React, { memo, useCallback, useState } from "react"
import { HomeSectionV2Wrapper } from "./style"
import SectionHeader from "@/components/section-header"
import SectionRooms from "@/components/section-rooms"
import SectionTabs from "@/components/section-tabs"
import SectionFooter from "@/components/section-footer"
const HomeSectionV2 = memo(props => {
  const { infoData } = props

  // 初始化的城市
  const initialName = Object.keys(infoData?.dest_list ?? {})[0]
  const [name, setName] = useState(initialName)
  // 第二种方法不建议使用
  // useEffect(() => {
  //   setName("xxxxx")
  // }, [infoData])
  // 事件处理函数优化
  const tabClick = useCallback(name => {
    setName(name)
  }, [])
  return (
    <HomeSectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
      <SectionTabs tabsList={infoData.dest_address} tabClick={tabClick} />
      <SectionRooms list={infoData?.dest_list?.[name]} itemWidth="33.33%" />
      <SectionFooter name={name} />
    </HomeSectionV2Wrapper>
  )
})

export default HomeSectionV2
