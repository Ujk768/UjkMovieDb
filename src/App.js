import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './component/Header';
import SimpleBottomNavigation from './component/NavBar';
import Movies from './Pages/Movies';
import Search from './Pages/Search';
import Series from './Pages/Series';
import Trending from './Pages/Trending';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="App">
          <Container>
            <Routes>
              <Route path="/" element={<Trending />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/series" element={<Series />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </Container>
        </div>
        <SimpleBottomNavigation />
      </BrowserRouter>
    </>
  );
}

export default App;
