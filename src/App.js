import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import ContactForm from './components/ContactForm/ContactForm';
import CardOffers from './components/CardOffers/CardOffers';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='contato' element={<ContactForm />} />
          <Route path='cadastro' element={<CardOffers />} />
          <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
