$(function() {
    $(".button").click(function() {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        $("body").css("background-color", '#' + randomColor);
        console.log(randomColor);
    })
});