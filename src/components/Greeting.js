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

export default function Greeting({timeOfDay}) {

  return (
    <StyledGreeting as='p'>
      { timeOfDay === 'evening' ? <IconMoon /> : <IconSun />}
      {`Good ${timeOfDay}`}
    </StyledGreeting>
  )
}