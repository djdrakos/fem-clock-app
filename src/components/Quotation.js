import styled from 'styled-components';
import breakpoints from '../styles/breakpoints';
import { H5, P } from './Styled';
import { ReactComponent as IconRefresh } from '../assets/desktop/icon-refresh.svg'

const StyledFig = styled.figure`
  display: flex;
  width: 35.8125em;

    @media screen and ${breakpoints.tabletSm} {
      width: 100%;
      max-width: 35.8125em;
  }

    @media screen and ${breakpoints.mobile} {
      width: 100%;
  }

  blockquote {
    ::before, ::after {
      content: '"'
    }
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