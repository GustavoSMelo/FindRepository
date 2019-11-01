"use strict";

import '@babel/polyfill';
import api from './api';

class Aplication{
    constructor(){
        this.repositories = [];
        this.refForm = window.document.querySelector('#repo-form'); 
        this.refList = window.document.querySelector('#repo-list');
        this.input = window.document.querySelector('#txtRepositorio');
        this.registerHandlers();
        this.msgLoad = window.document.querySelector('#Carregamento');
    }

    registerHandlers(){
        this.refForm.onsubmit = event => this.addRepository(event);
    }

    loading(load = true){
        if(load == true){
            this.msgLoad.innerHTML = `Carregando... aguarde`;
        }
        else{
            this.msgLoad.innerHTML = ``;
        }
    }

    async addRepository(){
        event.preventDefault();

        const value =  this.input.value;

        if(value == '' || value == null || value == undefined){
            return;
        }

        this.loading();

        try{
            const response = await api.get(`repos/${value}`);
            console.log(response);

            const {name, owner: {avatar_url}, html_url} = response.data;
            
            this.repositories.push({
                name,
                html_url,
                avatar_url
            });

            this.input.value = "";

            console.log(this.repositories);
        }
        catch(Exception){window.alert('This repository doesnt exists');}
        this.loading(false);

        this.render();
    }

    render(){
        this.refList.innerHTML = '';
        this.repositories.forEach(item =>{
            this.refList.innerHTML += `<li>
                <img src ="${item.avatar_url}"/><br/>
                <strong>${item.name}</strong><br/>
                <a target="_blank" href="${item.html_url}">Acesse</a><br/>
            </li>`;
        });
    }
}

const app = new Aplication();
app.registerHandlers();
