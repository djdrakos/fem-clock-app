import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

const StyledApp = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: minmax(4em, 1fr) minmax(42em, 73%) minmax(4em, 1fr);
  grid-template-rows: repeat(2, 50%);

  & > * {
    grid-column: 2;
  }

  
  @media screen and ${breakpoints.desktop} {
    figure {
      padding-block-start: 3.5em;
      align-self: flex-start;
    }

    & > :first-child:is(main) {
      align-self: center;
    }

    & > :nth-child(2):is(main) {
      padding-block-end: 6.125rem;
    }
  }

  @media screen and ${breakpoints.tabletLg} {
    figure {
      padding-block-start: 3.5em;
      align-self: flex-start;
    }
    
    & > :first-child:is(main) {
      align-self: center;
    }
    
    & > :nth-child(2):is(main) {
    padding-block-end: 6.125rem;
    }
  }

  @media screen and ${breakpoints.tabletSm} {
    grid-template-columns: minmax(3em, 1fr) clamp(32em, 83.33%, 42.875em) minmax(3em, 1fr);
    grid-template-rows: 1fr auto;

    figure {
      padding-block-start: 5em;
    }

    main {
      padding-block-end: 4rem;
    }

    .details {
      height: 40vh;
    }
}

  @media screen and ${breakpoints.mobile} {
      grid-template-columns: minmax(1.625em, 1fr) minmax(19em, 32em) minmax(1.625em, 1fr);

    figure {
      padding-block-start: 2em;
    }

    main {
      padding-block-end: 2.5rem;
    }
  }
  
  `

  export default StyledApp