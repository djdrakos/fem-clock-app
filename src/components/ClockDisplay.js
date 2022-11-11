import styled from 'styled-components'
import ClockGreeting from './ClockGreeting'
import ClockLocation from './ClockLocation'
import ClockTime from './ClockTime'
import GridContainer from './GridContainer'
import GridItem from './GridItem'
import breakpoints from '../styles/breakpoints';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column; 
  justify-content: flex-end;

  .flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    gap: 1rem;
  }

  ${`@media screen and ${breakpoints.tabletSm}`} {
    .flex {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      gap: 5rem;
    }
  }

  ${`@media screen and ${breakpoints.mobile}`} {
    .flex {
      gap: 3rem;
    }
  }
`

export default function ClockDisplay({ 
  currentTime, 
  children, 
  location,
  status, 
  timeOfDay, 
  timezoneAbbr, 
  ...props
}) {

return (
    <StyledSection {...props}>
      <GridContainer>
        { status === 'resolved' &&
          <GridItem className="flex">
            <div className="wrapper">
              <ClockGreeting timeOfDay={timeOfDay} />
              <ClockTime currentTime={currentTime} timezoneAbbr={timezoneAbbr} />
              <ClockLocation location={location} />
            </div>
            {children}
          </GridItem>
          }
      </GridContainer>
    </StyledSection> 
  )
}