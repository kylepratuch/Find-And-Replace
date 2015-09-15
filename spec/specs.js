describe ("findReplace", function() {

    it("replaces a one letter word with another one letter word.", function() {
        expect(findReplace("a", "a", "b")).to.equal("b");
    });

    it("replaces a word with another word.", function() {
        expect(findReplace("hello", "hello", "hi")).to.equal("hi");
    });

    it("uses .replace to find and replace a word in a string", function() {
        expect(findReplace("Hello world!", "world", "universe")).to.equal("Hello universe!");
    });

    it("finds a multi-word substring and replaces it with another", function() {
        expect(findReplace("Hey there, friend!", "Hey there", "See you soon")).to.equal("See you soon, friend!");
    });

    //multiple matches
    //punctuation
    //capitalization
    //negative cases: "hi there my friend", "banana" -> ?
    //partial matches: "hello", "he", should not produce a match.

});
