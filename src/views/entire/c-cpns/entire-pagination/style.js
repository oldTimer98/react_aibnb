import styled from "styled-components"

export const ViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    .MuiPaginationItem-icon {
      font-size: 24px;
    }
    .MuiPaginationItem-page {
      margin: 0 9px;
      &:hover {
        text-decoration: underline;
      }
    }
    .Mui-selected.MuiPaginationItem-page {
      background-color: ${props => props.theme.color.secondColor};
      color: #fff;
    }
    .desc {
      margin-top: 16px;
      color: #222;
    }
  }
`
