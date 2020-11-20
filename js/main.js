let array1 = [265, 123, 6334, 21, 75543, 123, 2, 35, 23, 21, 897];
let array2 = [24, 674, 875, 3324, 986, 1, 293];
const arrayBS = [265, 123, 6334, 21, 75543, 123, 2, 35, 23, 21, 897];
const arrayBSort = [265, 123, 6334, 21, 75543, 123, 2, 35, 23, 21, 897];

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

console.log('1. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legkisebb elemét!');

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
console.log('2. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legnagyobb elemét!');

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
console.log('3. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb átlagát!');

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
console.log('4. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb összegét!');

function arrSum(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i += 1) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(arrSum(array1));



/* 5. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb páros elemeinek a számát! */
console.log('5. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb páros elemeinek a számát!');

function arrEven(arr) {
    let even = [];
    for (i = 0; i < arr.length; i += 1) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        }
    } return even.length;
}

console.log(arrEven(array1));



/* 6. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb második legkisebb elemét! */
console.log('6. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb második legkisebb elemét!');

function bubbleSort3(arr) {
    let swapped;
    do {
        swapped = false;
        for (i = 0; i < arr.length - 1; i += 1) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true
            }
        }
    } while (swapped)
    return arr;
}

bubbleSort3(array1);
console.log(array1);
console.log(array1[1]);

/* 7. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb harmadik legnagyobb elemét! */
console.log('7. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb harmadik legnagyobb elemét!');

let length = array1.length;
console.log(array1[length - 3]); // Mert a tömb utolsó eleme az a 'length - 1'-ik elem!!!


/*8. Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb (feltételezzük, hogy beágyazott tömböt, objektumot, egyéb iterálható elemet nem tartalmaz) tartalmazza-e a 23-as számot! Használj lineáris keresést! */
console.log('8. Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb (feltételezzük, hogy beágyazott tömböt, objektumot, egyéb iterálható elemet nem tartalmaz) tartalmazza-e a 23-as számot! Használj lineáris keresést!');

function linearSearch23(arr) {
    let src = false;
    for (i = 0; i < arr.length; i += 1) {
        if (arr[i] === 23) {
            src = true;
        }
    } return src;
}

console.log(linearSearch23(array1));
console.log(linearSearch23(array2));

// Bármilyen paramétreként számot tartalmaz-e?

function linearSearch(arr, srcNum) {
    let src = false;
    for (i = 0; i < arr.length; i += 1) {
        if (arr[i] === srcNum) {
            src = true;
        }
    } return src;
}

console.log(linearSearch(array1, 21));

/* 9. Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, csak egész számokat tartalmazó tömb tartalmazza-e a 23-as számot! Használj logaritmikus keresést! Nézz utána mi az, milyen feltételei vannak, és hogyan valósítható meg! */
console.log('9. Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, csak egész számokat tartalmazó tömb tartalmazza-e a 23-as számot! Használj logaritmikus keresést!')


function bubbleSort2(arr) {
    let swapped;
    do {
        swapped = false;
        for (i = 0; i < arr.length - 1; i += 1) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true
            }
        }
    } while (swapped)
    return arr;
}

//console.log(bubbleSort2(arrayBS));
const sortedArray = bubbleSort2(arrayBS);
console.log(sortedArray)

/*
function binarySearch23() {
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        console.log(mid);
        if (sortedArray[mid] === search) {
            return true;
        } else if (sortedArray[mid] < search) {
            start = sortedArray[mid] + 1;
        } else if (sortedArray[mid] > search) {
            end = sortedArray[mid] - 1;
        }
    }
    return false;

}

//console.log(binarySearch23(23));
//console.log(binarySearch23(sortedArray, 23));
//console.log(binarySearch23([1, 2, 3, 4, 5, 6, 23], 23));
*/


/* 10. Írd ki, hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb (feltételezzük, hogy beágyazott tömböt, objektumot nem tartalmaz) hányszor tartalmazza a 23-as számot! */
console.log('10. Írd ki, hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb (feltételezzük, hogy beágyazott tömböt, objektumot nem tartalmaz) hányszor tartalmazza a 23-as számot!');

function howManyTwentyThree(arr) {
    let howMany = 0;
    for (i = 0; i < arr.length; i += 1) {
        if (arr[i] === 23) {
            // howMany = howMany +1; --- ez is lehetne
            howMany += 1;
        }
    } return howMany;
}

console.log(howManyTwentyThree(array1));

// Hányszor tartalmazza a keresendő számot?

function howMany(arr, srcNum) {
    let howMany = 0;
    for (i = 0; i < arr.length; i += 1) {
        if (arr[i] === srcNum) {
            //howMany += 1;
            howMany++; // S akár így is növelhető egy változó értéke egyesével
        }
    } return howMany;
}

console.log('A kerestt szám ' + howMany(array1, 21) + ' alkalommal szerepel a tömbben.');

/* 11. Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem ismered) segítségével egy tetszőleges elemszámú, csak lebegőpontos számokat tartalmazó tömb elemeit növekvő sorrendbe! Írasd ki a rendezett tömböt! */
console.log('11. Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem ismered) segítségével egy tetszőleges elemszámú, csak lebegőpontos számokat tartalmazó tömb elemeit növekvő sorrendbe! Írasd ki a rendezett tömböt!');

function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (i = 0; i < arr.length - 1; i += 1) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true
            }
        }
    } while (swapped)
    return arr;
}

console.log(bubbleSort(arrayBSort));

/* 12.) Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem ismered) segítségével egy tetszőleges elemszámú, beágyazott tömb, és objektum kivételével bármilyen típusú elemeket tartalmazó tömb elemeit csökkenő sorrendbe! A nem szám típusú elemeket rakd a tömb végére az eredeti sorrendbe. Írasd ki a rendezett tömböt! */

/* 13. Adott egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb. A tömb elemeit rendezzük növekvő sorrendbe. Ezután a felhasználótól kérjünk be egy számot (addig kérjünk be értéket, míg valóban egy véges egész számot ad meg). A számot szúrjuk be a tömbbe úgy, hogy a tömb továbbra is rendezett maradjon, tehát a megfelelő indexű helyre kerüljön be a plusz elem.
Írasd ki a rendezett tömböt! */

/* 14. Adott egy tömb, mely azonos darabú egész számot, és szöveget tartalmaz véletlenszerű sorrendben. Rendezzük úgy a tömböt, hogy minden szám után egy string következzen! Írasd ki a rendezett tömböt! */

/* 15. Adott egy tetszőleges pozitív egész számokat tartalmazó tömb. Válogassuk szét külön egy even (páros), és odd (páratlan) nevezetű tömbbe a páros, és páratlan számokat! Írjuk ki a 2 tömböt! */
console.log('15. Adott egy tetszőleges pozitív egész számokat tartalmazó tömb. Válogassuk szét külön egy even (páros), és odd (páratlan) nevezetű tömbbe a páros, és páratlan számokat! Írjuk ki a 2 tömböt!');

function arrEvenOdd(arr) {
    let even = [], odd = [];
    for (i = 0; i < arr.length; i += 1) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }
    console.log(even);
    console.log(odd);
}

arrEvenOdd(array1);


/* 16. Adott két azonos elemszámú, csak egész számokat tartalmazó tömb. Külön tömbökbe készítsük el a két tömb: metszetét, unióját, különbségét, és descartes szorzatát. Írassuk ki az új tömböket! */

const arrA = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const abbB = [3,6,9,12,15,18,21,24,27];


// Metszet



// Unió

let unio = [];
for (i = 0; i < arrA.length; i += 1) {
    
    unio.push(arrA[i]);
}

for (j = 0; j < arrB.length; j +=1) {
    if (arrB)
}
console.log(unio);


/*
function linearSearch23(arr) {
    let src = false;
    for (i = 0; i < arr.length; i += 1) {
        if (arr[i] === 23) {
            src = true;
        }
    } return src;
}
*/

// Különbség


// Descartes szorzat


/*
Descartes szorzat: https://regi.tankonyvtar.hu/hu/tartalom/tamop425/0033_SCORM_GEMAN6206B/sco_01_03.htm

https://www.mathreference.org/index/page/id/350/lg/hu

*/