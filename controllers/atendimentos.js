module.exports = express =>{
    express.get('/atendimentos', (req, res)=>{
        res.send('Rotas de atendimento. (GET)');
    });

    express.post('/atendimentos', (req, res)=>{
        res.send('Rotas de atendimento. (POST)');
    });

}