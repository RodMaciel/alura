import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModifica = `${props.placeholder}...`

    return (
      <div className="campo-texto">
        <label>{props.label}</label>
        <input placeholder={placeholderModifica} />
      </div>
    );

}

export default CampoTexto;