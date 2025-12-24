import { readFile } from 'fs/promises';

async function readFiles() {
    try {
        console.log('Starting asynchronous file read...\n');

        const [contentA, contentB, contentC] = await Promise.all([
            readFile('a.txt', 'utf-8'),
            readFile('b.txt', 'utf-8'),
            readFile('c.txt', 'utf-8')
        ]);

        
        console.log('=== File Contents ===');
        console.log('a.txt content:', contentA.trim());
        console.log('b.txt content:', contentB.trim());
        console.log('c.txt content:', contentC.trim());

        const totalChars = contentA.length + contentB.length + contentC.length;
        
        console.log('\n=== Statistics ===');
        console.log(`Characters in a.txt: ${contentA.length}`);
        console.log(`Characters in b.txt: ${contentB.length}`);
        console.log(`Characters in c.txt: ${contentC.length}`);
        console.log(`Total characters in all files: ${totalChars}`);

    } catch (error) {
        console.error('Error reading files:', error.message);
    }
}

readFiles();