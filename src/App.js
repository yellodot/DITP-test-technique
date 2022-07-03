import './App.css';
import Accordion from './components/Accordion/Accordion';
import Header from './components/Header/Header';
import ReformContent from './components/ReformContent/ReformContent';
import ReformIndicators from './components/ReformIndicators/ReformIndicators';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <ReformContent />
      <ReformIndicators />
      <Accordion />
      <Footer />
    </div>
  );
}

export default App;
