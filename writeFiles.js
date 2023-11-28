const fs = require('node:fs/promises');


async function writeFiles() {
    const content = 'Escrevendo conteúdos em um arquivo usando NodeJS';
    try {
        await fs.writeFile('/Users/UNITBRASIL RECP-8/Documents/informações.txt', content)
        return 'Arquivo escrito com sucesso.';
    } catch (err) {
        console.error(err);
        throw err;
    }
}


async function appendFiles() {
    try {
        const content = 'Adicionando conteúdo';
        await fs.appendFile('/Users/UNITBRASIL RECP-8/Documents/informações.txt', content)
        return 'Arquivo adicionado com sucesso.';
    } catch (err) {
        console.error(err);
        throw err;
    }
}   

writeFiles()
.then(result => {
    console.log(result);
})
.catch(err => {
    console.error(err);
});



appendFiles()
.then(result => {
    console.log(result);
})
.catch(err => {
    console.error(err);
});



module.exports = writeFiles, appendFiles;