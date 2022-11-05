import styled from 'styled-components';
import { H2, H6 } from './Styled'
import breakpoints from '../styles/breakpoints';

const Styled = styled.section`
height: 100%;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 68% 29%;
  column-gap: 3%;
  row-gap: 2.625rem;
  align-content: center;
  align-self: center;
  justify-self: stretch;
  color: ${({ theme }) => theme.color2 };
  background-color: ${({ theme }) => theme.background };
  backdrop-filter: blur(1.25rem);

  hgroup {
    display: flex;
    flex-direction: column;
    gap: .5rem;

  }

  @media screen and ${breakpoints.tabletSm} {
    grid-template-columns: 55% 40%;
    column-gap: 5%;
    row-gap: 3rem;

    hgroup {
      gap: 0;
    }
  }

  @media screen and ${breakpoints.mobile} {
    grid-template-rows: repeat(4, auto);
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 1rem;

    hgroup {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      p {
        text-align: end;
      }
    }
  }
`

export default function Details() {
return (
  <Styled className="details">
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