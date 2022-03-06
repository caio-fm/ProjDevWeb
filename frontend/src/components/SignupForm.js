import React, {useEffect, useState, createContext} from 'react';
import NewestUser from './NewestUser';

export const SignupContext = createContext(null);

function SignupForm(props) {
    const [newestUser, setNewestUser] = useState("");

    let usernameValue = "";
    let passwordValue = "";

    const onChangeUsername = (event) => {
        usernameValue = event.target.value;
    }

    const onChangePassword = (event) => {
        passwordValue = event.target.value;
    }

    const createUser = (event) => {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: usernameValue, password: passwordValue })
        };
    
        fetch('http://localhost:3001/users', requestOptions)
            .then(response => response.json())
            .then(data => {});

        alert("registrado!");
    }


    return (
        <SignupContext.Provider value={{setNewestUser, newestUser}}>
          <form>
            <label>Usuário 
            <input onChange={onChangeUsername} type="text"></input>
            </label><br></br>
            <label>Senha 
            <input onChange={onChangePassword}  type="text"></input>
            </label><br></br>
            <input onClick={createUser} type="submit" value="Registrar" />
          </form>
          <NewestUser newUsername={newestUser}></NewestUser>
        </SignupContext.Provider>
      );


}

export default SignupForm;