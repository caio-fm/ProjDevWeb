import React, {useEffect, useState, useContext} from 'react';
import { SignupContext } from './SignupForm';

function NewestUser(props) {

    const {newestUser} = useContext(SignupContext);
    const {setNewestUser} = useContext(SignupContext);

    const handleClick = () => {
        fetch('http://localhost:3001/users')
            .then(response => response.json())
            .then(data => {
                let users = Array.from(data);
                setNewestUser(users[users.length - 1].username);
            });
    }

    return (
        <div>
        <h1>O último usuário registrado no site foi: {newestUser} </h1>
        <button onClick={handleClick} >GET último usuário</button>
        </div>
      );
}

export default NewestUser;