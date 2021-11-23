import React from 'react';
import Header from './components/Header/Header';
import PrivacyPolicy from './components/PrivacyPolicy';
import SingleMovieFetch from './components/SingleMovieFetch';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Registration from './components/Registration';
import Homepage from './pages/Homepage';
import Movies from './pages/Movies';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Routes>
          {/* Movies Route */}
          <Route exact path="/movies" element={<Movies />} />
            
          {/* Register Route */}
          <Route exact path="/register" element={<Registration />} />
      
          <Route exact path="/:movid" element={<SingleMovieFetch />} />

          {/* Home Route */}
          <Route exact path="/" element={ <Homepage /> } />
        </Routes>

        <PrivacyPolicy />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
