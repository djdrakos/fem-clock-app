import styled, { css } from 'styled-components';
import breakpoints from '../styles/breakpoints';

const StyledDiv = styled.div`
  ${ ({ options }) => options && css`
    @media screen and ${breakpoints.desktop} {
      grid-column:  ${options.xl.colStart} / ${options.xl.colSpan};
    }
    `}

    ${ ({ options }) => options && css`
    @media screen and ${breakpoints.tabletLg} {
      grid-column: ${options.l.colStart} / ${options.l.colSpan};
    }
    `}

    ${ ({ options }) => options && css`
    @media screen and ${breakpoints.tabletSm} {
      grid-column: ${options.m.colStart} / ${options.m.colSpan};
    }
    `}

  ${ ({ options }) => options && css`
    @media screen and ${breakpoints.mobile} {
      grid-column: ${options.s.colStart} / ${options.s.colSpan};
    }
  `}
`

export default function GridItem({children, s, m, l, xl, ...props}) {

const sizeProps = { s, m, l, xl }

const createGridOptions = (sizeProps) => {
  const sizeArray = Object.keys(sizeProps);

  return sizeArray.reduce((options, currentSize, i, sizeArray) => {
    if(sizeProps[currentSize] === undefined){
      options[currentSize] = { 
        colStart: 1, 
        colSpan: 'span 12'
      }
    }
    if(typeof sizeProps[currentSize] === 'number') {
      options[currentSize] = { 
        colStart: 'auto', 
        colSpan: `span ${sizeProps[currentSize]}`
      }
    }  
    if(Array.isArray(sizeProps[currentSize])) {
      options[currentSize] = { 
        colStart: sizeProps[currentSize][0], 
        colSpan: `span ${sizeProps[currentSize][1]}`
      }
    }
    console.log(options)
    return options
  }, {})
}
  

return (
  <StyledDiv options={createGridOptions(sizeProps)} {...props}>
      {children}
    </StyledDiv>
  )
}