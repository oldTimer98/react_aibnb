import { ViewWrapper } from "@/views/entire/c-cpns/entire-filter/style"
import React, { memo, useState } from "react"
import filterData from "@/assets/data/filter_data.json"
import classNames from "classnames"
const EntireFilter = memo(props => {
  const [checkList, setCheckList] = useState([])
  function handlerClick(item) {
    const list = [...checkList]
    if (checkList.includes(item)) {
      const index = list.findIndex(i => item === i)
      list.splice(index, 1)
    } else {
      list.push(item)
    }
    setCheckList(list)
  }
  return (
    <ViewWrapper>
      <div className="filter">
        {filterData.map(item => {
          return (
            <div
              className={classNames("item", { active: checkList.includes(item) })}
              key={item}
              onClick={e => handlerClick(item)}
            >
              {item}
            </div>
          )
        })}
      </div>
    </ViewWrapper>
  )
})

export default EntireFilter
