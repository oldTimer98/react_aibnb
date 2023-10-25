import YzzRequest from "@/services"

export function getEntireRoomList(offset = 0, size = 20) {
  return YzzRequest.get({
    url: "entire/list",
    params: {
      offset,
      size,
    },
  })
}
