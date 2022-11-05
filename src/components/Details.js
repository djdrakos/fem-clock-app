import styled from 'styled-components';
import { H2, H6 } from './Styled'
import breakpoints from '../styles/breakpoints';

const Styled = styled.section`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: auto auto;
  grid-template-columns: 68% 29%;
  column-gap: 3%;
  row-gap: 2.625rem;
  align-self: center;
  justify-self: stretch;

  hgroup {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  @media screen and ${breakpoints.desktop} {

  }

  @media screen and ${breakpoints.tabletSm} {
    row-gap: 3rem;

    hgroup {
      gap: 0;
    }
  }
`

export default function Details() {
return (
  <Styled>
    <hgroup>
      <H6 as='h2'>Current timezone</H6>
      <H2 as='p'>United States<wbr />/Portland</H2>
    </hgroup>
    
    <hgroup>
      <H6 as='h2'>Day of the year</H6>
      <H2 as='p'>312</H2>
    </hgroup>
    
    <hgroup>
      <H6 as='h2'>Day of the week</H6>
      <H2 as='p'>Tuesday</H2>
    </hgroup>
    
    <hgroup>
      <H6 as='h2'>Week number</H6>
      <H2 as='p'>44</H2>
    </hgroup>
  </Styled>
)
}