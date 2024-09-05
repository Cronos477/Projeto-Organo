import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import './Colaborador.css'

const Colaborador = ({nome, id, cargo, imagem, headerColor, aoDeletar, favorito, aoFavoritar}) => {
    const favoritar = () => {
        aoFavoritar(id);
        console.log(id);
    }

    const heartIco = {
        color: '#ff0000',
        size: 32,
        onClick: favoritar
    }

    return (
        <div className='colaborador' style={{
            '--colaborador-header-color': headerColor
        }}>
            <AiFillCloseCircle color="#EF3333" size={25} className='deletar' onClick={() => aoDeletar(id)}/>
            <div className='cabecalho'>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className="favoritar">
                    {
                        favorito
                        ? <AiFillHeart {...heartIco}/>
                        : <AiOutlineHeart {...heartIco}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Colaborador