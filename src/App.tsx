import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Team from './pages/Team';
import Procedures from './pages/Procedures';
import ProcedureDetail from './pages/ProcedureDetail';
import Benefits from './pages/Benefits';
import Testimonials from './pages/Testimonials';
import BookAppointment from './pages/BookAppointment';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/procedures" element={<Procedures />} />
          <Route path="/procedure/:id" element={<ProcedureDetail />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
