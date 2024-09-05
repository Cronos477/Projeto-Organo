import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css'
import { useState } from 'react'

const Formulario = (props) => {

    var times = props.times

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
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    return (
      <section className="formulario">
        <form onSubmit={aoSalvar}>
          <h2>Preencha os dados para criar o card do colaborador</h2>
          <Campo
            valor={nome}
            setValor={(valor) => setNome(valor)}
            obrigatorio={true}
            label="Nome"
            placeholder="Digite seu nome"
          />
          <Campo
            valor={cargo}
            setValor={valor => setCargo(valor)}
            obrigatorio={true}
            label="Cargo"
            placeholder="Digite seu cargo"
          />
          <Campo
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
        <form onSubmit={(evento) => {
          evento.preventDefault();
          props.cadastrarTime({nome: nomeTime, cor: corTime});
          setNomeTime('');
          setCorTime('');
        }}>
          <h2>Preencha os dados para criar um novo time</h2>
          <Campo
            valor={nomeTime}
            setValor={(valor) => setNomeTime(valor)}
            obrigatorio
            label="Nome"
            placeholder="Digite o nome do time"
          />
          <Campo
            type="color"
            valor={corTime}
            setValor={valor => setCorTime(valor)}
            obrigatorio
            label="Cor"
            placeholder="Digite a cor do time"
          />
          <Botao>Criar Time</Botao>
        </form>
      </section>
    );
};

export default Formulario;
