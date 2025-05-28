import "./App.css";
import VantaBackground from "./component/VantaBackground";

function App() {
  return (
    <>
      <VantaBackground />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          padding: "20px",
        }}
      >
        <h1>Olá, esse é o conteúdo acima do fundo animado!</h1>
        <p>Teste a fluidez da animação com conteúdo.</p>
      </div>
    </>
  );
}

export default App;
