let array1 = [265, 123, 6334, 75543, 123, 2, 35, 23, 21, 897];

/* 1. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legkisebb elemét! */

/*
let arrMin = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < arrMin) {
    arrMin = arr[i];
  }
}

console.log(arrMin);
*/

function arrMin(arr) {
    let min = arr[0];
        for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] < min) {
            min = arr[i];
        }
    } return min // Ha a funkciót hívom, ez lesz a visszatérési érték!!!
}

console.log(arrMin(array1));



/* 2. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legnagyobb elemét! */

function arrMax(arr) {
    let max = arr[0];
        for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] > max) {
            max = arr[i];
        }
    } return max // Ha a funkciót hívom, ez lesz a visszatérési érték!!!
}

console.log(arrMax(array1));



/* 3. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb átlagát! */

function arrAvg(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i += 1) {
        sum = sum + arr[i];
    }
    let avg = sum / arr.length;
    return avg;
}

console.log(arrAvg(array1));



/* 4. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb összegét! */

function arrSum(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i += 1) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(arrSum(array1));



/* 5. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb páros elemeinek a számát! */

function arrEven1(arr) {
    let even = [];
    for (i = 0; i < arr.length; i += 1) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        }
    } return even.length;
}

console.log(arrEven1(array1));


