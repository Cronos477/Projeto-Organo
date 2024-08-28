import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    const aoAlterar = (evento) => {
        props.setValor(evento.target.value)
    }

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={aoAlterar} required={props.obrigatorio} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa