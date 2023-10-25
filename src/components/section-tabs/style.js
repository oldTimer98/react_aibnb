import styled from "styled-components"

export const SectionTabsWrapper = styled.div`
  .item {
    flex-basis: 120px;
    flex-shrink: 0;
    box-sizing: border-box;
    padding: 14px 16px;
    margin-right: 16px;
    font-size: 17px;
    border: 0.5px solid #d8d8d8;
    border-radius: 3px;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    ${props => props.theme.mixin.boxShowTransition}
    &:last-child {
      margin-right: 0;
    }
    &.active {
      color: #fff;
      background-color: ${props => props.theme.color.secondColor};
    }
  }
`
