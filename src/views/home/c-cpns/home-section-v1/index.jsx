import React, { memo } from "react"
import PropTypes from "prop-types"
import { HomeSectionV1Wrapper } from "./style"
import SectionHeader from "@/components/section-header"
import SectionRooms from "@/components/section-rooms"
import SectionFooter from '@/components/section-footer'
const HomeSectionV1 = memo(props => {
  const { infoData } = props
  return (
    <HomeSectionV1Wrapper>
      <SectionHeader title={infoData?.title} subtitle={infoData?.subtitle}></SectionHeader>
      <SectionRooms list={infoData?.list} itemWidth="25%" />
      <SectionFooter />
    </HomeSectionV1Wrapper>
  )
})
HomeSectionV1.prototypes = {
  infoData: PropTypes.object,
}
export default HomeSectionV1
