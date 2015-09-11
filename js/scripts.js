//JavaScript:
var findReplace = function(string, subString, replaceWith) {
    var result = string.replace(subString, replaceWith);
    return result;
};

//jQuery for page display:
$(document).ready(function() {
    $("form#find-replace").submit(function(event) {

        //Get variables from form:
        var string = $("input#string").val();
        var subString = $("input#subString").val();
        var replaceWith = $("input#replaceWith").val();

        //Variables to be displayed:
        var result = findReplace(string, subString, replaceWith);
        $(".result-replaced").text(result);
        $(".original-string").text(string);

        //Show #result div on form submit:
        $("#result").show();
        event.preventDefault();
    });
});
