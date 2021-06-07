import { TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';

function DadosEntrega({aoEnviar}){
    const [cep, setCep] = useState("")
    const [estado, setEstado] = useState("")
    const [cidade, setCidade] = useState("")
    const [numero, setNumero] = useState("")
    
    return(
        <form onSubmit = {(event)=>{
            event.preventDefault()
            aoEnviar({cep,estado,cidade,numero}) 
        }}>
            <TextField 
            variant="outlined" 
            value = {cep} 
            onChange={(event)=>{
                setCep(event.target.value)
            }}
             color='primary' 
             id = "cep" 
             label='Cep' 
             type = 'number' 
             margin='normal' 
             fullWidth/>
            <TextField variant="outlined" value = {estado} 
            onChange={(event)=>{
                setEstado(event.target.value)
            }}
             color='primary' id = "estado" label='Estado' type = 'text' margin='normal' margin='normal'/>
            <TextField variant="outlined" value = {cidade} 
            onChange={(event)=>{
                setCidade(event.target.value)
            }}
            color='primary' id = "cidade" label='Cidade' type = 'text' margin='normal' margin='normal'/>
            <TextField variant="outlined" value = {numero}
            onChange={(event)=>{
                setNumero(event.target.value)
            }}
            color='primary' id = "numero" label='Numero' type = 'number' margin='normal' margin='normal'/>
            <Button variant="contained" fullWidth color="primary" type='submit'>
                Finalizar
            </Button>
        </form>
    )
}

export default DadosEntrega