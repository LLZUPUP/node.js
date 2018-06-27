const fs = require('fs');
const path= require('path');

const getFilesInDir = function(dir) {
    let results = [path.resolve(dir)];
    // console.log(results)
    const files = fs.readdirSync(dir,'utf8');
    files.forEach(file => {
        // console.log(file)
        file=path.resolve(dir,file);
        // console.log(file)
        const stats = fs.statSync(file);
        // console.log(stats.isFile(file))
        if(stats.isFile()) {
            results.push(file);
        }else if(stats.isDirectory()){
            results = results.concat(getFilesInDir(file));
        }
    });
    return results;
}

const files = getFilesInDir('./txt')
// console.log(files)
