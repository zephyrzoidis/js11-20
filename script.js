function firstLast6(array){
    return(array[0] == 6 || array[array.length -1] == 6)
}

function has23(array){
    var x = "";
    var firstNum = array[0];
    var lastNum = array[1];

    if(firstNum == 2 || lastNum == 2){
        x = true;
    }

    else if (firstNum == 3 || lastNum == 3){
        x = true;
    }else{
        x = false;
    }

    return x;
}

function fix23(array){
    for(var i = 0; i < array.length; i++){
        if (array[i] == 2 && array[i + 1] == 3) {
            array[i + 1] = 0;
        }
    }
    return array;
}

function countYZ(array) {
    var array = array + " ";
    var num = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] == "z" && array[i + 1] == " ") {
            num += 1;
        }
        if (array[i] == "Z" && array[i + 1] == " ") {
            num += 1;
        }
        if (array[i] == "y" && array[i + 1] == " ") {
            num += 1;
        }
        if (array[i] == "Y" && array[i + 1] == " ") {
            num += 1;
        }
    }
    return num;
}

function endOther(param1, param2){
    var result
    var lower1 = param1.toLowerCase();
    var lower2 = param2.toLowerCase();
    if(lower1.length > lower2.length) {
        var smallstring = lower2
        var bigstring = lower1
    }else{
        var smallstring = lower1
        var bigstring = lower2
    }
    var index = bigstring.indexOf(smallstring);
    var smalllength = smallstring.length;
    if(index == bigstring.length - smalllength){
        result = true
    }else{
        result = false
    }
    return result
}

function starOut(str){
    var product = "";
    for(var i = 0; i < str.length; i++){
        if(str[i] != "*" && str[i-1] != "*" && str[i + 1] != "*"){
            product += str[i];
        }
    }
    return product;
}

function getSandwich(str){
    var product
    var bread = "bread";
    var piece1 = str.indexOf(bread);
    var piece2 = str.lastIndexOf(bread);
    if(piece2 == piece1){
        product = "";
    }else{
        product = str.substring(piece1 + bread.length, piece2)
    }
    return product;
}

function canBalance(array){
    var count2 = 0;
    var count = 0;
    for(var i = 0; i < array.length; i++) {
        count += array[i];
        for(var x = i + 1; x < array.length; x++) {
            count2 += array[x];
        }
        if (count2 == count) {
            return true;
        }
        count2 = 0;
    }
    return false;
}

function countClumps(array){
    var num = 0;
    for(var i = 0; i < array.length; i++) {
        if (array[i] == array[i - 1] && array[i] != array[i + 1]) {
            num += 1
        }
    }
    return num;
}

function evenlySpaced(a, b, c){
    if(c > b && b > a && c - b == b - a){
        return true;
    }else if(c > a && a > b && c - a == a - b){
        return true;
    }else if(b > c && c > a && b - c == c - a){
        return true;
    }else if(b > a && a > c && b - a == a - c){
        return true;
    }else if(a > b && b > c && a - b == b - c){
        return true;
    }else if(a > c && c > b && a - c == c - b){
        return true;
    }else if(a == b && b==c){
        return true
    }else{
        return false;
    }
}


function tester() {
    document.getElementById("output").innerHTML += firstLast6([1, 2, 6]);
    document.getElementById("output").innerHTML += has23([2,5]);
    document.getElementById("output").innerHTML += fix23([1, 2, 3]);
    document.getElementById("output").innerHTML += countYZ("day fez");
    document.getElementById("output").innerHTML += endOther("Hiabc", "abc");
    document.getElementById("output").innerHTML += starOut("ab*cd");
    document.getElementById("output").innerHTML += getSandwich("breadjambread");
    document.getElementById("output").innerHTML += canBalance([1, 1, 1, 2, 1]);
    document.getElementById("output").innerHTML += countClumps([1, 2, 2, 3, 4, 4]);
    document.getElementById("output").innerHTML += evenlySpaced([2, 4, 6]);
}
