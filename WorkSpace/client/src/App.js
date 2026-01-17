import logo from './logo.svg';
import './App.css';
import ValidarUsuarioForm from './ValidarUsuarioForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Aplicativo Validaciones Celular</h1>
        <ValidarUsuarioForm />
      </header>
    </div>
  );
}

export default App;
