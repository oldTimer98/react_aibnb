import styled from "styled-components"

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${props => (props.theme.isAlpha ? "#fff" : props.theme.textColor.secondColor)};
  .text {
    font-size: 16px;
    span {
      line-height: 20px;
      font-size: 14px;
      padding: 10px;
      &:hover {
        background-color: ${props => (props.theme.isAlpha ? "rgba(255,255,255,.1)" : "#f5f5f5")};
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }
  .logo {
    padding: 10px;
    &:hover {
      background-color: ${props => (props.theme.isAlpha ? "rgba(255,255,255,.1)" : "#f5f5f5")};
      border-radius: 50%;
      cursor: pointer;
    }
  }
  .profile {
    position: relative;
    display: flex;
    align-items: center;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 50px;
    .menu {
      margin: 0 10px 0 5px;
    }
    .avatar {
      margin-right: 5px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      color: #717171;
    }
    ${props => props.theme.mixin.boxShowTransition}

    .panel {
      position: absolute;
      right: 0;
      top: 55px;
      width: 240px;
      background-color: #fff;
      border: 1px solid #eee;
      box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.18);
      border-radius: 20px;
      text-align: left;
      padding: 10px 0;
      .top {
        div {
          padding: 0 20px;
          height: 40px;
          line-height: 40px;
          &:hover {
            background-color: #f5f5f5;
            color: #222;
            font-weight: 600;
          }
        }
      }
      .bottom {
        div {
          padding: 0 20px;
          height: 40px;
          line-height: 40px;
          &:first-child {
            border-top: 1px solid #eee;
          }
          &:hover {
            background-color: #f5f5f5;
            color: #222;
            font-weight: 600;
          }
        }
      }
    }
  }
`
