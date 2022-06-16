import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

import Container from './components/layout/Container';

function App() {
  return (
   <Router>
    <div>
      <Link to="/">Home</Link>
      <Link to="/Company">Empresa</Link>
      <Link to="/Contact">Contato</Link>
      <Link to="/NewProject">Novo Projeto</Link>
    </div>
    <Container customClass="min-height" >
      <Routes>
          <Route path='/' exact='true' element={<Home />}></Route>
          <Route path='/Company' element={<Company/>}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/NewProject' element={<NewProject/>}></Route>
      </Routes>
    </Container>
    <p>Footer</p>
   </Router>
  );
}

export default App;
