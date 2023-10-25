import React, { memo, useEffect, useState } from "react"
import { RightWrapper } from "@/components/app-header/c-cpns/header-right/style"
import GlobalLogo from "@/assets/svg/global_logo"
import MenuLogo from "@/assets/svg/menu_logo"
import AvaterLogo from "@/assets/svg/avater_logo"
const HeaderRight = memo(() => {
  const [PanelShow, setPanelShow] = useState(false)
  // 副作用函数
  useEffect(() => {
    function changePanel() {
      setPanelShow(false)
    }
    window.addEventListener("click", changePanel, true)
    return () => {
      window.removeEventListener("click", changePanel, true)
    }
  }, [])
  // 修改函数
  function showPanel() {
    setPanelShow(true)
  }
  return (
    <RightWrapper>
      <div className="text">
        <span>登录</span>
        <span>注册</span>
      </div>
      <div className="logo">
        <GlobalLogo></GlobalLogo>
      </div>
      <button className="profile" onClick={showPanel}>
        <div className="menu">
          <MenuLogo></MenuLogo>
        </div>
        <div className="avatar">
          <AvaterLogo></AvaterLogo>
        </div>
        {PanelShow && (
          <div className="panel">
            <div className="top">
              <div>注册</div>
              <div>登录</div>
            </div>
            <div className="bottom">
              <div>出租房源</div>
              <div>开展体验</div>
              <div>帮助</div>
            </div>
          </div>
        )}
      </button>
    </RightWrapper>
  )
})

export default HeaderRight
