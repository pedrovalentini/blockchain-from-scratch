const Block = require('./block');

describe('Block', () => {
    let data, lastBlock, block;

    beforeEach(() => {
        data = 'bar';
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock, data);
    });

    it('set the data to match the input', () => {
        expect(block.data).toEqual(data);
    });

    it('set the lastHash to match the hash of the last block', () => {
        expect(block.lastHash).toEqual(lastBlock.hash);
    });

    it('generate a hash that matchs the difficulty', () => {
        expect(block.hash.substring(0, block.difficulty))
            .toEqual('0'.repeat(block.difficulty));
        console.log(block.toString());
    });

    it('lowers difficulty for slowly mined blocks', () => {
        expect(Block.adjustDifficulty(block, block.timestamp + 360000))
            .toEqual(block.difficulty-1);
    });

    it('raises difficulty for fast mined blocks', () => {
        expect(Block.adjustDifficulty(block, block.timestamp + 100))
            .toEqual(block.difficulty+1);
    });
});