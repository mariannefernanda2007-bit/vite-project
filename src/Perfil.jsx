import { useState } from "react";

function perfil(){

    let [ estaExibindoPerfil, alteraEstaExibindoPrefil] = useState(false)


    let usuario = {
        nome: "Mary",
        email: "mary@mail.com",
        senha: "123123",
    }

    return(
    <div>
        <h1>perfil de usuario</h1>
        <p>Veja aqui suas informacoes do perfil</p>
        <button onClick={ ()=>  alteraEstaExibindoPrefil( !estaExibindoPerfil) } >Carregar perfil</button>

    
        {
            estaExibindoPerfil == true ?
                <div>
                    <p>nome:{usuario.nome}  </p>
                    <p>email: {usuario.email} </p>
                    <button>Alterar senha</button>
                </div>
            : 
                <p>Não está mostrando...</p>
        }






    </div>
)

}


export default perfil
