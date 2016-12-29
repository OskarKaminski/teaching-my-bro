var users = [
    'Oskar',
    'Oliver',
    'Arlenis'
];

$('.addButton').click(function () {
    var skinName = $('.skinName').val();
    var skinUrl = $('.skinUrl').val();
    var newSkin =
        $('<div class="skin-small"><img src="' + skinUrl + '"><p> ' + skinName + ' (<span class="user">user1</span>)</p></div>');
    $('.skinsContainer').append(newSkin);
});


function randomWinner() {
    var randomNumber = Math.floor(Math.random() * 3);
    $('.winnerInfo').text('Wygral '+users[randomNumber])
}

function setTime(time){
    $('.timer').text('Kolejne losowanie za ' + time + ' sekund');
}

var startTime = 10;
var currentTime = 10;
function timer(){
    if(currentTime){
        currentTime--;
    } else {
        currentTime = startTime;
        randomWinner();
    }
    setTime(currentTime);
}

setInterval(timer, 1000);