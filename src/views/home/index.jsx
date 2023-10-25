import React, { memo, useEffect } from "react"
import { useDispatch, useSelector, shallowEqual } from "react-redux"

import { HomeWrapper } from "@/views/home/style"
import HomeBanner from "@/views/home/c-cpns/home-banner"
import HomeSectionV1 from "@/views/home/c-cpns/home-section-v1"
import { fetchHomeDataAction } from "@/stores/modules/home"
import HomeSectionV2 from "@/views/home/c-cpns/home-section-v2"
import { IsEmptyObject } from "@/utils"
import HomeLongFor from "@/views/home/c-cpns/home-longfor"
import HomeSectionV3 from "@/views/home/c-cpns/home-section-v3"
import { changeHeadConfig } from "@/stores/modules/main"
const Home = memo(() => {
  /** 从redux中获取数据 */
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longForInfo, plusInfo } = useSelector(
    state => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longForInfo: state.home.longForInfo,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  )
  /** 派发异步的事件: 发送网络请求 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeHeadConfig({ isFixed: true, topAlpha: true }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      <div className="content">
        111
        {IsEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {IsEmptyObject(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}
        {IsEmptyObject(longForInfo) && <HomeLongFor infoData={longForInfo} />}
        {IsEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {IsEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        {IsEmptyObject(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home
