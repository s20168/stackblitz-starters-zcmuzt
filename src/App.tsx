import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from 'react-router-dom';

const Home = () => <h1>Strona główna</h1>;
const About = () => <h1>O nas</h1>;
const Services = () => <h1>Usługi</h1>;

const Contact = ({ countryCode }) => {
  return <h1>Kontakt {countryCode}</h1>;
};

Contact.propTypes = {
  countryCode: PropTypes.oneOf(['pl', 'us', 'de']),
};

const NotFound = () => {
  const location = useLocation();
  return <h1>Nie znaleziono elementu: {location.pathname}</h1>;
};

const App = () => (
  <Router>
    <div>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">Strona główna</Link>
          </li>
          <li>
            <Link to="/about">O nas</Link>
          </li>
          <li>
            <Link to="/services">Usługi</Link>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
          <li>
            <Link to="/contact/us">Kontakt (US)</Link>
          </li>
          <li>
            <Link to="/contact/pl">Kontakt (PL)</Link>
          </li>
          <li>
            <Link to="/contact/de">Kontakt (DE)</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact countryCode={null} />} />
        <Route path="/contact/pl" element={<Contact countryCode="pl" />} />
        <Route path="/contact/de" element={<Contact countryCode="de" />} />
        <Route path="/contact/us" element={<Contact countryCode="us" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </Router>
);

export default App;
