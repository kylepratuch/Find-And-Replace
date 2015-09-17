//JavaScript:
var findReplace = function(phrase, subPhrase, replaceWith) {
    for (var i = 0; i <= phrase.length; i++) {
        var result = phrase.replace(subPhrase, replaceWith);
    }
    return result;
    console.log(result);
};

//jQuery for page display:
$(document).ready(function() {
    $("form#find-replace").submit(function(event) {

        //Get variables from form:
        var phrase = $("input#phrase").val();
        var subPhrase = $("input#subPhrase").val();
        var replaceWith = $("input#replaceWith").val();

        //Variables to be displayed:
        var result = findReplace(phrase, subPhrase, replaceWith);
        $(".result-replaced").text(result);
        $(".original-phrase").text(phrase);

        //Show #result div on form submit:
        $("#result").show();
        event.preventDefault();
    });
});
