import { Container, Typography } from '@material-ui/core';
import React from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro';
import '@fontsource/roboto';
import {validarCpf, validarSenha} from './models/cadastro'
import ValidacoesCadastro from './contexts/ValidacoesCadastro';
function App() {
  return (
    <Container component='article' maxWidth='sm'>
      <Typography variant='h2' align='center'>Formulario de cadastro</Typography>
      <ValidacoesCadastro.Provider value={{cpf:validarCpf,senha:validarSenha }}>
        <FormularioCadastro/>
      </ValidacoesCadastro.Provider>
    </Container>
  );
}
  
export default App;
