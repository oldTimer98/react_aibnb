import PropTypes from "prop-types"
import React, { memo, useState } from "react"
import { ViewWrapper } from "./style"
import PictureBrowser from "@/base-ui/picture-browser"
const DetailPictures = memo(props => {
  const { picture_urls } = props
  const [showBrowser, setShowBrowser] = useState(false)
  const closeClick = () => {
    setShowBrowser(false)
  }
  return (
    <ViewWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={e => setShowBrowser(true)}>
            <img src={picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {picture_urls?.slice(1, 5).map(item => {
            return (
              <div className="item" key={item} onClick={e => setShowBrowser(true)}>
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="show-btn" onClick={e => setShowBrowser(true)}>
        显示照片
      </div>
      {showBrowser && <PictureBrowser pictureUrls={picture_urls} closeClick={closeClick} />}
    </ViewWrapper>
  )
})

DetailPictures.propTypes = {
  picture_urls: PropTypes.array,
}

export default DetailPictures
