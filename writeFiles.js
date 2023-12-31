const fs = require('node:fs/promises');


async function writeFiles() {
    try {
        const content = 'Escrevendo conteúdo';
        // await fs.writeFile('/Users/UNITBRASIL RECP-8/Documents/informações.txt', content)
        await fs.writeFile('/Users/Igreja Adventista/Documents/convite.txt', content)
        return 'Arquivo escrito com sucesso.';
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


module.exports = writeFiles;