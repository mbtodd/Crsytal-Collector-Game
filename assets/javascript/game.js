$(document).ready(function () {
    var Random = Math.floor(Math.random() * 101 + 19)
    $('#randomNumber').text(Random);
    var first = Math.floor(Math.random() * 11 + 1)
    var second = Math.floor(Math.random() * 11 + 1)
    var third = Math.floor(Math.random() * 11 + 1)
    var fourth = Math.floor(Math.random() * 11 + 1)
    
    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    function reset() {
        Random = Math.floor(Math.random() * 101 + 19);
        console.log(Random)
        $('#randomNumber').text(Random);
        first = Math.floor(Math.random() * 11 + 1);
        second = Math.floor(Math.random() * 11 + 1);
        third = Math.floor(Math.random() * 11 + 1);
        fourth = Math.floor(Math.random() * 11 + 1);
        userTotal = 0;
        $('#finalTotal').text(userTotal);
    }

    function yessir() {
        alert("You won!");
        wins++;
        $('#numberWins').text(wins);
        reset();
    }

    function loser() {
        alert("You lose!");
        losses++;
        $('#numberLosses').text(losses);
        reset()
    }

    $('#one').on('click', function () {
        userTotal = userTotal + first;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);

        if (userTotal == Random) {
            yessir();
        }
        else if (userTotal > Random) {
            loser();
        }
    })

    $('#two').on('click', function () {
        userTotal = userTotal + second;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        if (userTotal == Random) {
            yessir();
        }
        else if (userTotal > Random) {
            loser();
        }
    })

    $('#three').on('click', function () {
        userTotal = userTotal + third;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        //sets win/lose conditions
        if (userTotal == Random) {
            yessir();
        }
        else if (userTotal > Random) {
            loser();
        }
    })

    $('#four').on('click', function () {
        userTotal = userTotal + fourth;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);

        if (userTotal == Random) {
            yessir();
        }
        else if (userTotal > Random) {
            loser();
        }
    });
}); 