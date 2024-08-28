import './Colaborador.css'

const Colaborador = ({nome, cargo, imagem, headerColor}) => {
    return (
        <div className='colaborador' style={{
            '--colaborador-header-color': headerColor
        }}>
            <div className='cabecalho'>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador