const prompt=require("prompt-sync")({sigint:true});
var LocalStorage = require('node-localstorage').LocalStorage;

let key= prompt("Enter key")
let value= prompt("enter value");
localStorage.setItem(key,value);
console.log(`this is key ${key} and value ${localStorage.getItem(key)}`);

if(key=="clear"||key=="blue")
{
    localStorage.removeItem(key)
}


