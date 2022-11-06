import styled from 'styled-components'
import ToggleDetails from './ToggleDetails'
import { ReactComponent as IconSun } from '../assets/desktop/icon-sun.svg'
import { ReactComponent as IconMoon } from '../assets/desktop/icon-moon.svg'
import { H1, H3, H4, Timezone } from './Styled'
import breakpoints from '../styles/breakpoints';

const StyledMain = styled.main`
  display: flex;

  section {
    display: flex;
    flex-direction: column;
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

  @media screen and ${breakpoints.desktop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  @media screen and ${breakpoints.tabletLg} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  @media screen and ${breakpoints.tabletSm} {
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 5rem;

    section {
      gap: 0;
    }
  }

  @media screen and ${breakpoints.mobile} {
    gap: 3rem;

    section {
      gap: 1rem;
    }    

    .greeting::after {
      content: none;
    }
  }
`

export default function Clock({detailsIsOpen, toggleDetails}) {
  return (
      <StyledMain className="clock">
        <section>
          <H4 as="p" className="greeting">
            { detailsIsOpen 
            ? <><IconSun /> Good Morning</> 
            : <><IconMoon />Good Evening</>}
          </H4> 
          <H1><time>9:54<Timezone>PST</Timezone></time></H1>
          <H3 as="p">in Portland, USA</H3>
        </section>
        <ToggleDetails detailsIsOpen={detailsIsOpen} toggleDetails={toggleDetails}/>
      </StyledMain> 
  )
}