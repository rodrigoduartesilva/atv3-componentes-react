import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
