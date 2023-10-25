import { ViewWrapper } from "@/components/longfor-item/style"
import React, { memo } from "react"

const LongForItem = memo(props => {
  const { itemData } = props
  return (
    <ViewWrapper>
      <div className="inner">
        <div className="item-info">
          <img className="cover" src={itemData.picture_url} alt="" />
          <div className="bg-cover"></div>
          <div className="info">
            <div className="city">{itemData.city}</div>
            <div className="price">均价{itemData.price}</div>
          </div>
        </div>
      </div>
    </ViewWrapper>
  )
})

export default LongForItem
