import React, { memo } from "react"

import footerData from "@/assets/data/footer.json"
import { AppFooterWrapper } from "@/components/app-footer/style"
const AppFooter = memo(() => {
  return (
    <AppFooterWrapper>
      <div className="wrapper">
        <div className="service">
          {footerData.map(item => (
            <div className="item" key={item.name}>
              <div className="name">{item.name}</div>
              <div className="list">
                {item.list.map(it => {
                  return (
                    <div className="it" key={it}>
                      {it}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="statement">
          © 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 · 全国旅游投诉渠道 12301
        </div>
      </div>
    </AppFooterWrapper>
  )
})

export default AppFooter
