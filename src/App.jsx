import routes from "@/router"
import { Suspense, memo } from "react"
import { useRoutes } from "react-router-dom"
import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import { useScrollTop } from "@/hooks/useScrollTop"
const App = memo(() => {
  useScrollTop()
  return (
    <div className="app">
      <AppHeader />
      <Suspense>
        <div className="content">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
    </div>
  )
})

export default App
