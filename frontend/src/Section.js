import logo from './logo.svg';
import './App.css';
import SignupForm from './components/SignupForm.js';


function Section() {

  return (
    <div className="Section">
        Ainda não existem tópicos nessa seção! Poste o primeiro!<br></br>
        <textarea placeholder='Escreva o título do tópico aqui'></textarea><br></br>
        <textarea placeholder='Escreva a mensagem aqui!'></textarea><br></br>
        <button>Enviar</button><br></br>
        <a href="/">Clique aqui para voltar!</a>
    </div>

  );
}

export default Section;
