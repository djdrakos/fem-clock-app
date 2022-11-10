import styled from 'styled-components'
import breakpoints from '../../styles/breakpoints'

const StyledApp = styled.div`
  z-index: 1;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;

  .quote {
    flex: 0 0 50vh;
    padding-block-start: 3.5em;
    background-color: hsla(0, 0%, 0%, .4);
  }
  
  .clock { 
    flex: 1 0 0;
    padding-block-end: 6.125rem;
    background-color: hsla(0, 0%, 0%, .4);
  }

  .details { 
    flex: 0 0 50vh;
  }

  @media screen and ${breakpoints.tabletSm} {
    .quote {
      padding-block-start: 5em;
    } 

    .clock {
      padding-block-end: 4rem;
    }
    
    .details {
      flex-basis: 42vh;
    }
  }

  @media screen and ${breakpoints.mobile} {
    .quote {
      padding-block-start: 2em;
    } 
      
    .clock {
      padding-block-end: 2.5rem;
    }

    .details {
      flex-basis: 38vh;
    }
  }  

  @media (prefers-reduced-motion: reduce) {
  button {
    transition: none;
    }
  }
`

  export default StyledApp