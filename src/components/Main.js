import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react' 
import ClockDisplay from './ClockDisplay';
import CollapsibleDetailsContent from './CollapsibleDetailsContent';
import CollapsibleDetailsTrigger from './CollapsibleDetailsTrigger'
import Quote from './Quote'
import breakpoints from '../styles/breakpoints'
import * as Collapsible from '@radix-ui/react-collapsible';

const StyledMain = styled(Collapsible.Root)`
  --details-height: 50vh;
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;

  .quote {
    height: 50vh;
    padding-block-start: 3.5em;
    background-color: hsla(0, 0%, 0%, .4);
    transition: margin-top 1s ease;
    &.visually-hidden {
      margin-top: calc(-1 * var(--details-height));
    }
  }

  .clock { 
    height: 50vh;
    padding-block-end: 6.125rem;
    background-color: hsla(0, 0%, 0%, .4);
  }

  .details { 
    overflow: hidden;
    max-height: var(--details-height);
  }

  .details[data-state='open'] {
    height: var(--details-height);
  }

  ${`@media screen and ${breakpoints.tabletSm}`} {
    --details-height: 42vh;

    .quote {
      padding-block-start: 5em;
    } 
    
    .clock {
      padding-block-end: 4rem;
    }
  }

  ${`@media screen and ${breakpoints.mobile}`} {
    --details-height: 38vh;

    .quote {
      padding-block-start: 2em;
    } 
    
    .clock {
      padding-block-end: 2.5rem;
    }
  } 

  @media (prefers-reduced-motion: no-preference) { 
    .details[data-state='closed'] {
      animation-name: slideDown; 
      animation-duration: 1500ms;
      animation-iteration-count: 1;
      animation-timing-function: linear;
    }  
  }

  @keyframes slideDown {
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
  const [ hidden, setHidden ] = useState(false)
  const collapsibleRef = useRef()
  const quoteRef= useRef()

  useEffect(() => {
    // if(status === 'resolved'){
    //   if(open) collapsibleRef.current.scrollIntoView({  behavior: 'smooth' })  
    //   if(!open) quoteRef.current.scrollIntoView({ behavior: 'smooth' }) 
    // }
    setHidden((prevState) => !prevState)
  }, [open, status])
  
    const toggleOpen = () => {
      setOpen((prevState) => !prevState)
  }

  return (
    <Collapsible.Root asChild open={open} onOpenChange={toggleOpen}>
      <StyledMain>

        <Quote ref={quoteRef} className={ hidden ? "quote visually-hidden" : "quote"} />

        <ClockDisplay className="clock" currentTime={currentTime} location={location} status={status} timeOfDay={timeOfDay} timezoneAbbr={clockOptions.timezoneAbbr}>
          <CollapsibleDetailsTrigger open={open} toggleOpen={toggleOpen}/>
        </ClockDisplay>

        <CollapsibleDetailsContent ref={collapsibleRef} className="details" clockOptions={clockOptions}/>
      </StyledMain>
    </Collapsible.Root>
  )
}

export default Main