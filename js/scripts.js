//JavaScript:
var findReplace = function(phrase, subPhrase, replaceWith) {

    var searchFor = new RegExp("\\b" + subPhrase + "\\b", 'gi');
    var result = phrase.replace(searchFor, replaceWith);
    return result;
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
