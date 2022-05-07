

const express = require('express');
const app = express();
const http = require('http');
const serverHttp = http.createServer(app);
const io = require('socket.io')(serverHttp);
const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline');


app.use(express.static('public'));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html')
})

app.get('/mkt', (request, response) => {
    response.sendFile(__dirname + '/public/mkt.html')
})

serverHttp.listen(3001, () => {
    console.log('http://localhost:%d', serverHttp.address().port);
});



io.on('connection', (socket) => {
    console.log('a user connected');
});


const port = new SerialPort({ path: '/COM10', baudRate: 9600 }) // "/dev/ttyUSB0"
const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))


port.on('open', function () {
    console.log('Conexão Serial Open');
    parser.on('data', function (data) {
        let DataReceiver = data;


        io.emit('Mensurer', {
            value: DataReceiver

        },
            console.log(DataReceiver))

    })
})



// The open event is always emitted
