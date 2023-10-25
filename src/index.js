import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { ThemeProvider, StyleSheetManager } from "styled-components"
import isPropValid from "@emotion/is-prop-valid"
import App from "./App"
import "normalize.css" //先引入模板
import "@/assets/css/index.less" // 自定义样式
import store from "@/stores"
import theme from "@/assets/theme"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <ThemeProvider theme={theme}>
          <HashRouter>
            <App />
          </HashRouter>
        </ThemeProvider>
      </StyleSheetManager>
    </Provider>
  </React.StrictMode>
)
