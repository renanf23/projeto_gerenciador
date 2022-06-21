import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

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
          <Route path='costs-site/' exact='true' element={<Home />}></Route>
          <Route path='costs-site/Company' element={<Company/>}></Route>
          <Route path='costs-site/Contact' element={<Contact />}></Route>
          <Route path='costs-site/NewProject' element={<NewProject/>}></Route>
          <Route path='costs-site/Projects' element={<Projects/>}></Route>
      </Routes>
    </Container>
    <Footer />
   </Router>
  );
}

export default App;
