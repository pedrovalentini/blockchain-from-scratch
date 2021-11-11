// const Block = require('./blockchain/block');
// const block = Block.mineBlock(Block.genesis(), 'data');
// console.log(block.toString());


const Blockchain = require('./blockchain');

const bc = new Blockchain();

for (let i=0; i<10; i++) {
    console.log(bc.addBlock(`foo ${i}`).toString());
}