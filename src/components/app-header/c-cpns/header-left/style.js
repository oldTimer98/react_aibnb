import styled from "styled-components"

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  // 主题展示
  /* fill: var(--primary-color); */
  fill: ${props => props.theme.color.primaryColor};
  .logo {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`
