import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';

const App = () => {

  const [colaboradores, setColaboradores] = useState([])

  const colaboradorNovo = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
    console.log(colaboradores)
  }

  return (
    <div className="App">
      <Banner />
      <Formulario colaboradorNovo={colaborador => colaboradorNovo(colaborador)}/>
      <Time nome="Programação"/>
    </div>
  );
}

export default App;
