import React, { useState, useEffect, Fragment } from 'react';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario'
import DadosEntrega from './DadosEntrega'
import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';
function FormularioCadastro({validacoes}){

    const [etapaAtual, setEtapaAtual] = useState(0)
    const [dadosColetados, setDados] = useState({})

    useEffect(()=>{
        console.log(dadosColetados)
    })

    function proximo(dados){
        setEtapaAtual(etapaAtual+1)
    }

    function coletarDados(dados){
        setDados({...dadosColetados, ...dados}) 
        proximo()
    }

    const etapas = [
        <DadosUsuario aoEnviar={coletarDados} validacoes={validacoes}/> ,
        <DadosPessoais aoEnviar={coletarDados}validacoes={validacoes}/> ,
        <DadosEntrega aoEnviar={coletarDados}validacoes={validacoes}/>,
        <Typography variant="h5" align="center"> Obrigado por Cadastrar</Typography> 
    ]   

    return( 
        <Fragment>
            <Stepper activeStep={etapaAtual}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Entrega</StepLabel></Step>
            </Stepper>
           {etapas[etapaAtual]}
        </Fragment>
    );
    
}

export default FormularioCadastro