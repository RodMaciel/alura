import CampoTexto from "../CampoTexto";
import "./Formulario.css";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do Squad</h2>
        <CampoTexto label="Nome" placeholder="Digite seu Nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu Cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da" />
      </form>
    </section>
  );
};

export default Formulario;
