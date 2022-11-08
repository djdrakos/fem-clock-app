import styled from 'styled-components';
import { useEffect, useState } from 'react'
import { ReactComponent as IconRefresh } from '../assets/desktop/icon-refresh.svg'
import GridContainer from './GridContainer';
import GridItem from './GridItem';
import { H5, P } from './Typography';

const StyledFig = styled.figure`
  .flex {
    flex-direction: row;
    gap: 1rem;
  }

  blockquote {
    ::before, ::after {
      content: '"';
    }
  }
  
  button {
    background: none;
    border-radius: 50%;
    height: 2.5rem;
    width: 2.5rem;
    justify-content: center;
  }

  button:hover, button:focus {
    path { opacity: 1; }
  }
`

export default function Quote() {
  const [ quote, setQuote ] = useState(null);
  
  useEffect(() => {
    const fetchQuote = async () => {
      const res = await fetch("https://programming-quotes-api.herokuapp.com/Quotes/random");
      const quote = await res.json()
      setQuote(quote)
    }
    fetchQuote()
  }, [])

  const handleRefreshQuote = () => {

  }

  return (
      <StyledFig className='quote'>
        <GridContainer>
          <GridItem s={12} m={11} l={7} xl={6} className='flex'>
            <div className="wrapper">
              { quote === null
              ? <p>Loading Quote...</p>
              : 
              <>
                <P as="blockquote">
                  {quote?.en}
                </P>
                <H5 as="figcaption">
                  {quote?.author}
                </H5>
              </>
              }
            </div>

            <button onClick={handleRefreshQuote}>
              <IconRefresh />
            </button>
          </GridItem>
        </GridContainer>
      </StyledFig>
  )
}