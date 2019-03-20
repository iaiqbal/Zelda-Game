const randomNumber = Math.floor(Math.random() * 101);
const showNum = $(".item")[randomNumber];

console.log(randomNumber);
const blueNumMin = Math.floor(Math.random() * 13)
const greenNumMin = Math.floor(Math.random() * 13)
const redNumMin = Math.floor(Math.random() * 13)
const goldNumMin = Math.floor(Math.random() * 13)


$(document).ready(function () {


    $("#blue").bind("click", function () {
        console.log(blueNumMin)
        $(".blue").html(blueNumMin);
        $(".blue").val();
    });



    $("#green").bind("click", function () {
        console.log(greenNumMin)
        $('.green').html(greenNumMin);
        $(".green").val();
        // Attempted to circumvent the issue I was having with the .score function you'll see below by
        // appending the values of NumMins to .score class; ended up concatenating strings and adding numbers
        // Attempted to apply parseInt to .append lines to avoid string concatenation; returned as variable undefined
        // $(".score").append(greenNumMin);
    });


    $("#red").bind("click", function () {
        console.log(redNumMin)
        $('.red').html(redNumMin);
        // $(".score").append(redNumMin);

    });


    $("#gold").bind("click", function () {
        console.log(goldNumMin)
        $('.gold').html(goldNumMin);
    });

    // Below was supposed to be the sum of all clicks; added to the score counter.
    // Not working as intended. Currently creates a random total under Score Counter and
    // forces 4 color IDs to add up to randomized number.

     $('.score').html(function(){
        // const total = blueNumMin+greenNumMin;
        const total = parseInt(redNumMin)+parseInt(goldNumMin)+parseInt(blueNumMin)+parseInt(greenNumMin);
        return total;
    });



})


// This while loop will run while the game is ongoing(as in while the score counter has not been met or exceeded)
// Insert conditions inside of this loop that if met, the player would win(meet score) the game or
// lose the game(go over the score). Conditions should manipulate the #wins and #losses IDs to increase.
// 

// while (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


// The most difficulty I'm having with is the syntax and how to make sense of it. 


   


