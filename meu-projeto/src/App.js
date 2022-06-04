import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';


function App() {
  const nome = "Gustavo"
  return (
    <div className="App">
      <SayMyName nome="Renan"/>
      <SayMyName nome="Taiz"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Rodrigo" idade="28" profissao="Programador" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
