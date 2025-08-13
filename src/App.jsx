import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntiMar from './pages/IntiMar';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntiMar />} />
      </Routes>
    </Router>
  );
}

export default App;
