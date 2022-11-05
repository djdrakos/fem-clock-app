import Main from '../Main';
import Details from '../Details';
import StyledApp from './StyledApp'
import Quotation from '../Quotation'

function App() {
  const drawerIsOpen = true;
  return (
    <StyledApp>
      { drawerIsOpen || <Quotation /> }
      <Main />
      { drawerIsOpen && <Details /> } 
      </StyledApp>
  );
}

export default App;
