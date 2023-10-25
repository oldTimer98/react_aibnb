import { RoomItemWrapper } from "@/components/room-item/style"
import PropTypes from "prop-types"
import { memo, useRef, useState } from "react"
import Rating from "@mui/material/Rating"
import IconArrowLeft from "@/assets/svg/icon-arrow-left"
import IconArrowRight from "@/assets/svg/icon-arrow-right"
import Indicator from "@/base-ui/indicator"
import { Carousel } from "antd"
import classNames from "classnames"
import { shallowEqual, useSelector } from "react-redux"
const RoomItem = memo(props => {
  const { itemData, itemWidth = "25%", itemClick } = props
  const [selectIndex, setSelectIndex] = useState(0)
  const sliderRef = useRef()
  //切换的时候隐藏指示器
  const { isLoading } = useSelector(state => {
    return {
      isLoading: state.entire.isLoading,
    }
  }, shallowEqual)
  //事件处理的逻辑
  const controlClickHandle = (isNext = true, e) => {
    // 切换上一页和下一页
    isNext ? sliderRef.current.next() : sliderRef.current.prev()

    // 记录当前的索引
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
    const length = itemData.picture_urls.length
    if (newIndex < 0) newIndex = length - 1
    if (newIndex > length - 1) newIndex = 0
    setSelectIndex(newIndex)
    //阻止事件冒泡
    e.stopPropagation()
  }
  const itemClickHandler = item => {
    if (itemClick) itemClick(item)
  }
  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  )
  const sliderElement = (
    <div className="slider">
      <div className="control">
        <div className="btn left" onClick={e => controlClickHandle(false, e)}>
          <IconArrowLeft width="30" height="30" />
        </div>
        <div className="btn right" onClick={e => controlClickHandle(true, e)}>
          <IconArrowRight width="30" height="30" />
        </div>
      </div>
      {!isLoading && (
        <div className="indicator">
          <Indicator selectIndex={selectIndex}>
            {itemData?.picture_urls?.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <span
                    className={classNames("dot", {
                      active: selectIndex === index,
                    })}
                  ></span>
                </div>
              )
            })}
          </Indicator>
        </div>
      )}
      <Carousel dots={false} ref={sliderRef}>
        {itemData?.picture_urls?.map(item => {
          return (
            <div className="cover" key={item}>
              <img src={item} alt="" />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
  return (
    <RoomItemWrapper itemWidth={itemWidth} onClick={e => itemClickHandler(itemData)}>
      <div className="inner">
        {!itemData.picture_urls ? pictureElement : sliderElement}
        <div className="desc">{itemData?.verify_info?.messages.join(" · ")}</div>
        <div className="name">{itemData?.name}</div>
        <div className="price">¥{itemData?.price} 晚</div>
        <div className="bottom">
          <Rating
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: "12px", color: "#00848A", marginRight: "3px" }}
          />
          <span className="count">{itemData?.reviews_count}</span>
          {itemData.bottom_info && <span>·{itemData?.bottom_info?.content}</span>}
        </div>
      </div>
    </RoomItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string,
}

export default RoomItem
