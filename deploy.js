import tar from 'tar'
import fs from 'node:fs/promises'
console.log("clearing data dir")
await fs.rm('data', {recursive: true, force: true})
await fs.mkdir('data')
console.log('extracting site');
await tar.extract({
    file: 'reports.tar.gz',
    C:'data'
})
console.log('extracted to data/');
console.log('done!');
