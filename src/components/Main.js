import { ReactComponent as IconArrowDown } from '../assets/desktop/icon-arrow-down.svg'
import { ReactComponent as IconArrowUp } from '../assets/desktop/icon-arrow-up.svg'
import { ReactComponent as IconSun } from '../assets/desktop/icon-sun.svg'
import { ReactComponent as IconMoon } from '../assets/desktop/icon-moon.svg'
import { H1, H2, H3, H4, H6 } from './Styled'

export default function Main() {
  return (
    <main>
      <H4>
        { true 
        ? <><IconSun /> Good Morning</> 
        : <><IconMoon />Good Evening</>},  it's currently
      </H4> 
      <H1>9:54</H1> PST

      <H3>in Portland, USA</H3>

      <button>
        { true 
        ? <>More <IconArrowDown /></> 
        : <>Less <IconArrowUp /></> }
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

    </main> 
  )
}