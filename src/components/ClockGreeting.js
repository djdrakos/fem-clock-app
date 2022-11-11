import styled from 'styled-components'
import { H4 } from './Typography'
import { ReactComponent as IconSun } from '../assets/desktop/icon-sun.svg'
import { ReactComponent as IconMoon } from '../assets/desktop/icon-moon.svg'
import breakpoints from '../styles/breakpoints';
import { AccessibleIcon } from '@radix-ui/react-accessible-icon';

const StyledClockGreeting = styled(H4)`
  display: grid;
  grid-template-columns: 2.5rem auto auto;
  align-items: center;
  justify-content: start;
  
  &::after {
    content: ", it\'s currently";
  }

  ${`@media screen and ${breakpoints.mobile}`} {
    &::after {
      content: none;
    }
  }
`

export default function ClockGreeting({timeOfDay}) {

  return (
    <StyledClockGreeting as='p'>
      { timeOfDay === 'evening' 
      ? <AccessibleIcon label='Moon Icon'>
          <IconMoon />
        </AccessibleIcon>
      : <AccessibleIcon label='Sun Icon'>
          <IconSun />
        </AccessibleIcon>
      }
      {`Good ${timeOfDay}`}
    </StyledClockGreeting>
  )
}