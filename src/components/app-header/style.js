import styled from "styled-components"

export const HeaderWrapper = styled.div`
  &.fixed {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
  }
  .content {
    position: relative;
    z-index: 19;
    transition: all 250ms ease;
    background-color: ${props => (props.theme.isAlpha ? "rgba(233,233,233,0)" : "#EDEEEF")};
    border-bottom: 1px solid #eee;
    border-bottom-color: ${props => (props.theme.isAlpha ? "rgba(233,233,233,0)" : "#EDEEEF")};
    .top {
      display: flex;
      align-items: center;
      height: 80px;
    }
  }
`

export const SearchAreaWrapper = styled.div`
  transition: height 250ms ease;
  height: ${props => (props.isSearch ? "100px" : "0")};
`
