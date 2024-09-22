import './App.css';
import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />

      <Button type='text'>Ver Detalhes</Button>

      <Footer />
    </div>
  );
}

export default App;
