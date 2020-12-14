
var judgeCircle = function (moves) {

    let x = 0;
    let y = 0



    for (let char of moves) {

        if (char === "U") y++
        if (char === "D") y--
        if (char === "L") x++
        if (char === "R") x--

    }

    return x == 0 && y == 0

};