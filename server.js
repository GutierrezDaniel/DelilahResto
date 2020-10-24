const db = require('./config/database');
const server = require('./app');
const port = 3000;

server.listen(port,()=>{
    db.authenticate()
    .then(() => {
        console.log('Iniciando');
    })
    .catch(err => {
        console.log('Fallo Conexion DB');
    })
    console.log('Server escuchando en el puerto: ' + port);
});