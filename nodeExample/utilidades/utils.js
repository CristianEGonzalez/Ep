const _ = require('lodash');

const fn = (arr) => {
    return _.flatten(arr);
}

const ult = (arr) => {
    return _.last(arr);
}

const callApi = async()=>{    
    try{
        const resultado = await fetch('http://jsonplaceholder.typicode.com/posts')
        const data = await resultado.json();
        return data;
    }catch(e){
        console.log('Error:', e);
    }
    };

module.exports = {callApi, fn, ult};