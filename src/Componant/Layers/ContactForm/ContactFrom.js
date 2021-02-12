import React from 'react' 
import Icon from '../../../assets/Icon/IDSign.svg'

export default function ContactForm () {

    return (
        <div className="form_container">
            <img src={Icon} alt="iconicddev"/>
        <form  action="https://formspree.io/f/mdopyrdp" method="POST" className="input-fields" >
            <input type="text" placeholder="Nom & Prénom" name="name"/>
            <input type="text" placeholder="Sujet" name="Subject"/>
            <input type="email" placeholder="email" name="mail"/>
            <textarea type="text" placeholder="Votre projet" name="msg"/>
            <button type="submit" className="form-btn" value="Envoyer" >Envoyer</button>
            </form>
        </div>
    )
}