import styled from 'styled-components';
import breakpoints from '../styles/breakpoints';

const H1 = styled.h1`
  font-size: 12.5rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -.025rem;
  text-transform: capitalize;

  @media screen and ${breakpoints.tabletLg} {
    font-size: 10.9375rem;
  }

  @media screen and ${breakpoints.tabletSm} {
    font-size: 10.9375rem;
  }

  @media screen and ${breakpoints.mobile} {
    font-size: 6.25rem;
  }
`

const H2 = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: auto;
  text-transform: capitalize;

  @media screen and ${breakpoints.tabletLg} {
    font-size: 2.5rem;
  }

  @media screen and ${breakpoints.tabletSm} {
    font-size: 2.5rem;
  }

  @media screen and ${breakpoints.mobile} {
    font-size: 1.25rem;
  }
`

const H3 = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.75rem;
  text-transform: uppercase;
  letter-spacing: .3rem;

  @media screen and ${breakpoints.tabletLg} {
    font-size: 1.125rem;
  }

  @media screen and ${breakpoints.tabletSm} {
    font-size: 1.125rem;
  }

  @media screen and ${breakpoints.mobile} {
    font-size: .9375rem;
  }
`

const H4 = styled.h4`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.75rem;  
  text-transform: uppercase;
  letter-spacing: .25rem;

  @media screen and ${breakpoints.tabletLg} {
    font-size: 1.125rem;
  }

  @media screen and ${breakpoints.tabletSm} {
    font-size: 1.125rem;
  }

  @media screen and ${breakpoints.mobile} {
    font-size: .9375rem;
  }
`

const H5 = styled.h5`
  margin-block-start: .8125rem;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.75rem;  
  text-transform: capitalize;
  font-style: normal;

  @media screen and ${breakpoints.mobile} {
    font-size: .75rem;
    line-height: 1.375rem;
  }
`

const H6 = styled.h6`
  font-size: .9375rem;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1.75rem;
  letter-spacing: .1875rem;
  white-space: nowrap;

  @media screen and ${breakpoints.tabletLg} {
    font-size: .8125rem;
    letter-spacing: .2rem;
  }

  @media screen and ${breakpoints.tabletSm} {
    font-size: .8125rem;
    letter-spacing: .2rem;
  }

  @media screen and ${breakpoints.mobile} {
    font-size: .625rem;
  }
`

const P = styled.p`
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.75rem;

  @media screen and ${breakpoints.mobile} {
    font-size: .75rem;
    line-height: 1.375rem;
  }
`

  const Timezone = styled.span`
  padding-inline-start: .75rem;
  font-size: 2.5rem;
  font-weight: 400;  
  text-transform: uppercase;

  @media screen and ${breakpoints.tabletLg} {
    font-size: 2rem;
  }

  @media screen and ${breakpoints.tabletSm} {
    font-size: 2rem;
  }

  @media screen and ${breakpoints.mobile} {
    font-size: .9375rem;
  }
`

export { H1, H2, H3, H4, H5, H6, P, Timezone } 