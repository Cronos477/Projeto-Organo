import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const backgroundColor = {backgroundColor: props.corSecundaria}
    const borderColor= {borderColor: props.corPrimaria}

    return (
        <section className='time' style={backgroundColor}>
            <h3 style={borderColor}>{props.nome}</h3>
            <div className='colaboradores'>
                <Colaborador />
                <Colaborador />
            </div>
        </section>
    )
}

export default Time