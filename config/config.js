const express = require('express')();

const consign = require('consign')();

const bodyParser = require('body-parser');

module.exports = () =>{

    express.use(bodyParser.urlencoded({ extended: false }))
    express.use(bodyParser.json())
    consign.include('controllers').into(express);
    express.listen(3000, ()=> console.log('Servidor Online'));

    return express;
}