// const http = require('http');
// const data = require('./data');

// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'application\json'});
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(4500);
// console.log(process.argv[2]);
const fs=require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files');
const filePath =`${dirPath}/hello0.txt`;

// print dynamic files
/* for(i=0;i<5;i++)
{
    fs.writeFileSync(dirPath +"/hello"+i+".txt",'a simple text');
} */

//read dir
/* fs.readdir(dirPath,(err,files)=>{

    files.forEach((item)=>{
        console.log(item);
    });
}); */

//read file
/* fs.readFile(filePath,'utf8',(err,item)=>{
    console.log(item);
}); */

//append file
/* fs.appendFile(filePath,'This is append text',(err)=>{
    if(!err) console.log('file is updated');
}); */

//rename file
/* fs.rename(filePath,`${dirPath}/hello.txt`,(err)=>{
    if(!err)console.log("file name is updated");
}); */

//delete file
/* fs.unlinkSync(`${dirPath}/hello.txt`,(err)=>{
    if(!err)console.log('file is deleted');
}); */
