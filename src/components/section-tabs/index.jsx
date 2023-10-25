import ScrollView from "@/base-ui/scroll-view"
import { SectionTabsWrapper } from "@/components/section-tabs/style"
import classNames from "classnames"
import React, { memo, useState } from "react"

const SectionTabs = memo(props => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { tabsList = [], tabClick } = props
  // 切换index
  const handleClick = (index, name) => {
    tabClick(name)
    setCurrentIndex(index)
  }
  return (
    <SectionTabsWrapper>
      <ScrollView>
        {tabsList.map((item, index) => {
          return (
            <div
              key={index}
              className={classNames("item", { active: currentIndex === index })}
              onClick={e => handleClick(index, item.name)}
            >
              {item.name}
            </div>
          )
        })}
      </ScrollView>
    </SectionTabsWrapper>
  )
})

export default SectionTabs
