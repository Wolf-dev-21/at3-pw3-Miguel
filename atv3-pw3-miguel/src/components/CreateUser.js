import { useState } from "react";
import axios from "axios";


function CreateUser(){

    const [name, setName] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function creatUser(event){

        event.preventDefault();

        alert(`NOME: ${name} DATA DE NASCIMENTO: ${dataNascimento} EMAIL: ${email} SENHA: ${senha} `)
        
        let user = JSON.stringify({name:name, dataNascimento:dataNascimento, email:email, senha:senha}); //converte dado para json
        console.log(user);

        //axios aqui
        axios.post('https://reqres.in/api/users',user)
        .then((response)=>{
        console.log(response);
        })
            .catch((error)=>{
            console.log(error);
            alert(error);
            });

}


    return(
        <form onSubmit={creatUser} className="form">

            <h1>Formulário de cadastro</h1>

            <input
                type="text"
                placeholder="digite seu nome aqui"
                value={name}
                onChange={(event)=>{setName(event.target.value)}}
            />

            <input
                type="date"
                placeholder="digite sua data de nascimento aqui"
                value={dataNascimento}
                onChange={(event)=>{setDataNascimento(event.target.value)}}
            />

<input
                type="email"
                placeholder="digite seu email aqui"
                value={email}
                onChange={(event)=>{setEmail(event.target.value)}}
            />

<input
                type="password"
                placeholder="digite sua senha aqui"
                value={senha}
                onChange={(event)=>{setSenha(event.target.value)}}
            />


            <button type="submit">Cadastrar</button>
        
        </form>
    );
}

export default CreateUser;