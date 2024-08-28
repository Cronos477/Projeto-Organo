import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css'
import { useState } from 'react'

const Formulario = (props) => {

    const times = props.times

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.colaboradorNovo({
          nome,
          cargo,
          imagem,
          time
        })
        setNome('')
        setCargo('')
        setIamgem('')
        setTime('')
    }

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setIamgem] = useState('')
    const [time, setTime] = useState('')

    return (
      <section className="formulario">
        <form onSubmit={aoSalvar}>
          <h2>Preencha os dados para criar o card do colaborador</h2>
          <CampoTexto
            valor={nome}
            setValor={(valor) => setNome(valor)}
            obrigatorio={true}
            label="Nome"
            placeholder="Digite seu nome"
          />
          <CampoTexto
            valor={cargo}
            setValor={valor => setCargo(valor)}
            obrigatorio={true}
            label="Cargo"
            placeholder="Digite seu cargo"
          />
          <CampoTexto
            valor={imagem}
            setValor={valor => setIamgem(valor)}
            obrigatorio={false}
            label="Imagem"
            placeholder="Digite o endereço da sua Imagem"
          />
          <ListaSuspensa
            obrigatorio={true}
            label="Time"
            itens={times}
            valor={time}
            setValor={valor => setTime(valor)}
          />
          <Botao>Criar Card</Botao>
        </form>
      </section>
    );
};

export default Formulario;
