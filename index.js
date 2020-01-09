
const app = require('./config/config')();

app.get('/', (req, res)=>{
    res.send('Nossos goblins estão trabalhando!');
});