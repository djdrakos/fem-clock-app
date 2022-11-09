import styled from 'styled-components'
import { H4 } from './Typography'
import { ReactComponent as IconSun } from '../assets/desktop/icon-sun.svg'
import { ReactComponent as IconMoon } from '../assets/desktop/icon-moon.svg'
import breakpoints from '../styles/breakpoints';

const StyledGreeting = styled(H4)`
    display: grid;
    grid-template-columns: 2.5rem auto auto;
    align-items: center;
    justify-content: start;
    
    &::after {
      content: ", it\'s currently";
    }

  @media screen and ${breakpoints.mobile} {
    &::after {
      content: none;
    }
  }
`

export default function Greeting({currentTime}) {

  // >= 5 && < 12 = "Good Morning"
  // >= 12 && < 18 = "Good Afternoon"
  // >= 18 || < 5 = "Good Evening"


//   - "Good morning" between 5am and 12pm
//   - "Good afternoon" between 12pm and 6pm
//   - "Good evening" between 6pm and 5am

// >= 5 && < 18 = Sun
// >= 18 || < 5 = Moon

// - Change the greeting icon and background image depending on the time of day. They should show:
//   - The sun icon and the daytime background image between 5am and 6pm
//   - The moon icon and the nighttime background image between 6pm and 5am
  return (
    <StyledGreeting as='p'>
      { currentTime 
        ? <><IconSun /> Good Morning</> 
        : <><IconMoon />Good Evening</>
      }
    </StyledGreeting>
  )
}