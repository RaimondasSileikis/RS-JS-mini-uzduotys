// 03 Uzduotis. Kintamuju palyginimas

// Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

// 1.Tarpusavyje palyginti skaičiaus tipo kintamuosius:
    // a. kuris didesnis

const a = 10;
const b = 5;
const c = 5;

if (a > b) {
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite kita karta.`);
}

    // b. kuris mažesnis

if (b < a) {
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite kita karta.`);
}

    // c. ar jie lygūs

if (b === c) {
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite kita karta.`);
}

    // d. ar jie nelygūs

if (a !== b) {
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite kita karta.`);
}

    // e. kuris didesnis arba lygus

if (a >= b) {
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite kita karta.`);
}

    // f. kuris mažesnis arba lygus

if (b <= c) {
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite kita karta.`);
}

// 2. Išvesti teksto tipo kintamųjų ilgius

const sostine = `Vilnius`
const miestas = `Kaunas`;
const valstybe = `Lietuva`;
const zemynas = 'Europa';

console.log(sostine.length);
console.log(miestas.length);
console.log(valstybe.length);
console.log(zemynas.length);

// 3. Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
    // a. kuris didesnis

if (sostine.length > miestas.length) {
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite kita karta`);
}

    //b. kuris mažesnis

if (miestas.length < valstybe.length) {
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite kita karta`);
}

    // c. ar jie lygus

if (sostine.length === valstybe.length) {
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite kita karta`);
}

    // d. ar jie nelygus

if (sostine.length !== miestas.length) {
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite kita karta`);
}

    // e. kuris didesnis arba lygus

if (sostine.length >= valstybe.length) {
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite kita karta`);
}
        
    // f. kuris mažesnis arba lygus

if (miestas.length <= valstybe.length) {
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite kita karta`);
}

// 4. Išvesti sąrašo tipo kintamųjų ilgius

const miestai = [`Vilnius`, `Kaunas`, `Klaipeda`, `Pavevezys`, `Siauliai`];
console.log(miestai.length);

const valstybes = [`Lietuva`, `Latvija`, `Estija`, `Lenkija`];
console.log(valstybes.length);

const zemynai = [`Europa`, `Azija`, `Afrika`, `Australija`];
console.log(zemynai.length);

// 5. Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
    // a. kuris didesnis

if (miestai.length > valstybes.length) {
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite kita karta`);
}

    // b. kuris mažesnis

if (valstybes.length < miestai.length) {
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite kita karta`);
}

    // c. ar jie lygūs

if (valstybes.length === zemynai.length) {
   console.log(`Pomidoras`);
} else {
    console.log(`Bandykite kita karta`);
}

    // d. ar jie nelygūs

if (valstybes.length !== miestai.length) {
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite kita karta`);
}
    
    // e. kuris didesnis arba lygus

if (miestai.length >= valstybes.length) {
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite kita karta`);
}

    // f. kuris mažesnis arba lygus

if (valstybes.length <= zemynai.length) {
    console.log(`Pomidoras`);
 } else {
     console.log(`Bandykite kita karta`);
 }