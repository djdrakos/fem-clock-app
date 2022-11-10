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

.details {
  transition: flex 10000ms linear
}

.details[data-state='open']  { 
    flex: 0 0 50vh;
  }

.details[data-state='closed']  { 
    flex: 0 0 0;
}

@media screen and ${breakpoints.tabletSm} {
  .quote {
    padding-block-start: 5em;
  } 

  .clock {
    padding-block-end: 4rem;
  }

  .details[data-state='open']  {
      flex-basis: 42vh;
  }
}

@media screen and ${breakpoints.mobile} {
  .quote {
    padding-block-start: 2em;
  } 
    
  .clock {
    padding-block-end: 2.5rem;
  }

  .details[data-state='open'] {
      flex-basis: 38vh;
  }
}  

@media (prefers-reduced-motion: reduce) {
button {
  transition: none;
  }
}
`

const Main = ({currentTime, location, status, timeOfDay, clockOptions}) => {
  const [ open, setOpen ] = useState(false)

  const collapsibleRef = useRef()

  useEffect(() => {
    // if(!open)
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    if(open) collapsibleRef.current.scrollIntoView({ behavior: 'smooth' })  
  }, [open])
  

    const toggleOpen = () => {
    // if(!open) window.scrollTo({
    //   top: 0,
    //   behavior: "smooth"
    // })
  
    setOpen((prevState) => !prevState)

    // if(open) collapsibleRef.current.scrollIntoView({ behavior: 'smooth' })  
  }

  return (
    <Collapsible.Root asChild open={open} onOpenChange={setOpen}>
      <StyledMain>

        <Quote className="quote"/>

        <ClockDisplay className="clock" currentTime={currentTime} location={location} status={status} timeOfDay={timeOfDay} timezoneAbbr={clockOptions.timezoneAbbr}>
          <CollapsibleDetailsTrigger open={open} toggleOpen={toggleOpen}/>
        </ClockDisplay>

        <CollapsibleDetailsContent ref={collapsibleRef} className="details" clockOptions={clockOptions}/>
      </StyledMain>
    </Collapsible.Root>
  )
}

export default Main