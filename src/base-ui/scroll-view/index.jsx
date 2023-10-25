import React, { memo, useEffect, useRef, useState } from "react"
import { ViewWrapper } from "./style"
import IconArrowLeft from "@/assets/svg/icon-arrow-left"
import IconArrowRight from "@/assets/svg/icon-arrow-right"

const ScrollView = memo(props => {
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const ScrollContentRef = useRef()
  const totalDistanceRef = useRef()
  const posIndexRef = useRef(0)

  useEffect(() => {
    const totalScrollWidth = ScrollContentRef.current.scrollWidth // 一共可以滚动的宽度
    const ClientWidth = ScrollContentRef.current.clientWidth //本身占据的宽度
    const totalInstance = totalScrollWidth - ClientWidth
    totalDistanceRef.current = totalInstance
    const offsetLeft = ScrollContentRef.current.children[posIndexRef.current].offsetLeft
    setShowRight(totalInstance > offsetLeft)
  }, [props.children])
  function handlerBtn(val) {
    const newIndex = val ? posIndexRef.current + 1 : posIndexRef.current - 1
    const offsetLeft = ScrollContentRef.current.children[newIndex].offsetLeft
    ScrollContentRef.current.style.transform = `translate(-${offsetLeft}px)`
    posIndexRef.current = newIndex
    // 是否继续显示右侧的按钮
    setShowRight(totalDistanceRef.current > offsetLeft)
    setShowLeft(offsetLeft > 0)
  }
  return (
    <ViewWrapper>
      {showLeft && (
        <div className="control left" onClick={e => handlerBtn(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className="control right" onClick={e => handlerBtn(true)}>
          <IconArrowRight />
        </div>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={ScrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

export default ScrollView
