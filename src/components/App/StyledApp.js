import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

const StyledApp = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: minmax(4em, 1fr) minmax(42em, 73%) minmax(4em, 1fr);
  grid-template-rows: repeat(2, 1fr);

  & > * {
    grid-column: 2;
  }

  & > :first-child {
    padding-block-start: 3.5em;
    align-self: flex-start;
  }
  
  @media screen and ${breakpoints.desktop} {
    & > :nth-child(2):is(main) {
    padding-block-end: 6.125rem;
    }
  }

  @media screen and ${breakpoints.tabletLg} {
  }

  @media screen and ${breakpoints.tabletSm} {
    grid-template-columns: minmax(3em, 1fr) clamp(32em, 83.33%, 42.875em) minmax(3em, 1fr);

    & > :first-child {
      padding-top: 5em;
  }
}

  @media screen and ${breakpoints.mobile} {
      grid-template-columns: minmax(1.625em, 1fr) minmax(19em, 32em) minmax(1.625em, 1fr);

    & > :first-child {
      padding-top: 2em;
    }
  }
  
  `

  export default StyledApp