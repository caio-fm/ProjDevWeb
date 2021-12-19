import React, {useState} from 'react';

function WelcomeUser(props) {
    const [loginStatus, setLoginStatus] = useState("Login");
    const handleClick = () => {
        if (loginStatus === "Login") setLoginStatus("Logado. Clique de novo para logout");
        else setLoginStatus("Login");
    }

    return (

        <h1>{props.text}<br></br><br></br>
            <button onClick={handleClick}>{loginStatus}</button>
        </h1>
    )


}

export default WelcomeUser;