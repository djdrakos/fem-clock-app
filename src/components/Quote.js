import styled from 'styled-components';
import { H5, P } from './Styled';
import { ReactComponent as IconRefresh } from '../assets/desktop/icon-refresh.svg'
import breakpoints from '../styles/breakpoints';

const StyledFig = styled.figure`
  display: flex;
  grid-area: auto / span 9;

  .wrapper {
  }
  
  blockquote {
    ::before, ::after {
      content: '"';
    }
  }
  
  button {
    background: none;
    border-radius: 50%;
    padding: .66875rem;
    height: fit-content;
    width: fit-content;
  }

  @media screen and ${breakpoints.tabletSm} {
    grid-area: auto / span 11;
    .wrapper {
    }
  }

  @media screen and ${breakpoints.tabletSm} {
    grid-area: auto / span 12;
    .wrapper {
    }
  } 
`

export default function Quote() {
  return (
      <StyledFig className='quote'>
        <div className="wrapper">
          <P as="blockquote">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta et diam in vestibulum. Aliquam nunc enim, condimentum in volutpat viverra, ultricies non sem.
          </P>
          <H5 as="figcaption">
            Phasellus eu Nisi Mauris
          </H5>
        </div>

        <button>
          <IconRefresh />
        </button>
      </StyledFig>
  )
}