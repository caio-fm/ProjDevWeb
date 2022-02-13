import React, {useState, useEffect} from "react";


function NewestUser(props) {

    const [newestuser, setNewestUser] = useState("Nenhum registrado!");

    useEffect(() => {
        let response = fetch('http://localhost:3001/users');
        response.then( (fetchedResponse) => {
          fetchedResponse.json().then((usersBackEnd) => {
            setNewestUser(usersBackEnd[usersBackEnd.length - 1].user);
          }
          )
        }
        )
      });
    return (

        <h1><br></br>
            O último usuário a ser registrado no backend foi: {newestuser}
        </h1>
    )


}

export default NewestUser;