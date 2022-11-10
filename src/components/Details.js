import styled from 'styled-components';
import GridContainer from './GridContainer'
import GridItem from './GridItem'
import { H2, H6 } from './Typography'
import breakpoints from '../styles/breakpoints';

const Styled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.color2 };
  background-color: ${({ theme }) => theme.background };
  backdrop-filter: blur(1.25rem);

  hgroup {
    display: flex;
    flex-direction: column;
    
    &:first-of-type {
      margin-block-end: 2.625rem;
    }
  }
  
  .flex {
    flex-direction: column;
    justify-content: space-between;
    
  }

  .separator {
    border-inline-start: 1px ${({ theme }) => theme.color2} solid;
    opacity: .25;
  }

  @media screen and ${breakpoints.tabletSm} {
    hgroup:first-of-type {
      margin-block-end: 3rem;
    }

    .separator {
      border-inline-start:none;
    }
  }

  @media screen and ${breakpoints.mobile} {
    hgroup {
      &:first-of-type {
      margin-block-end: .5rem;
      }

      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-block: .5rem;
      
      p { text-align: end; }

    }
  }
`

export default function Details({clockOptions}) {
  const { dayOfWeek, dayofYear, timezone, week } = clockOptions

return (
    <Styled className="details">
      <GridContainer alignContent="center">
        <GridItem m={6} className="flex">
          <hgroup>
            <H6 as='h2'>Current timezone</H6>
            <H2 as='p'>{timezone.country}/
              <wbr/>
              {timezone.city}
            </H2>
          </hgroup>
          
          <hgroup>
            <H6 as='h2'>Day of the year</H6>
            <H2 as='p'>{dayofYear}</H2>
          </hgroup>
        </GridItem>

        <GridItem m={1} className="separator"></GridItem>
          
        <GridItem m={5} className="flex">
          <hgroup>
            <H6 as='h2'>Day of the week</H6>
            <H2 as='p'>{dayOfWeek}</H2>
          </hgroup>
          
          <hgroup>
            <H6 as='h2'>Week number</H6>
            <H2 as='p'>{week}</H2>
          </hgroup>
        </GridItem>
      </GridContainer>
    </Styled>
  )
}