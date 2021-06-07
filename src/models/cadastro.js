function validarCpf(cpf){
    if(cpf.length!==11)
        return {error:true, texto:"CPF deve conter 11 digitos"}
    else
        return {error:false, texto:""}
} 

function validarSenha(senha){
    if(senha.length < 4)
        return {error:true, texto:"A senha precisa ser maior que 4 digitos"}
    else
        return {error:false, texto:""}
} 

export {validarCpf, validarSenha}