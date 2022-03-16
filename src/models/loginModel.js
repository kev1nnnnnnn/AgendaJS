const { type } = require('express/lib/response');
const mongoose = require('mongoose');
const validator = require('validator');

const loginSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
});

const loginModel = mongoose.model('login', loginSchema);

class Login {

    //body disponivel em todos os métodos da classe
    constructor(body) {
        this.body = body 
        this.errors = [];
        this.user = null;
    }

    async register() {
        this.valida();
        if(this.errors.length > 0) return;
        
        try {
            this.user = await loginModel.create(this.body);

        }catch (e) {
            console.log(e);
        }
    }
    valida() {
        this.cleanUp();
        //validação de campos
        //email precisa ser válido
        if(!validator.isEmail(this.body.email)) this.errors.push('Email inválido');

        //senha precisa ter entre 3 e 30 caracteres
        if(this.body.password.length < 4 || this.body.password.length > 30) {

            this.errors.push('A senha precisa ter entre 3 e 30 caracteres');
        }
    }

    //garante que tudo é uma string no body
    cleanUp() {
        for(const key in this.body) {//recupera todas as chaves do body
            if(typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }
}

module.exports = Login;