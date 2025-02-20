import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Dashboard from './components/dashboard';
import GradeReport from './components/gradereport';
import InstructorContact from './components/instructor contact page';
import Login from './components/login';
import FAQs from './components/help and support';
import MissingGradeForm from './components/missing grade form';
import Navbar from './components/NavBar';
import Home from './components/home';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="gradereport" element={<GradeReport />} />
        <Route path="instructor contact page" element={<InstructorContact />} />
        <Route path="login" element={<Login />} />
        <Route path="help and support" element={<FAQs />} />
        <Route path="missing grade form" element={<MissingGradeForm />} />
      </Routes>
        <Footer />
    </>
  );
}

export default App;
