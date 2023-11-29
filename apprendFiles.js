const fs = require('node:fs/promises');


async function appendFiles() {
    try {
        const content = 'Adicionando conteúdo 1';
        // await fs.appendFile('/Users/UNITBRASIL RECP-8/Documents/informações.txt', content)
        await fs.writeFile('/Users/Igreja Adventista/Documents/convite.txt', content)
        return 'Arquivo adicionado com sucesso.';
    } catch (err) {
        console.error(err);
        throw err;
    }
}

appendFiles()
.then(result => {
    console.log(result);
})
.catch(err => {
    console.error(err);
});


module.exports = appendFiles;
