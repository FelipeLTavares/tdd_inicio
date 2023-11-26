import "./App.css";
import TextField from "./components/Inputs/text";
import masks from "./utils/masks";

function App() {
  return <div className="container">
      <h2>Campo sem erro</h2>
      <TextField placeholder="Nome" error />
      <h2>Campo com erro</h2>
      <TextField placeholder="Sobrenome" />
      <h2>Campo com máscara de CPF</h2>
      <TextField placeholder="CPF" mask={masks.cpf} />
  </div>;
}

export default App;
