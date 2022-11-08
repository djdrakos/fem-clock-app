import styled, { css } from 'styled-components';
import breakpoints from '../styles/breakpoints';

const StyledDiv = styled.div.attrs( props => ({ style:  props }))`
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

const sizePropsArray = [ 
    { s }, 
    { m }, 
    { l }, 
    { xl } 
  ]

const createGridOptions = (sizeProps) => {
  return sizeProps.reduce((options, currentSize, i) => {
    const [[ sizeName, sizeValue ]] = Object.entries(currentSize)

    if(sizeValue === undefined){
      options[sizeName] = options.default
    }

    if(typeof sizeValue === 'number') {
      options[sizeName] = { 
        colStart: 'auto', 
        colSpan: `span ${sizeValue}`
      }
      options.default = { 
        colStart: 'auto', 
        colSpan: `span ${sizeValue}`
      }
    }

    if(Array.isArray(sizeValue)) {
      options[sizeName] = { 
        colStart: sizeValue[0], 
        colSpan: `span ${sizeValue[1]}`
      }
      options.default = { 
        colStart: sizeValue[0], 
        colSpan: `span ${sizeValue[1]}`
      }
    }

    return options
  }, { default: {
    colStart: 1, 
    colSpan: 'span 12'
    }
  })
}
  

return (
  <StyledDiv options={createGridOptions(sizePropsArray)} {...props}>
      {children}
    </StyledDiv>
  )
}