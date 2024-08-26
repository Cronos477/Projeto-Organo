import './Colaborador.css'

const Colaborador = (props) => {
    return (
        <div className='colaborador' style={{
            '--colaborador-header-color': props.headerColor
        }}>
            <div className='cabecalho'>
                <img src='https://github.com/Cronos477.png' alt='Cronos'/>
            </div>
            <div className='rodape'>
                <h4>Felps</h4>
                <h5>Programador</h5>
            </div>
        </div>
    )
}

export default Colaborador