import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import { v4 as uuidv4 } from 'uuid';

const App = () => {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Suporte',
      cor: '#57C278',
    },
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#82CFFA',
    },
    {
      id: uuidv4(),
      nome: 'Comercial',
      cor: '#A6D157',
    },
    {
      id: uuidv4(),
      nome: 'Hunter',
      cor: '#E06B69',
    },
    {
      id: uuidv4(),
      nome: 'RH',
      cor: '#DB6EBF',
    },
    {
      id: uuidv4(),
      nome: 'Financeiro',
      cor: '#FFBA05',
    },
    {
      id: uuidv4(),
      nome: 'Gestão',
      cor: '#FF8A29',
    }
  ]);

  const colaboradoresInicial = [
    {
      "id": uuidv4(),
      "favorito": false,
      "nome": "Isabela Braga",
      "cargo": "Supervisora de Suporte",
      "imagem" : "https://cdn.discordapp.com/avatars/1130497530703130675/202ac5c957deaff3cf5c4068ee6fb97e.webp",
      "time": "Suporte"
    },
    {
      "id": uuidv4(),
      "favorito": false,
      "nome": "Alexandra Alves",
      "cargo": "Agente de Suporte",
      "imagem": "https://unicocontato.atenderbem.com/static/getUserProfilePic?id=810&auth=JOtczsoxbYs7mOsv_37WRACvQ671-D7Wn2dQeBHkmf0&u=1",
      "time": "Suporte"
    },
    {
      "id": uuidv4(),
      "favorito": false,
      "nome": "Maicon Lucas",
      "cargo": "Agente de Suporte",
      "imagem": "https://cdn.discordapp.com/avatars/1130481207679914045/0ab26d56f0fb42b0337acad7d6519b84.webp",
      "time": "Suporte"
    },
    {
      "id": uuidv4(),
      "favorito": false,
      "nome": "Lúcia Felix",
      "cargo": "Agente de Suporte",
      "imagem": "https://cdn.discordapp.com/avatars/1129509875400052786/20d1f5602a227f3bdcc378fa1979ba6a.webp",
      "time": "Suporte"
    },
    {
      "id": uuidv4(),
      "favorito": false,
      "nome": "Rafael Silva",
      "cargo": "Agete de Suporte",
      "imagem": "https://cdn.discordapp.com/avatars/1133762535582072894/49d10e61fd6c0ac0998e2b1d59958a37.webp",
      "time": "Suporte"
    },
    {
      "id": uuidv4(),
      "favorito": false,
      "nome": "Luiz Henrique",
      "cargo": "Agente de Suporte",
      "imagem": 'https://cdn.discordapp.com/avatars/1220006767040266361/5511e3bc2a29303e979b60de717a1fb3.webp',
      "time": "Suporte"
    },
    {
      "id": uuidv4(),
      "favorito": false,
      "nome": "Felipe Hildegardes",
      "cargo": "Programador Júnior",
      "imagem": "https://cdn.discordapp.com/avatars/1179793538628722731/88e0d290027c937df16b8642abdd6423.webp",
      "time": "Programação"
    },
    {
      "id": uuidv4(),
      "favorito": false,
      "nome": "Leandro Borges",
      "cargo": "Programador Júnior",
      "imagem": "https://cdn.discordapp.com/avatars/1264902730154250293/8ee85e149af884af9a2fc20ea3f8a31e.webp",
      "time": "Programação"
    },
    {
      "id": uuidv4(),
      "favorito": false,
      "nome": "João Vitor",
      "cargo": "Programador Júnior",
      "imagem": "https://cdn.discordapp.com/avatars/1239666913085227008/9a7fd3ec0f0d2052e0f5107f080b5a54.webp",
      "time": "Programação"
    },
    {
      "id": uuidv4(),
      "favorito": false,
      "nome": "Lorena Fagundes",
      "cargo": "Supervisora Comercial",
      "imagem": "https://cdn.discordapp.com/avatars/1124075804305915905/099488c03a8db7a584a1e339eeb04e69.webp",
      "time": "Comercial"
    },
    {
      "id": uuidv4(),
      "favorito": false,
      "nome": "Moara Pereira",
      "cargo": "Gerente de Grandes Contas",
      "imagem": "https://cdn.discordapp.com/avatars/1130478137323556984/a938a7f4193e9be892fffa67d8327d11.webp",
      "time": "Comercial"
    },
    {
      "id": uuidv4(),
      "favorito": false,
      "nome": "Marjorie Posceschy",
      "cargo": "Atendente Comercial",
      "imagem": "https://cdn.discordapp.com/avatars/1130478101906858004/471a4ef695e2dc865aca5f41602d1a2f.webp",
      "time": "Comercial"
    },
    {
      "id": uuidv4(),
      "favorito": false,
      "nome": "Ityara",
      "cargo": "Atendente Comercial",
      "imagem": "https://cdn.discordapp.com/avatars/1197137197195874324/e966ead29ed82675f0243491342a37a8.webp",
      "time": "Comercial"
    },
    {
      "id": uuidv4(),
      "favorito": false,
      "nome": "Elaine Santos",
      "cargo": "Hunter",
      "imagem": "https://unicocontato.atenderbem.com/static/getUserProfilePic?id=644&auth=y8HUC6dIKVu16Z2MSwfGLtLUVhd5IV_91CmNpXTUrx0&u=2",
      "time": "Hunter"
    },
    {
      "id": uuidv4(),
      "favorito": false,
      "nome": "Rayane",
      "cargo": "Responsável RH",
      "imagem": "https://th.bing.com/th/id/OIP.aiDGdmdUAX_iNgRMERipyQHaHF?rs=1&pid=ImgDetMain",
      "time": "RH"
    },
    {
      "id": uuidv4(),
      "favorito": false,
      "nome": "Carlos Antonio",
      "cargo": "Gerente Financeiro",
      "imagem": "https://cdn.discordapp.com/avatars/1168868345899122688/f3300c903b1a2d29bf214e9be521a155.webp",
      "time": "Financeiro"
    },
    {
      "id": uuidv4(),
      "favorito": false,
      "nome": "Olivia Leão",
      "cargo": "Auxiliar",
      "imagem": "https://th.bing.com/th/id/OIP.aiDGdmdUAX_iNgRMERipyQHaHF?rs=1&pid=ImgDetMain",
      "time": "Financeiro"
    },
    {
      "id": uuidv4(),
      "favorito": false,
      "nome": "Renato Diniz",
      "cargo": "Co-Fundador",
      "imagem": "https://th.bing.com/th/id/OIP.aiDGdmdUAX_iNgRMERipyQHaHF?rs=1&pid=ImgDetMain",
      "time": "Gestão"
    },
    {
      "id": uuidv4(),
      "favorito": false,
      "nome": "Círleia Morato",
      "cargo": "Co-Fundadora",
      "imagem": "https://cdn.discordapp.com/avatars/1133006914935083068/6bcf135209a647ef15491328ea8baf0c.webp",
      "time": "Gestão"
    }
  ];

  const [colaboradores, setColaboradores] = useState(colaboradoresInicial);

  const colaboradorNovo = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
    console.log(colaboradores);
  }

  const deletarColaborador = (id) => {
    setColaboradores(colaboradores.filter(
      colaborador => colaborador.id !== id
    ));
  }

  const mudarCorTime = (cor, id) => {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  const cadastrarTime = (novoTime) => {
    setTimes([...times, {...novoTime, id: uuidv4()}]);
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito;
      };
      return colaborador
    }));
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)}
        colaboradorNovo={colaborador => colaboradorNovo(colaborador)}
      />
      {
        times.map(time => <Time
          mudarCor={mudarCorTime}
          key={time.id}
          id={time.id}
          nome={time.nome}
          corPrimaria={time.cor}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          aoFavoritar={resolverFavorito}
        />)
      }
    </div>
  );
}

export default App;
