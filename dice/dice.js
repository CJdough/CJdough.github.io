var dicemax = 6;
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
function diceset(setmax)
{
    dicemax = setmax;
    document.getElementById("roll").innerHTML = "...";
    if (dicemax == 6) {
        document.getElementById("dice").src = "dice/sixnone.png";
    }
    if (dicemax == 8) {
        document.getElementById("dice").src = "dice/eightnone.png";
    }
    if (dicemax == 10) {
        document.getElementById("dice").src = "dice/tennone.png";
    }
    if (dicemax == 12) {
        document.getElementById("dice").src = "dice/twelvenone.png";
    }
}
function roll()
{
    Dice = 0;
    if (dicemax == 6) {
        Dice = random(1,7);
    }
    if (dicemax == 8) {
        Dice = random(1,9);
    }
    if (dicemax == 10) {
        Dice = random(1,11);
    }
    if (dicemax == 12) {
        Dice = random(1,13);
    }
    document.getElementById("roll").innerHTML = Dice;
    var audio = new Audio('dice/roll.mp3');
    audio.play();
}