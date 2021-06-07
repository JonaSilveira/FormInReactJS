import { Button, TextField, FormControlLabel, Switch } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import ValidacoesCadastro from '../contexts/ValidacoesCadastro';
import useErrors from '../hooks/useErrors';

function DadosPessoais({aoEnviar}){

    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCPF] = useState("")
    const [promocoes, setPromocoes] = useState(false)
    const [novidades, setNovidades] = useState(false) 
    const validacoes = useContext(ValidacoesCadastro)
    
    const [errors, validaCampos, possoEnviar] = useErrors(validacoes)
 
    return(
        <form onSubmit = {(event)=>{
            event.preventDefault()
            if(possoEnviar())               
                aoEnviar({nome, sobrenome, promocoes, novidades}) }}>
            <TextField variant="outlined" color='primary' id = "nome" label='Nome' margin='normal' fullWidth
            onChange = {(event)=>{
                setNome(event.target.value)    
            }}
            />
            <TextField variant="outlined" color='primary' id = "sobrenome" label='Sobrenome'margin='normal' fullWidth
            onChange = {(event)=>{
                setSobrenome(event.target.value)
            }}
            />
            <TextField variant="outlined" id = "CPF" label='CPF' margin='normal'fullWidth name="cpf"
            value={cpf}
            onChange ={(event)=>{
                setCPF(event.target.value)
            }}
            onBlur={validaCampos}
            error={errors.cpf.error}
            helperText = {errors.cpf.texto}
            />
            <FormControlLabel label='Promoções'control={<Switch checked={promocoes} name='promocoes' defaultChecked={promocoes} 
            onChange = {(event)=>{setPromocoes(event.target.checked)}}
            color='primary'/>} /> 
            <FormControlLabel label='Novidades' control={<Switch checked={novidades} name='novidades'
            onChange = {(event)=>{setNovidades(event.target.checked);console.log(novidades)}}
            defaultChecked={novidades} color='primary'/>} /> 
            <Button variant="contained" size="medium" color="primary" type='submit'>
                Cadastrar
            </Button>
        </form>
    );
    
}

export default DadosPessoais