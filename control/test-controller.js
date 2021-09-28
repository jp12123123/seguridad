const express=require('express')
const router=express.Router()

const keycloak=require('../config/keycloak-config.js').getKeycloak()//obtenemos la instancia de keycloak

router.get('/anonimo', function(req, res){
        res.send('Hola anonimo')
})
                              //midewar modifica cada vez que se llama a esta ruta accede al servidor de keycloack
router.get('/user',keycloak.protect('user'), function(req,res){
      res.send('Hola usuario')    
})

router.get('/admin',keycloak.protect('admin'), function(req,res){
    res.send('Hola admin')    
})
                         //protegemos las rutas deacuerdo al tipo de credencial de cada usuario
router.get('/all-user',keycloak.protect(['user','admin']), function(req,res){
    res.send('Hola a todos los usuarios')
})

module.exports=router