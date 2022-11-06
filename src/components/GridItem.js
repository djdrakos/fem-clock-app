import styled, { css } from 'styled-components';
import breakpoints from '../styles/breakpoints';

const StyledDiv = styled.div`
  grid-column: auto / span ${props => props.sm ? props.sm : 12};

  ${props => props.xl && css`
  @media screen and ${breakpoints.desktop} {
    grid-column: auto / span ${props.xl};
    }
  `}


  ${props => props.l && css`
  @media screen and ${breakpoints.tabletLg} {
    grid-column: auto / span ${props.l};
    }
  `}


  ${props => props.m && css`
  @media screen and ${breakpoints.tabletSm} {
    grid-column: auto / span ${props.m};
    }
  `}


  ${props => props.sm && css`
  @media screen and ${breakpoints.mobile} {
    grid-column: auto / span ${props.sm};
    }
  `}
`

export default function GridItem({children, sm, m, l, xl, ...props}) {

  return (
    <StyledDiv sm={sm} m={m} l={l} xl={xl} {...props}>
      {children}
    </StyledDiv>
  )
}