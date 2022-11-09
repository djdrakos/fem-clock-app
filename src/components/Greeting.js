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
  const [hour] = currentTime.split(':')

  const renderIcon = (hour) => {
    if(hour >= 5 && hour < 18) return <IconSun /> 
    if(hour >= 18 || hour < 5 ) return <IconMoon />
  }

  const renderGreeting = (hour) => {
    if(hour >= 5 && hour < 12) return "Good Morning"
    if(hour >= 12 && hour < 18 ) return "Good Afternoon"
    if(hour >= 18 || hour < 5) return "Good Evening"
  }

  return (
    <StyledGreeting as='p'>
      {renderIcon(hour)}
      {renderGreeting(hour)}
    </StyledGreeting>
  )
}