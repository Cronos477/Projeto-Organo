import './Campo.css'


const Campo = ({label, type = 'text', placeholder, valor, obrigatorio, setValor}) => {
    const aoDigitar = (evento) => {
        setValor(evento.target.value)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input
                type={type}
                value={valor}
                onChange={aoDigitar}
                required={obrigatorio}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Campo