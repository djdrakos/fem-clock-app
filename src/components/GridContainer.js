import styled from 'styled-components';
import breakpoints from '../styles/breakpoints'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(4rem, 1fr));
  padding-inline: max(10rem, 12vw);
  gap: 1.875rem;
  margin: 0 auto;
  background-color: hsla(0, 0%, 0%, .4);

  @media screen and ${breakpoints.tabletLg} {
    grid-template-columns: repeat(12, minmax(3.125rem, 1fr));
    gap: .625rem;
    padding-inline: max(4rem, 12vw);
  }

  @media screen and ${breakpoints.tabletSm} {
    grid-template-columns: repeat(12, minmax(3.125rem, 1fr));
    gap: .25rem;
    padding-inline: max(4rem, 8vw);
  }

  @media screen and ${breakpoints.mobile} {
    grid-template-columns: repeat(12, minmax(1.5rem, 1fr));
    gap: .1875rem;
    padding-inline: max(1.625rem, 6vw);
  }
`

export default GridContainer