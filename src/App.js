import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import ContactForm from './components/ContactForm/ContactForm';
import CardOffers from './components/CardOffers/CardOffers';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Blog from './pages/Blog/Blog';
import PacotesViagem from './pages/PacotesViagem/PacotesViagem';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='blog' element={<Blog />} />
          <Route path='pacotesdeviagem' element={<PacotesViagem />} />
          <Route path='contato' element={<ContactForm />} />
          <Route path='cadastro' element={<CardOffers />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
