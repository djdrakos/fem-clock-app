import styled from 'styled-components'
import { ReactComponent as IconArrowDown } from '../assets/desktop/icon-arrow-down.svg'
import { ReactComponent as IconArrowUp } from '../assets/desktop/icon-arrow-up.svg'
import { ReactComponent as IconSun } from '../assets/desktop/icon-sun.svg'
import { ReactComponent as IconMoon } from '../assets/desktop/icon-moon.svg'
import { H1, H3, H4, Timezone } from './Styled'
import breakpoints from '../styles/breakpoints';

const Styled = styled.main`
  display: flex;
  background-color: hsla(0, 0%, 0%, .4);

  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
      background-color: var(--grey-dark);
      border-radius: 50%;
      height: var(--arrowBgSize);
      width: var(--arrowBgSize);
    }

    :hover {
      span {
        background-color: var(--grey-light);
      }
    }
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
    flex-direction: column;
    gap: 3rem;

    section {
      gap: 1rem;
    }    

    .greeting::after {
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
    } 
  }
`

export default function Main() {
  return (
    <Styled>
      <section>
        <H4 as="p" className="greeting">
          { true 
          ? <><IconSun /> Good Morning</> 
          : <><IconMoon />Good Evening</>}
        </H4> 
        <H1><time>9:54<Timezone>PST</Timezone></time></H1>
        <H3 as="p">in Portland, USA</H3>
      </section>

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
    </Styled> 
  )
}