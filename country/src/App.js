import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import logo from '../src/brand.png';
import Home from './Components/Home/Home';
import { Container, Navbar } from 'react-bootstrap';
import Error404 from './Components/Error404/Error404';
import CountryDetails from './Components/CountryDetails/CountryDetails';

function App() {
  return (
    <>
        <Navbar className='navBar'>
          <Container>
            <Navbar.Brand to="/">
              <img
                src={logo}
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
          </Container>
        </Navbar>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/country/:countryName' element={<CountryDetails />} />
          <Route path ='*' element={<Error404 />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
