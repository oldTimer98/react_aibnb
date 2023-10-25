import React, { memo, useRef, useState } from "react"
import { HeaderWrapper, SearchAreaWrapper } from "./style"
import HeaderLeft from "@/components/app-header/c-cpns/header-left"
import HeaderCenter from "@/components/app-header/c-cpns/header-center"
import HeaderRight from "@/components/app-header/c-cpns/header-right"
import { ThemeProvider } from "styled-components"
import { shallowEqual, useSelector } from "react-redux"
import classNames from "classnames"
import { useScrollPosition } from "@/hooks/useScrollPosition"
const AppHeader = memo(() => {
  const [isSearch, setIsSearch] = useState(false)
  // 从redux中获取数据
  const { headConfig } = useSelector(state => {
    return {
      headConfig: state.main.headConfig,
    }
  }, shallowEqual)

  /** 监听滚动的监听 */
  const { scrollY } = useScrollPosition()
  const prevY = useRef(0)
  // 在正常情况的情况下(搜索框没有弹出来), 不断记录值
  if (!isSearch) prevY.current = scrollY
  // 在弹出搜索功能的情况, 滚动的距离大于之前记录的距离的30
  if (isSearch && Math.abs(prevY.current - scrollY) > 30) setIsSearch(false)

  const { isFixed, topAlpha } = headConfig
  /** 透明度的逻辑 */
  const isAlpha = topAlpha && scrollY === 0
  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            <HeaderCenter isSearch={isAlpha || isSearch} searchBarClick={e => setIsSearch(true)} />
            <HeaderRight />
          </div>
          <SearchAreaWrapper isSearch={isAlpha || isSearch} />
        </div>
        {isSearch && <div className="cover" onClick={e => setIsSearch(true)}></div>}
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader
