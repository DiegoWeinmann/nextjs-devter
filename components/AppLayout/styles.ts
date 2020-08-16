import css from 'styled-jsx/css'
import { breakpoints, fonts, colors } from 'styles/theme'
import { addOpacityToColor } from 'styles/utils'

const backgroundColor = addOpacityToColor(colors.primary, 0.3)

export const globalStyles = css.global`
  html,
  body {
    background-image: radial-gradient(${backgroundColor} 1px, transparent 1px),
      radial-gradient(${backgroundColor} 1px, transparent 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
  }

  * {
    box-sizing: border-box;
  }
`

export default css`
  div {
    display: grid;
    place-items: center;
    height: 100vh;
  }

  main {
    background: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    height: 100%;
    width: 100%;
    position: relative;
  }

  & :global(svg) {
    color: ${colors.primary};
    width: 40px;
    height: 40px;
    display: inline-block;
  }

  h1 {
    display: inline-block;
  }

  @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breakpoints.mobile};
    }
  }
`
