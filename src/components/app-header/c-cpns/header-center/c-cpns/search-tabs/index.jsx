import classNames from "classnames"
import { ViewWrapper } from "./style"
import PropTypes from "prop-types"
import React, { memo, useState } from "react"

const SearchTabs = memo(props => {
  const { titles, tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemHandleClick = index => {
    setCurrentIndex(index)
    if (tabClick) tabClick(index)
  }
  return (
    <ViewWrapper>
      {titles.map((item, index) => {
        return (
          <div
            className={classNames("item", { active: currentIndex === index })}
            key={item}
            onClick={e => itemHandleClick(index)}
          >
            <span className="text">{item}</span>
            <span className="bottom"></span>
          </div>
        )
      })}
    </ViewWrapper>
  )
})

SearchTabs.propTypes = {
  titles: PropTypes.array,
}

export default SearchTabs
