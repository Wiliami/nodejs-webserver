const fs = require('node:fs/promises');


function readFiles() {
    return fs.stat('/Users/UNITBRASIL RECP-8/Documents/informações.txt')
    .then(stats => {
        stats.isFile();
        stats.isDirectory();
        stats.isSymbolicLink();
        stats.size;
        return stats;
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}


readFiles()
.then(result => {
    console.log(result);
})
.catch(err => {
    console.log(err);
})


module.exports = readFiles;