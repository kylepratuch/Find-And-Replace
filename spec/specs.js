describe ('findReplace', function() {
    it('uses .replace to find and replace a word in a string', function() {
        expect(findReplace('Hello world!', 'world', 'universe')).to.equal('Hello universe!');
    });
});

describe ('findReplace', function() {
    it('finds a multi-word substring and replaces it with another', function() {
        expect(findReplace('Hey there, friend!', 'Hey there', 'See you soon')).to.equal('See you soon, friend!');
    });
});
