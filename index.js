const app = require("express")()

app.get("/", (req,res)=> {

console.log(req);
res.send("res")
})

app.listening(8080, ()=>console.log("Proxy is listening"))