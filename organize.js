const fs=require("fs")
const path=require("path")
let types={ media:['mp4',"mkv"],
              archives:["zip","7z","rar","tar","gz","ar","iso","xz"],
              documents:["docx","doc","pdf","xlsx","xls","odt","ods","odg","odf","txt","ps","tex"],
              photos:["jpg","jpeg","png"],
               app:["exe","dmg","pkg","deb"]
            }
function organizefn(dirpath){
    let destpath;
   if(dirpath==undefined){
    destpath=process.cwd;
    return;
   }
   else{
    let doesExists=fs.existsSync(dirpath);
    if(doesExists==true){
         destpath=path.join(dirpath,"organized files");//make organized files name folder inside given directory.
        if(fs.existsSync(destpath)==false){
            fs.mkdirSync(destpath);   
        }
       

    }
    else{
        console.log("please🙏 enter✍ valid directory");
        return;
    }
   }
   organizeHelper(dirpath,destpath);  
}
//chilnames
function organizeHelper(dirpath,destpath){
  //get all childsname  
 let childnames= fs.readdirSync(dirpath)
 //get childnames full address
 
 for(let i=0;i<childnames.length;i++){
   let childadress=path.join(dirpath,childnames[i]);
   let isFile=fs.lstatSync(childadress).isFile() 
   if(isFile){

    // console.log(childadress)//organize file
   let category=getCategory(childadress);
//    console.log(`${childadress} belongs to ${category}`)
    sendFiles(destpath,childadress,category);
  

   }
 }


}
//find category
function getCategory(childadress){
  let extn=path.extname(childadress);
  extn=extn.slice(1);
//   console.log(extn);
  for(let type in types){
      let ctypearr=types[type];
      for(let j=0;j<ctypearr.length;j++){
         if(ctypearr[j]==extn){
            
            return type;
         }
      }
     }
     return "others";
   
  }
  //copy
function sendFiles(destpath,childadress,category){
    let categorypath=path.join(destpath,category);
    if(fs.existsSync(categorypath)==false){
        fs.mkdirSync(categorypath);
    }
    let filename=path.basename(childadress);
    let filepath=path.join(categorypath,filename);
    fs.copyFileSync(childadress,filepath);//copy
    fs.unlinkSync(childadress);//cut
    console.log(filename," copied to  ",category);
}
module.exports={
  orgkey:organizefn
}