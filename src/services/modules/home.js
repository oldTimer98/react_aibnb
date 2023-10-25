import YzzRequest from "@/services"

export function getHomeGoodPriceData(data) {
  return YzzRequest.get({
    url: "/home/goodprice",
  })
}

export function getHomeHighScoreData(data) {
  return YzzRequest.get({
    url: "/home/highscore",
  })
}

export function getHomeDiscountData(data) {
  return YzzRequest.get({
    url: "/home/discount",
  })
}

export function getHomeHotRecommendData(data) {
  return YzzRequest.get({
    url: "/home/hotrecommenddest",
  })
}

export function getHomeLongforData() {
  return YzzRequest.get({
    url: "/home/longfor"
  })
}
export function getHomePlusData() {
  return YzzRequest.get({
    url: "/home/plus"
  })
}
