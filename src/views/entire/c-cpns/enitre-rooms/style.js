import styled from "styled-components"

export const ViewWrapper = styled.div`
  position: relative;
  margin-top: 68px;
  padding: 30px 20px;
  .title {
    font-size: 22px;
    font-weight: 700;
    color: #222;
    margin: 0 0 10px 10px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }
  > .cover {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.8);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`
