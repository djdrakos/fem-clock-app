import styled from 'styled-components';
import breakpoints from '../styles/breakpoints'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(4rem, 1fr));
  padding-inline: max(8rem, 12vw);
  gap: .625rem;

  @media screen and ${breakpoints.tabletLg} {
    grid-template-columns: repeat(12, minmax(3.125rem, 4rem));
    gap: .625rem;
    padding-inline: max(6rem, 10vw);
  }

  @media screen and ${breakpoints.tabletSm} {
    grid-template-columns: repeat(12, minmax(2rem, 4rem));
    gap: .625rem;
    padding-inline: max(4rem, 8vw);
  }

  @media screen and ${breakpoints.mobile} {
    grid-template-columns: repeat(12, minmax(1.25rem, 1fr));
    gap: .1875rem;
    padding-inline: max(1.625rem, 6vw);
  }
`

export default GridContainer