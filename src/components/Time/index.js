import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    return (
        <section className='time' style={{
            '--team-bg-color': props.corSecundaria,
            '--team-border-color': props.corPrimaria
        }}>
            <h3>{props.nome}</h3>
            <div className='colaboradores'>
                <Colaborador headerColor={props.corPrimaria}/>
                <Colaborador headerColor={props.corPrimaria}/>
            </div>
        </section>
    )
}

export default Time