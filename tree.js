const fs=require("fs")
const path=require("path")
function treefn(dirpath){
    let destpath;
 if(dirpath==undefined){
    
   treehelper(process.cwd()," ")
 }
 else{
    let doesExists=fs.existsSync(dirpath);
    if(doesExists){
      treehelper(dirpath," ");
    }
    else{
        console.log("please🙏 enter valid directory ")
        return;
    }
 }
}
function treehelper(dirpath,indent){
    let isFile=fs.lstatSync(dirpath).isFile();
    if(isFile){
    let filename=path.basename(dirpath);
    console.log(indent+"├──"+filename);
    }
    else{
        let directoryname=path.basename(dirpath);
        console.log(indent+"└──"+directoryname);
        let children=fs.readdirSync(dirpath);
        for(let i=0;i<children.length;i++){
            let childrenpath=path.join(dirpath,children[i]);
            treehelper(childrenpath, indent+ "\t")
        }

    }

}
module.exports={
treekey:treefn
}