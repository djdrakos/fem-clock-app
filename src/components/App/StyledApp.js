import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

const StyledDiv = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: repeat(2, 50%);

  & > * {
    grid-column: 2;
  }

  & > :first-child {
    padding-top: 3.5em;
  }

  & > :nth-child(2) {

  }

  main button {
    color: var(--grey-dark);
    background: var(--white);
    border-radius: 28px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .3125rem;
    padding: 8px;
    column-gap: 13px;

    svg {
      fill: var(--black);
      stroke: var(--black);
      background-color: var(--black);
      border-radius: 50%;
      height: 40px;
      width: 40px;
    }
  }

  @media screen and ${breakpoints.desktop} {
      grid-template-columns: minmax(4em, 1fr) minmax(42em, 73%) minmax(4em, 1fr);
  }

  @media screen and ${breakpoints.tablet} {
    grid-template-columns: minmax(3em, 1fr) clamp(32em, 83.33%, 42.875em) minmax(3em, 1fr);
  }

  @media screen and ${breakpoints.mobile} {
      grid-template-columns: minmax(1.625em, 1fr) minmax(19em, 32em) minmax(1.625em, 1fr);
  }
  
  `

  export default function StyledApp({children}) {
    return (
      <StyledDiv>
        {children}
      </StyledDiv>
    )
  }