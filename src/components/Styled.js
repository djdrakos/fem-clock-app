import styled from 'styled-components';

const H1 = styled.h1`
  display: inline-block;
  font-size: 12.5rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -.025rem;
  text-transform: capitalize;
`

const H2 = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: calc(68/56);
  text-transform: capitalize;
`

const H3 = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: calc(28/24);
  text-transform: uppercase;
  letter-spacing: .3rem;
`

const H4 = styled.h4`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: calc(28/20);  
  text-transform: uppercase;
  letter-spacing: .25rem;
`

const H5 = styled.h5`
  margin-block-start: .8125rem;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: calc(28/18);  
  text-transform: capitalize;
  font-style: normal;
`

const H6 = styled.h6`
  font-size: .9375rem;
  font-weight: 400;
  text-transform: uppercase;
  line-height: calc(28/15);
  letter-spacing: .1875rem;
`

const P = styled.p`
  font-weight: 400;
  font-size: 1.125rem;
  line-height: calc(28/18);
  text-transform: capitalize;
`

export { H1, H2, H3, H4, H5, H6, P } 