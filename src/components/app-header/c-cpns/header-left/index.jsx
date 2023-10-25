import React, { memo } from "react"
import { LeftWrapper } from "@/components/app-header/c-cpns/header-left/style"
import IconLogo from "@/assets/svg/icon_logo"
import { useNavigate } from "react-router-dom"
const HeaderLeft = memo(() => {
  const navigate = useNavigate()
  function logoClickHandle() {
    navigate("/home")
  }
  return (
    <LeftWrapper color="red">
      <div className="logo" onClick={logoClickHandle}>
        <IconLogo></IconLogo>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft
