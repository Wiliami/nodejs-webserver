const fs = require('node:fs/promises');

let content = "Escrevendo arquivo de teste 1.0";

async function writeFiles() {
    try {
        await fs.writeFile("/Users/UNITBRASIL RECP-8/Documents/teste.txt", content);

        console.log('Arquivo escrito com sucesso.');
    } catch (err) {
        console.error(err);
        throw err;
    }
}
  

writeFiles()
.then(result => console.log(result))
.catch(err => console.error(err));


module.exports = writeFiles;