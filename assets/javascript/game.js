const randomNumber = Math.floor(Math.random() * 101);
const showNum = $(".item")[randomNumber];

console.log(randomNumber);

$(document).ready(function () {
    $("#blue").bind("click", function () {
        const blueNumMin = Math.floor(Math.random() * 13)
        console.log(blueNumMin)
        $(".blue").html(blueNumMin);
    });
})

$(document).ready(function () {
    $("#green").bind("click", function () {
        const greenNumMin = Math.floor(Math.random() * 13)
        console.log(greenNumMin)
        $('.green').html(greenNumMin);
    });
})

$(document).ready(function () {
    $("#red").bind("click", function () {
        const redNumMin = Math.floor(Math.random() * 13)
        console.log(redNumMin)
        $('.red').html(redNumMin);
    });
})

$(document).ready(function () {
    $("#gold").bind("click", function () {
        const goldNumMin = Math.floor(Math.random() * 13)
        console.log(goldNumMin)
        $('.gold').html(goldNumMin);
    });
})

$(document).ready(function() {
    let score = 0;
    document.getElementById('score').innerHTML = score + goldNumMin
})


