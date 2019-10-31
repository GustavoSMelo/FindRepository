"use strict";

import '@babel/polyfill';

class Aplication{
    constructor(){
        this.repositories = [];
        this.refForm = window.document.querySelector('#repo-form'); //getElementById
        this.registerHandlers();
    }

    registerHandlers(){
        this.refForm.onsubmit = event => this.addRepository(event);
    }

    addRepository(){
        event.preventDefault();
        this.repositories.push({
            nome: 'Gustavo S Melo',
            link: 'https://github.com/GustavoSMelo',
            avatar: 'https://avatars1.githubusercontent.com/u/45046288?s=400&u=19b6d6848332724f671d49fb2555400ba8effb69&v=4'
        });

        console.log(this.repositories);
    }
}

const app = new Aplication();
app.registerHandlers();

