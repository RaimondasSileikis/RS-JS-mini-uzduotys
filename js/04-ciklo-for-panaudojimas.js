// Ciklo for panaudojimas

// 1.Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
    //a. 0 - 0
let suma1 = 0;

for (let i = 0; i <= 0; i++) {
    suma1 += i   
}
console.log(suma1);


    // b. 0 - 4
let suma2 = 0;

for (let i = 0; i <= 4; i++) {
    suma2 += i    
}
console.log(suma2);


    // c. 0 - 100
let suma3 = 0;

for (let i = 0; i <= 100; i++) {
    suma3 += i   
}
console.log(suma3);

    // d. 575 - 815
let suma4 = 0;

for (let i = 575; i <= 815; i++) {
    suma4 += i   
}
console.log(suma4);

    // e. -50 - 50
let suma5 = 0;

for (let i = -50; i <= 50; i++) {
    suma5 += i   
}
console.log(suma5);

    // f. -70 - 30
let suma6 = 0;

for (let i = -70; i <= 30; i++) {
    suma6 += i   
}
console.log(suma6);


// 2, panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo: 
    //a. pvz.: “abcdef” -> “fedcba”

const abc = `abcdef`;
let cba = '';

for (let i = 0; i < abc.length; i++) {
    const raide = abc[abc.length - 1 - i]   
    console.log(raide);
    cba += raide
    }
console.log(`${abc} -> ${cba}`);

// 3. Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
    // a. 0 - 11
const nuoA = 0;
const ikiA = 11;
const daliklis1 = 3;
const daliklis2 = 5;
const daliklis3 = 7;
let dalmuoA1 = 0;
let dalmuoA2 = 0;
let dalmuoA3 = 0;

for (let i = nuoA; i <= ikiA; i++) {
    
    if (i % daliklis1 === 0) {
        dalmuoA1++
    }
    if (i % daliklis2 === 0) {
        dalmuoA2++
    }
    if (i % daliklis3 === 0) {
        dalmuoA3++
    }
}

// b. 8 - 31

const nuoB = 8;
const ikiB = 31;
let dalmuoB1 = 0;
let dalmuoB2 = 0;
let dalmuoB3 = 0;

for (let i = nuoB; i <= ikiB; i++) {
    
    if (i % daliklis1 === 0) {
        dalmuoB1++
    }
    if (i % daliklis2 === 0) {
        dalmuoB2++
    }
    if (i % daliklis3 === 0) {
        dalmuoB3++
    }
}

// c. -18 -18

const nuoC = -18;
const ikiC = 18;
let dalmuoC1 = 0;
let dalmuoC2 = 0;
let dalmuoC3 = 0;

for (let i = -nuoC; i <= ikiC; i++) {
    
    if (i % daliklis1 === 0) {
        dalmuoC1++
    }
    if (i % daliklis2 === 0) {
        dalmuoC2++
    }
    if (i % daliklis3 === 0) {
        dalmuoC3++
    }
}

// d. rezultatą pateikti tokiu formatu:
// i. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
// ii. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
// iii. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.

console.log(`Skaiciu intervale tarp ${nuoA} ir ${ikiA}, besidalijanciu be liekanos is ${daliklis1} yra ${dalmuoA1} vienetai.`);
console.log(`Skaiciu intervale tarp ${nuoA} ir ${ikiA}, besidalijanciu be liekanos is ${daliklis2} yra ${dalmuoA2} vienetai.`);
console.log(`Skaiciu intervale tarp ${nuoA} ir ${ikiA}, besidalijanciu be liekanos is ${daliklis3} yra ${dalmuoA3} vienetai.`);
console.log(`-------------------------------------------------------`);
console.log(`Skaiciu intervale tarp ${nuoB} ir ${ikiB}, besidalijanciu be liekanos is ${daliklis1} yra ${dalmuoB1} vienetai.`);
console.log(`Skaiciu intervale tarp ${nuoB} ir ${ikiB}, besidalijanciu be liekanos is ${daliklis2} yra ${dalmuoB2} vienetai.`);
console.log(`Skaiciu intervale tarp ${nuoB} ir ${ikiB}, besidalijanciu be liekanos is ${daliklis3} yra ${dalmuoB3} vienetai.`);
console.log(`--------------------------------------------------------`);
console.log(`Skaiciu intervale tarp ${nuoC} ir ${ikiC}, besidalijanciu be liekanos is ${daliklis1} yra ${dalmuoC1} vienetai.`);
console.log(`Skaiciu intervale tarp ${nuoC} ir ${ikiC}, besidalijanciu be liekanos is ${daliklis2} yra ${dalmuoC2} vienetai.`);
console.log(`Skaiciu intervale tarp ${nuoC} ir ${ikiC}, besidalijanciu be liekanos is ${daliklis3} yra ${dalmuoC3} vienetai.`);