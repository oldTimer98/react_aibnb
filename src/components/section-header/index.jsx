import PropTypes from "prop-types"
import React, { memo } from "react"
import { SectionHeaderWrapper } from "./style"
const SectionHeader = memo(props => {
  const { title, subtitle } = props
  return (
    <SectionHeaderWrapper>
      <h2 className="title">{title}我是测试测试</h2>
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </SectionHeaderWrapper>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default SectionHeader
