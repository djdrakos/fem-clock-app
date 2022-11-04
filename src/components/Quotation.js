import styled from 'styled-components';
import breakpoints from '../styles/breakpoints';
import { ReactComponent as IconRefresh } from '../assets/desktop/icon-refresh.svg'

const StyledFig = styled.figure`
  display: flex;
  width: 35.8125em;

    @media screen and ${breakpoints.tablet} {
      width: 100%;
      max-width: 35.8125em;
  }

    @media screen and ${breakpoints.mobile} {
      width: 100%;
  }

  blockquote {
    font-weight: 400;
    font-size: 1.125rem;
    line-height: calc(28/18);
    text-transform: capitalize;

    ::before, ::after {
      content: '"'
    }
  }
  

  figcaption {
    margin-block-start: .8125rem;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: calc(28/18);  
    text-transform: capitalize;
    font-style: normal;
  }

  button {
  background: none;
  border-radius: 50%;
  padding: .66875rem;
  height: fit-content;
  width: fit-content;
  }
`

export default function Quotation() {
  return (
    <StyledFig >
    <div className="wrapper">
      <blockquote>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta et diam in vestibulum. Aliquam nunc enim, condimentum in volutpat viverra, ultricies non sem.
      </blockquote>
      <figcaption>
        Phasellus eu Nisi Mauris
      </figcaption>
    </div>
    <button>
      <IconRefresh />
    </button>
  </StyledFig>
  )
}