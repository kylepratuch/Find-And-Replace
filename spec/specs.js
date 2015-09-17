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

    it("replaces multiple matches", function() {
        expect(findReplace("Hi friend! You're my friend.", "friend", "enemy")).to.equal("Hi enemy! You're my enemy.");
    });

    it("replaces punctuation only when specified", function() {
        expect(findReplace("Hey there, friend!", "friend", "buddy")).to.equal("Hey there, buddy!");
        expect(findReplace("Hey there, friend!", "friend!", "buddy...")).to.equal("Hey there, buddy...");
    });

    it("returns original phrase if no matches are found", function() {
        expect(findReplace("Hey there, friend!", "banana", "buddy")).to.equal("Hey there, friend!");
    });




    //capitalization

    //partial matches: "hello", "he", should not produce a match.

});
