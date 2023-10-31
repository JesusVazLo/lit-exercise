import { html, LitElement } from 'lit-element';
import './tabla.js';
import './registro.js';

class Home extends LitElement{
    static get properties(){
        return{
            lista: {type: Array}
        }
    }


    constructor() {
        super();
        this.lista = [
           { nombre: 'Maria', apellidos: 'Garcia Perez', edad: 30},
           { nombre: 'Carlos', apellidos: 'Gonzalez Prado', edad: 58},
           { nombre: 'Juan', apellidos: 'Bernal Martinez', edad: 40},
        ]
    }

    agregarAlista(event) {
        let newLista = Object.assign([], this.lista);
        newLista.push(event.detail);
        this.lista = newLista;
    }
    

    render(){
        return html`
        <wc-registro @guardaPersona="${this.agregarAlista}"></wc-registro>
        <wc-tabla .lista="${this.lista}"></wc-tabla>
        `
    }
}
window.customElements.define('wc-home', Home);