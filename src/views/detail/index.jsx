import { changeHeadConfig } from "@/stores/modules/main"
import DetailInfos from "@/views/detail/c-cpns/detail-infos"
import DetailPictures from "@/views/detail/c-cpns/detail-pictures"
import { ViewWrapper } from "@/views/detail/style"
import React, { memo, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom"

const Detail = memo(() => {
  const { state } = useLocation()
  const { itemData } = state
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeadConfig({ isFixed: false, topAlpha: false }))
  }, [dispatch])
  return (
    <ViewWrapper>
      <DetailPictures picture_urls={itemData?.picture_urls} />
      <DetailInfos itemData={itemData} />
    </ViewWrapper>
  )
})

export default Detail
