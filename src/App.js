import './App.css';
import { Routes, Route } from "react-router-dom";
import ReformHome from './components/ReformHome/ReformHome';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":reformName" element={<ReformHome />} />
      </Routes>
    </div>
  );
}

export default App;
