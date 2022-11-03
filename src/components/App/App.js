import { ThemeProvider } from 'styled-components';
import themes from '../../styles/theme'
import { GlobalStyles } from '../../styles/global'
import { ReactComponent as IconArrowDown } from '../../assets/desktop/icon-arrow-down.svg'
import { ReactComponent as IconArrowUp } from '../../assets/desktop/icon-arrow-up.svg'
import { ReactComponent as IconSun } from '../../assets/desktop/icon-sun.svg'
import { ReactComponent as IconMoon } from '../../assets/desktop/icon-moon.svg'

function App() {
  return (
    <ThemeProvider theme={themes.day}>
      <>
        <GlobalStyles />
        <div className="App">

          <main>
            <p>
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta et diam in vestibulum. Aliquam nunc enim, condimentum in volutpat viverra, ultricies non sem.'
            </p>
            <h5>
              Phasellus eu Nisi Mauris
            </h5>


            <h4>
              { true 
              ? <><IconSun /> Good Morning</> 
              : <><IconMoon />Good Evening</>},  it's currently
            </h4> 
            <h1>
              9:54
            </h1>
            PST

            <h3>
              in Portland, USA
            </h3>

            <button>
              { true 
              ? <>More <IconArrowDown /></> 
              : <>Less <IconArrowUp /></> }
            </button>

            <h6>
              Current timezone
            </h6>
            <h2>
              United States/Portland
            </h2>

            <h6>
              Day of the year
            </h6>
            <h2>
              312
            </h2>

            <h6>
              Day of the week
            </h6>
            <h2>
              Tuesday
            </h2>

            <h6>
              Week number
            </h6>
            <h2>
              44
            </h2>

          </main> 
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
