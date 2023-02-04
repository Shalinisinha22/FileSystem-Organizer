#!/usr/bin/env node
const fs=require("fs")
const path=require("path")
const helpobj=require("./help")
const treeobj=require("./tree")

const orgobj=require("./organize")
const input=process.argv.slice(2);


console.log(input);
const command=input[0];
console.log(command);
switch(command){
    case 'tree':
        treeobj.treekey(input[1]);
        break;
    case 'organize':
        orgobj.orgkey(input[1]);
        break;  
    case 'help':
        helpobj.helpkey();
        break;
    default:
      console.log("please enter valid options");
        break;      
}






