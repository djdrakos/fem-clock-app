import styled from 'styled-components';
import { H5, P } from './Typography';
import { ReactComponent as IconRefresh } from '../assets/desktop/icon-refresh.svg'
import breakpoints from '../styles/breakpoints';
import GridContainer from './GridContainer';
import GridItem from './GridItem';

const StyledFig = styled.figure`
  .flex {
    flex-direction: row;
    gap: 1rem;
  }

  blockquote {
    ::before, ::after {
      content: '"';
    }
  }
  
  button {
    background: none;
    border-radius: 50%;
    height: 2.5rem;
    width: 2.5rem;
    justify-content: center;
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
          <GridItem s={12} m={11} l={7} xl={6} className='flex'>
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