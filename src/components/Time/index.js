import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    return (
        (props.colaboradores.length > 0) ?
            <section className='time' style={{
                '--team-bg-color': props.corSecundaria,
                '--team-border-color': props.corPrimaria
            }}>
                <h3>{props.nome}</h3>
                <div className='colaboradores'>
                    {props.colaboradores.map(
                        colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} headerColor={props.corPrimaria}/>
                    )}
                </div>
            </section>
            : ''
    )
}

export default Time