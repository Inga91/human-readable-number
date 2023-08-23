function digit(num) {
    switch (num) {
        case 0:
            return "zero";
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
    }
}

function roundNum(num) {
    switch (num) {
        case 1:
            return "ten";
        case 2:
            return "twenty";
        case 3:
            return "thirty";
        case 4:
            return "forty";
        case 5:
            return "fifty";
        case 6:
            return "sixty";
        case 7:
            return "seventy";
        case 8:
            return "eighty";
        case 9:
            return "ninety";
    }
}

function getDoDvadcati(num) {
    switch (num) {
        case 11:
            return "eleven";
        case 12:
            return "twelve";
        case 13:
            return "thirteen";
        case 14:
            return "fourteen";
        case 15:
            return "fifteen";
        case 16:
            return "sixteen";
        case 17:
            return "seventeen";
        case 18:
            return "eighteen";
        case 19:
            return "nineteen";
    }
}

let arrNum = [];
module.exports = function toReadable(number) {
    if (String(number).length < 2) {
        return digit(number);
    } else if (String(number).length < 3) {
        if (number % 10 == 0) {
            return roundNum(number / 10);
        } else if (number < 20) {
            return getDoDvadcati(number);
        } else {
            arrNum = String(number).split("");
            nameNum = roundNum(Number(arrNum[0]));
            nameNum = nameNum + " " + digit(Number(arrNum[1]));
            return nameNum;
        }
    } else {
        arrNum = String(number).split("");

        nameNum = digit(Number(arrNum[0])) + " hundred";

        if (arrNum[1] == 0 && arrNum[2] == 0) {
        } else if (arrNum[1] == 0) {
            nameNum = nameNum + " " + digit(Number(arrNum[2]));
        } else if (arrNum[2] == 0) {
            nameNum = nameNum + " " + roundNum(Number(arrNum[1]));
        } else if (arrNum[1] == 1) {
            nameNum =
                nameNum + " " + getDoDvadcati(Number(arrNum[1] + arrNum[2]));
        } else {
            nameNum =
                nameNum +
                " " +
                roundNum(Number(arrNum[1])) +
                " " +
                digit(Number(arrNum[2]));
        }

        return nameNum;
    }
};
