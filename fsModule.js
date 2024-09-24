// files

const fs=require('fs');
// reading a file

let filecontent=fs.readFileSync('f1.txt');
console.log("f1 data-->" +filecontent);

// writting file
// if the file name that is passed does not exists a new file will be creted with its 
// name and the data will be written on the file
fs.writeFileSync('f2.txt','This is file');


// write this statement in f2.txt and if any data was present there they replaced by the new data


// append a file
// appenFilesync method adds new data to a previosly written file
fs.appendFileSync('f3.txt','this is the updated data');
console.log('FILE HAS BEEN UPDATED');

// DELETING A FILE

fs.unlinkSync('f2.txt');
console.log('file has been deleted');


// ---------------------->DIRECTORY-------------------->
// created a directory
// fs.mkdirSync('myDirectory1');
// check th econtent inside of a directory

let folderPath=('/Users/kartikey/Desktop/nodejs/myDirectory');
let folderContent=fs.readdirSync(folderPath);
console.log("folder content"+folderContent);

// check whether directory exist or not
let doesExist=fs.existsSync('myDirectory');
console.log(doesExist);

// remove directory
fs.rmdirSync('myDirectory1');
console.log('file has been deleted');
