const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');



const app = express();
const server = http.createServer(app);
const io = socketio(server);


app.use(express.static(path.join(__dirname,'public')));



io.on('connection', socket=>{

    //Listen for username and time stamp
    //socket.emit('message', formatMessage('Admin'))


    
   socket.on('op_result', (operation_result)=>{
       io.emit('op_result', operation_result);
      
      
   });



});

const PORT = 3000 || process.env.PORT;


server.listen(PORT,()=> console.log(`Server running on port ${PORT}`));