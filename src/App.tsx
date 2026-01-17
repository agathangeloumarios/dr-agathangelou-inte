import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';
import Team from './pages/Team';
import Procedures from './pages/Procedures';
import ProcedureDetail from './pages/ProcedureDetail';
import Benefits from './pages/Benefits';
import Testimonials from './pages/Testimonials';
import BookAppointment from './pages/BookAppointment';
import PhotoUploadHelper from './pages/PhotoUploadHelper';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/procedures" element={<Procedures />} />
            <Route path="/procedure/:id" element={<ProcedureDetail />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/photo-upload-helper" element={<PhotoUploadHelper />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
