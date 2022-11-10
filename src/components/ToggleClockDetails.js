
import styled from 'styled-components';
import { ReactComponent as IconArrowDown } from '../assets/desktop/icon-arrow-down.svg'
import { ReactComponent as IconArrowUp } from '../assets/desktop/icon-arrow-up.svg'
import breakpoints from '../styles/breakpoints';

const Styled = styled.button`
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
  
  @media screen and ${breakpoints.mobile} {
    --arrowBgSize: 2rem;
    height: 2.5rem;
    width: 7.1875rem;
    font-size: .75rem;
    letter-spacing: .234rem;
    line-height: .875rem;
    padding: .25rem;
  }
`

export default function ToggleClockDetails({detailsIsOpen, toggleClockDetails}) {
  return (
    <Styled onClick={toggleClockDetails}>
      { !detailsIsOpen
      ? <>More 
          {/* <span> */}
            <IconArrowDown />
          {/* </span> */}
        </> 
      : <> Less 
          {/* <span> */}
            <IconArrowUp />
          {/* </span> */}
      </> }
    </Styled>
  )
}