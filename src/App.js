import './App.css';
import Accordion from './components/Accordion/Accordion';
import Header from './components/Header/Header';
import ReformContent from './components/ReformContent/ReformContent';
import AccordionItem from './components/Accordion/AccordionItem';

function App() {
  return (
    <div className="App">
      <Header />
      <ReformContent />
      <Accordion />
    </div>
  );
}

export default App;
