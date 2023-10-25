import styled from "styled-components"

export const AppFooterWrapper = styled.div`
  margin-top: 40px;
  border-top: 1px solid #ebebeb;
  .wrapper {
    width: 1080px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 48px 48px 24px;
    .service {
      display: flex;
      .item {
        flex: 1;
        .name {
          margin-bottom: 16px;
          font-weight: 700;
        }
        .list {
          .it {
            margin-top: 8px;
            color: #767676;
            cursor: pointer;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
    .statement {
      margin-top: 30px;
      border-top: 1px solid #ebebeb;
      padding: 20px;
      color: #767676;
      text-align: center;
    }
  }
`
