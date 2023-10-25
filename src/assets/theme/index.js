const theme = {
  color: {
    primaryColor: "#ff385c",
    secondColor: "#00848a",
  },
  textColor: {
    primaryColor: "#484848",
    secondColor: "#222",
  },
  mixin: {
    boxShowTransition: `
    transition: box-shadow 200ms ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0,0,0,0.18);
      cursor: pointer;
    }`,
  },
}

export default theme
