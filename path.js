const path =require ('path');

// path module work with the paths of specific folder or file

let ext=path.extname('/Users/kartikey/Desktop/nodejs/f1.txt')

let basename=path.basename('/Users/kartikey/Desktop/nodejs/f1.txt')
console.log(ext);
console.log(basename);
console.log(__filename);
console.log(__dirname);
