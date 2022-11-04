import styled from 'styled-components'
import { ReactComponent as IconArrowDown } from '../assets/desktop/icon-arrow-down.svg'
import { ReactComponent as IconArrowUp } from '../assets/desktop/icon-arrow-up.svg'
import { ReactComponent as IconSun } from '../assets/desktop/icon-sun.svg'
import { ReactComponent as IconMoon } from '../assets/desktop/icon-moon.svg'
import { H1, H2, H3, H4, H6, Timezone } from './Styled'
import breakpoints from '../styles/breakpoints';

const Styled = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p::after {
      content: ", it\'s currently";
    }

  button {
    --arrowBgSize: 2.5rem;
    display: grid;
    grid-template-columns: 1fr var(--arrowBgSize);
    justify-items: center;

    height: 3.5rem;
    width: 9.125rem;
    color: var(--grey-mid);
    background: var(--white);
    border-radius: 28px;
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: .3125rem;
    padding: .5rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--black);
    border-radius: 50%;
    height: var(--arrowBgSize);
    width: var(--arrowBgSize);
  }
}

  @media screen and ${breakpoints.tablet} {
    gap: 0;
  }

  @media screen and ${breakpoints.mobile} {
    gap: 1rem;

    p::after {
      content: none;
    }

    button {
      --arrowBgSize: 2rem;
      height: 2.5rem;
      width: 7.1875rem;
      font-size: .75rem;
      letter-spacing: .234rem;
      line-height: .875rem;
      padding: .25rem;

      span {}
    } 
  }
`

export default function Main() {
  return (
    <Styled>
      <H4 as="p">
        { true 
        ? <><IconSun /> Good Morning</> 
        : <><IconMoon />Good Evening</>}
      </H4> 
      <H1 as="time">9:54<Timezone> PST</Timezone></H1>

      <H3>in Portland, USA</H3>

      <button>
        { true 
        ? <>More 
            <span>
              <IconArrowDown />
            </span>
          </> 
        : <> Less 
            <span>
              <IconArrowUp />
            </span>
          </> }
      </button>

      { true ? '' :
        <section>
          <H6>Current timezone</H6>
          <H2 as='p'>United States/Portland</H2>

          <H6>Day of the year</H6>
          <H2 as='p'>312</H2>

          <H6>Day of the week</H6>
          <H2 as='p'>Tuesday</H2>

          <H6>Week number</H6>
          <H2 as='p'>44</H2>
        </section>
      }

    </Styled> 
  )
}