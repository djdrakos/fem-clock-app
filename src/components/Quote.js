import styled from 'styled-components';
import { H5, P } from './Styled';
import { ReactComponent as IconRefresh } from '../assets/desktop/icon-refresh.svg'
import breakpoints from '../styles/breakpoints';
import GridContainer from './GridContainer';
import GridItem from './GridItem';

const StyledFig = styled.figure`
  display: flex;
  
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

  }

  @media screen and ${breakpoints.tabletSm} {

  } 
`

export default function Quote() {
  return (
      <StyledFig className='quote'>
        <GridContainer>
          <GridItem sm={12} m={11} l={9} xl={6}>
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
          </GridItem>
        </GridContainer>
      </StyledFig>
  )
}