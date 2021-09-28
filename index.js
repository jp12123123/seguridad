const express=require('express')
const app=express()

const keycloak = require ('./config/keycloak-config.js').initkeycloak()
app.use(keycloak.middleware())

const testController=require('./control/test-controller.js')
app.use('/test', testController)
//ruta basica
app.get('/', function(req,res){
    res.send('Servidor corriendo')
})

app.listen(3000);