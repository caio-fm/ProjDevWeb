import React, {useState} from 'react';

function Button(props) {
    const [text, setText] = useState("Clique aqui para curtir o Game Zone!");
    const [contador, setContador] = useState(0);
    const handleClick = () => setContador(contador + 1);

    return (
        <button onClick={handleClick}>Esse botão foi apertado {contador} vezes</button>
    )


}

export default Button;