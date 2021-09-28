const  session=require('express-session')
const keycloak=require('keycloak-connect')

let _keycloak

var keycloakConfig={
     clientId:'nodejs-microservece',
     bearerOnly:true,
     serverUrl:'http://localhost:8080/auth',
     realm:'Demo',
     credentials:{
         secret: '8a8cb797-5430-41b7-8ce0-1681ba3cecca'
     }

  };

function initkeycloak(){
  if(_keycloak){
     console.warn("tratando de iniciar keycloak de nuevo!");
     return_keycloak;
  }
else{
    console.log("inicializando keycloak..")
    var memoryStore=new session.MemoryStore();
    _keycloak= new keycloak({store:memoryStore}, keycloakConfig);
    return _keycloak;

}
}
//obtiene la configuracion de nuestro servidor en keycloak
function getKeycloak(){
  if(!_keycloak){
      console.error('keycloak has not been initialized.Plase called init first.');
  }
  return _keycloak;

}

module.exports={
    initkeycloak,
    getKeycloak
};
