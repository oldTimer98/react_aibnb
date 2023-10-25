import styled from "styled-components"

export const ViewWrapper = styled.div`
  overflow: hidden;
  .i-content {
    display: flex;
    position: relative;
    transition: transform 250ms ease;
    > * {
      flex-shrink: 0;
    }
  }
`
