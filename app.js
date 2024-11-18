import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

const app=express();
const PORT=3000;
app.get('/',(req, res)=>{
    console.log("Hi, there!")
    res.sendFile('./public/index.html',{root:__dirname})
});
app.get('/express',(req, res)=>{
    res.send("Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült.");
})
app.get('/greeting', (req, res)=>{
    const name="Czakó Máté";
    res.send("Hello,  "+name);
})
app.get('/nodejs',(req, res)=>{
    res.send("A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül.")
})
app.use((req, res)=>{
    res.status(404).send(<h1>404-es hiba az oldal nem található!</h1>)
});
app.listen(PORT, ()=>{
    console.log("A server listens on localhost:"+PORT)
});