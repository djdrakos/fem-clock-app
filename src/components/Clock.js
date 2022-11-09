import styled from 'styled-components'
import GridContainer from './GridContainer'
import GridItem from './GridItem'
import ToggleDetails from './ToggleDetails'
import { ReactComponent as IconSun } from '../assets/desktop/icon-sun.svg'
import { ReactComponent as IconMoon } from '../assets/desktop/icon-moon.svg'
import { H1, H3, H4, Timezone } from './Typography'
import breakpoints from '../styles/breakpoints';
import { formatTime } from '../utils/formatUtils'


const StyledMain = styled.main`
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

  .greeting {
    display: grid;
    grid-template-columns: 2.5rem auto auto;
    align-items: center;
    justify-content: start;
    
    ::after {
      content: ", it\'s currently";
    }
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

    .greeting::after {
      content: none;
    }
  }
`

export default function Clock({ currentTime, detailsIsOpen, timeData, toggleDetails }) {
  if (timeData !== null) {
    var { timezoneAbbr } = timeData
  }
  return (
    <StyledMain className="clock">
      { currentTime &&
        <GridContainer>
          <GridItem>
            <section>
              <div className="wrapper">
                <H4 as="p" className="greeting">
                  { detailsIsOpen 
                    ? <><IconSun /> Good Morning</> 
                    : <><IconMoon />Good Evening</>
                  }
                </H4> 
                <H1>
                  <time>
                    {`${formatTime(currentTime)}`}
                    <Timezone>
                      {timezoneAbbr}
                    </Timezone>
                  </time>
                </H1>
                <H3 as="p">
                  in Portland, USA
                </H3>
              </div>
              <ToggleDetails detailsIsOpen={detailsIsOpen} toggleDetails={toggleDetails}/>
            </section>
          </GridItem>
        </GridContainer>
      }
    </StyledMain> 
  )
}