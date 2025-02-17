import './App.css';
import HelloWord from './components/HelloWord';
import DigaMeuNome from './components/DigaMeuNome';
import Pessoa from './components/pessoa';

function App() {
  const name = "Lucas";
  const idade = 19;
  const profissao = "Programador";
  const foto = "https://randomuser.me/api/portraits/lego/1.jpg";
  return (
    <div className="App">
      <h1>Olá {name}!</h1>
      <p>Estou aprendendo React</p>
      <HelloWord />
      <DigaMeuNome nome={name} />
      <DigaMeuNome nome="João" />
      <Pessoa nome={name} idade={idade} profissao={profissao} foto={foto} />
    </div>
  );
}

export default App;