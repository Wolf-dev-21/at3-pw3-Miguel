import { useState } from "react";
import axios from "axios";


function UpdateUser(){

    const [name, setName] = useState("");
    const [senha, setSenha] = useState("");

    function UpdateUser(event){

        event.preventDefault();

        alert(`NOME: ${name} SENHA: ${senha} `)
        
        let user = JSON.stringify({name:name, senha:senha}); //converte dado para json
        console.log(user);

        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((json) => console.log(json))
                .catch((error)=>{
                console.log(error);
                });



        }
            return(
                <form onSubmit={UpdateUser} className="form">
        
                    <h1>Atualização de</h1>
        
                    <input
                        type="text"
                        placeholder="Novo nome"
                        value={name}
                        onChange={(event)=>{setName(event.target.value)}}
                    />
        
        
                    <input
                        type="password"
                        placeholder="Nova senha"
                        value={senha}
                        onChange={(event)=>{setSenha(event.target.value)}}
                    />
        
        
                    <button type="submit">Atualizar</button>

                
                </form>
            );
        }
    
        
        export default UpdateUser;