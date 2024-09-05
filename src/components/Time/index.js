import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba'
import './Time.css'

const Time = (props) => {

    const corSecundaria = hexToRgba(props.corPrimaria, '0.4')

    return (
        (props.colaboradores.length > 0) ?
            <section className='time' style={{
                '--team-bg-color': corSecundaria,
                '--team-border-color': props.corPrimaria
            }}>
                <input value={props.corPrimaria} onChange={e => props.mudarCor(e.target.value, props.id)} type='color' className='colorInput'/>
                <h3>{props.nome}</h3>
                <div className='colaboradores'>
                    {props.colaboradores.map(
                        colaborador => <Colaborador
                            key={colaborador.nome}
                            id={colaborador.id}
                            nome={colaborador.nome}
                            cargo={colaborador.cargo}
                            imagem={colaborador.imagem}
                            favorito={colaborador.favorito}
                            headerColor={props.corPrimaria}
                            aoDeletar={props.aoDeletar}
                            aoFavoritar={props.aoFavoritar}
                        />
                    )}
                </div>
            </section>
            : ''
    )
}

export default Time