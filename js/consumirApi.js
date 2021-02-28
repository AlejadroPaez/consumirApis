'use strict'

var url = "https://localhost:44357/api/Usuarios";

fetch(url, {mode: 'no-cors'})
.then(response => {
     console.log(response.text())
})  
    //response.json())
.then(data => {
    let usuario = data;
    console.log("Estos son los usarios: " , usuario);
}) 
.catch(err => {
    console.log(err);
});