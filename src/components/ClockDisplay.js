import styled from 'styled-components'
import ClockGreeting from './ClockGreeting'
import ClockLocation from './ClockLocation'
import ClockTime from './ClockTime'
import GridContainer from './GridContainer'
import GridItem from './GridItem'
import breakpoints from '../styles/breakpoints';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: flex-end;

  section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    gap: 1rem;
  }

  @media screen and ${breakpoints.tabletSm} {
    section {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      gap: 5rem;
    }
  }

  @media screen and ${breakpoints.mobile} {
    section {
      gap: 3rem;
    }
  }
`

export default function ClockDisplay({ 
  currentTime, 
  children, 
  status, 
  timeOfDay, 
  timezoneAbbr, 
}) {

return (
    <StyledDiv className="clock">
      <GridContainer>
        { status === 'resolved' &&
          <GridItem as="section">
            <div className="wrapper">
              <ClockGreeting timeOfDay={timeOfDay} />
              <ClockTime currentTime={currentTime} timezoneAbbr={timezoneAbbr} />
              <ClockLocation />
            </div>
            {children}
          </GridItem>
          }
      </GridContainer>
    </StyledDiv> 
  )
}