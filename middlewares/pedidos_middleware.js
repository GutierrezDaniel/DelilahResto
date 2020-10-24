const db = require('../config/database');
const platosPedidos = (req, res, next) => {
    let platosPedidos = req.body.detalle
    if(platosPedidos.length > 0){next();}
    else{res.status(500).send('Invalid request')}
}
module.exports = {
    platosPedidos
}