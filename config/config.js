const express = require('express')();

const consign = require('consign')();

module.exports = () =>{
    consign.include('controllers').into(express);
    express.listen(3000, ()=> console.log('Servidor Online'));

    return express;
}