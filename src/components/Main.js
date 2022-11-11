import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react' 
import ClockDisplay from './ClockDisplay';
import CollapsibleDetailsContent from './CollapsibleDetailsContent';
import CollapsibleDetailsTrigger from './CollapsibleDetailsTrigger'
import Quote from './Quote'
import breakpoints from '../styles/breakpoints'
import * as Collapsible from '@radix-ui/react-collapsible';

const StyledMain = styled(Collapsible.Root)`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;

  .quote {
    height: 50vh;
    padding-block-start: 3.5em;
    background-color: hsla(0, 0%, 0%, .4);
  }

  .clock { 
    height: 50vh;
    padding-block-end: 6.125rem;
    background-color: hsla(0, 0%, 0%, .4);
  }

  .details  { 
    overflow: hidden;
    --details-height: 50vh;
    max-height: var(--details-height);
    }

  .details[data-state='open']{
    height: var(--details-height);
  }

  @media (prefers-reduced-motion: no-preference) { 
    .details[data-state='closed'] {
      animation-name: slideUp; 
      animation-duration: 2000ms; 
      animation-iteration-count: 1;
      animation-timing-function: linear;
    }  
  }


  ${`@media screen and ${breakpoints.tabletSm}`} {
    .quote {
      padding-block-start: 5em;
    } 
    
    .clock {
      padding-block-end: 4rem;
    }
    
    .details { 
      --details-height: 42vh;
    }
  }

  ${`@media screen and ${breakpoints.mobile}`} {
    .quote {
      padding-block-start: 2em;
    } 
    
    .clock {
      padding-block-end: 2.5rem;
    }
    
    .details{
      --details-height: 42vh;
    }
  }  

  @media (prefers-reduced-motion: reduce) {
    button {
      transition: none;
    }
  }

  @keyframes slideUp {
    from {
      height: var(--details-height);
    }
    to {
      height: 0;
    }
  }
`

const Main = ({currentTime, location, status, timeOfDay, clockOptions}) => {
  const [ open, setOpen ] = useState(false)
  const collapsibleRef = useRef()
  const quoteRef= useRef()

  useEffect(() => {
    if(status === 'resolved'){
      if(open) collapsibleRef.current.scrollIntoView({  behavior: 'smooth' })  
      if(!open) quoteRef.current.scrollIntoView({ behavior: 'smooth' }) 
    }
  }, [open, status])
  
    const toggleOpen = () => {
      setOpen((prevState) => !prevState)
  }

  return (
    <Collapsible.Root asChild open={open} onOpenChange={toggleOpen}>
      <StyledMain>

        <Quote ref={quoteRef} className="quote"/>

        <ClockDisplay className="clock" currentTime={currentTime} location={location} status={status} timeOfDay={timeOfDay} timezoneAbbr={clockOptions.timezoneAbbr}>
          <CollapsibleDetailsTrigger open={open} toggleOpen={toggleOpen}/>
        </ClockDisplay>

        <CollapsibleDetailsContent ref={collapsibleRef} className="details" clockOptions={clockOptions}/>
      </StyledMain>
    </Collapsible.Root>
  )
}

export default Main