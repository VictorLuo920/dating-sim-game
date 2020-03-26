let currentScore = 0

$("#start").on('click', startGame);

function startGame() {
    $(".title").css({'display': 'none'});
    $(".start").css({'display': 'block'});
    // $(".start").first().css({'display': 'block'});
}

$("#restart").on('click', restartGame);

function restartGame() {
    $(".end").css({'display': 'none'});
    $(".title").css({'display': 'block'});
}

let $scene = $(".scene");
$scene.on('click', "li", handleClick);

function handleClick(event) {

    if ($(event.target).hasClass("ch1")) {currentScore = currentScore - 1};
    if ($(event.target).hasClass("ch3")) {currentScore = currentScore + 1};
    $(this).parent().css({'display': 'none'});
    $(this).parent().next().css({'display': 'block'});
    if (currentScore >= 1) {$(".goodend").css({'display': 'initial'}); $(".badend").css({'display': 'none'})} 
        else {$(".goodend").css({'display': 'none'}); $(".badend").css({'display': 'initial'})}
}

