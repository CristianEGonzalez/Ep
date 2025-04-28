/*const {fn, ult} = require('./utilidades/utils');

console.log(fn([1,[2,3]]));
console.log(ult([1,[2,3]]));

*/

//const { set } = require("lodash");

/*
(async()=>{
console.log('Paso 1');

const np = async (ms)=>{
    return new Promise((resolve, reject) => {
        if(ms < 0)
            setTimeout(()=>{
                reject('No se puede cumplir la promesa');
            });
        else
            setTimeout(()=>{
                resolve({resultado:'OK', Tardo:ms});
        }, ms);
    });
};

try{
    const resultado = await np(3000)
    console.log(resultado);
}catch(e){
    console.log('Error:', e);
}


console.log('Paso 3');

})();

*/

/*
(async()=>{
    const {ult} = require('./utilidades/utils');

    console.log('Paso 1');
    
    try{
        const resultado = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        const data = await resultado.json();
        console.log(data.name);
        console.log(ult(data.abilities));
    }catch(e){
        console.log('Error:', e);
    }
    
    console.log('Paso 3');
    
    })();

*/

const express = require('express');
const {ult, callApi} = require('./utilidades/utils');

const app = express();

app.get('/poke', async (request, response)=> {
    response.status(200).json(ult(await callApi()));
})

app.listen(4002, () => {
    console.log('La app está escuchando en el puerto 4002');
});