import { TextField, Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import ValidacoesCadastro from '../contexts/ValidacoesCadastro';
import useErrors from '../hooks/useErrors';

function DadosUsuario({aoEnviar}){

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("") 

    const validacoes = useContext(ValidacoesCadastro)
    const [errors, validaCampos, possoEnviar] = useErrors(validacoes)
    return(
        <form onSubmit = {(event)=>{
            event.preventDefault()
            if(possoEnviar())              
                aoEnviar({email, senha})
        }}>
            <TextField variant="outlined" 
            value={email}
            color='primary' id = "email" label='Email' type="email"margin='normal' fullWidth required
            onChange = {(event)=>{
                setEmail(event.target.value)
            }}
            />
            <TextField 
            value={senha}
            onBlur={validaCampos}
            name="senha"
            error={errors.senha.errors}
            helperText = {errors.senha.texto}
            onChange ={(event)=>{
                setSenha(event.target.value)
            }}
            variant="outlined" color='primary' id = "senha" type="password" label='Senha'margin='normal' fullWidth required/>
            <Button variant="contained" size="medium" color="primary" type='submit' >
                Próximo
            </Button>
        </form>
    );

}

export default DadosUsuario