
// let {WebSocketServer} =require("ws")
// let webSocServer=new WebSocketServer({port:8080})


// webSocServer.on("connection",(socket)=>{
//     console.log("New Connection made")
   
//     socket.on("message",(msg)=>{   // handling message from client
//         console.log(msg.toString())
//        if(msg+""==="hey"){
       
//         socket.send("hello")  //sending to client
//        }else if (msg+""==="bye"){
//         socket.send("ta ta") //sending to client
//        }else{
//         socket.send("blah blah ")
//        }
//     })
//     socket.on("close",()=>{
//         console.log("client disconnected")
//     })
// })


// following thing for client 

// const socket=new WebSocket("ws://localhost:8080")

// following is for sending message from client 
// socket.onopen=()=>{socket.send("bye")}

//following is for catching message from server
// socket.onmessage=(event)=>{console.log(event.data)}



//example : 
// const socket=new WebSocket("ws://localhost:8080")
// socket.onopen=()=>{socket.send("bye")}
// socket.onmessage=(event)=>{console.log(event.data)}  ===>ta ta



/////////////////////////////////////////////////////////////////////////////////////


let {EventEmitter}=require("events")

let button=new EventEmitter()


button.on("click",(name)=>{
   
    console.log(name,"clicking")
  
})

button.on("againclick",(name)=>{
    console.log(name,"again clickin")
    button.emit("click",name)
})

button.emit("againclick","sachin")