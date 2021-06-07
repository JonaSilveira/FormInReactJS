import React,{useState} from 'react';


function useErrors(validacoes){
    const initialState = setInitialState(validacoes)
    const [errors, setErrors]= useState(initialState)

    function validaCampos(event){
        const {name, value} = event.target 
        const novoEstado = {...errors}
        novoEstado[name] = validacoes[name](value)
        setErrors(novoEstado)
    }
    function possoEnviar(){ 
        for(let campo in errors){ 
            if(errors[campo].error)
                return false
        }
        return true
    }

    return [errors, validaCampos, possoEnviar]
}

function setInitialState(validacoes){
    const initialState = {}
    for(let campo in validacoes){
        initialState[campo] = {errors:false, texto:""}
    }
    return initialState
}

export default useErrors