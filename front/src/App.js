import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Button } from 'antd';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProfilPage from './pages/ProfilPage';
import DestinationsPage from './pages/DestinationsPage'
import FavoritePage from './pages/FavoritePage';
import FlightsPage from './pages/FlightsPage';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Layout>
        <Routes>
          <Route path='/flights' element={<FlightsPage />} />
          <Route path='/favorite' element={<FavoritePage />} />
          <Route path='/destinations' element={<DestinationsPage />} />
          <Route path='/profile' element={<ProfilPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Layout>
      <Footer />
    </BrowserRouter>
  );
}

export default App;