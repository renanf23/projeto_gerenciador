import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
   <Router>
    <Navbar />
    <Container customClass="min-height" >
      <Routes>
          <Route path='/' exact='true' element={<Home />}></Route>
          <Route path='/Company' element={<Company/>}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/NewProject' element={<NewProject/>}></Route>
          <Route path='/Projects' element={<Projects/>}></Route>
      </Routes>
    </Container>
    <Footer />
   </Router>
  );
}

export default App;
