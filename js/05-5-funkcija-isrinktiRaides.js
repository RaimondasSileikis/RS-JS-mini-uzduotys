/* 
5. Funkcija pavadinimu “isrinktiRaides”:
a. priima du kintamuosius:
i. pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
ii.antrasis nurodo kas kelintą raidę išrinkti
b. patikrinti, ar pirmasis kintamasis yra teksto tipo:
i. jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
ii. priešingu atveju tęsiame darbą
c. patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
i. jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
ii. priešingu atveju tęsiame darbą
d. patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
i. jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
ii. priešingu atveju tęsiame darbą
e. patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
i. jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
ii. priešingu atveju tęsiame darbą
f. patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
i. jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
ii. priešingu atveju tęsiame darbą
g. išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
i. išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
ii. gražina rezultatą
j. TESTAI:
i. console.log( isrinktiRaides( “abcdefg”, 2 ) );
1. rezultatas: “bdf”
ii. console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
1. rezultatas: “cfil”
iii. console.log( isrinktiRaides( “abc”, 0 ) );
1. rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
iv. console.log( isrinktiRaides( “abc”, 4 ) );
1. rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
v. console.log( isrinktiRaides( 1561, 2 ) );
1. ezultatas: “Pirmasis kintamasis yra netinkamo tipo.”
*/




function isrinktiRaides(a, b) {
    if (typeof a !== 'string') {
}
    return 'Pirmasis kintamasis yra netinkamo tipo.';

    if (a.length == 0 || b.length > 100) {
    }
    return 'Pirmojo kintamojo reiksme yra netinkamo dydzio';

    if (typeof f !== 'number') {
    }
    return 'Pirmasis kintamasis yra netinkamo dydzio';

    if (b < 0) {
    }
    return 'Antrasis kintamasis turi buti didesnis uz nuli.';

    if (b < a.length) {
        }
        return 'Antrasis kintamasis turi buti ne didesnis uz pateikto teksto ilgi.';

        let isrinktosRaides = '';
        let k = b;
        for( let i = 0; i < a.length; i++) {
            k--;
            if (k === 0) {
                isrinktosRaides += a[i];
                k = b;
            }
        }
        return isrinktosRaides;
}

console.log(`isrinktiRaides( “abcdefg”, 2 )`);
console.log(`rezultatas: ${isrinktiRaides('abcdefg', 2)}`);

console.log(`isrinktiRaides( “abcdefghijkl”, 3 )`);
console.log(`rezultatas: ${isrinktiRaides('abcdefghijkl', 3)}`);

console.log(`isrinktiRaides( “abc”, 0 )`);
console.log(`rezultatas: ${isrinktiRaides('abc', 0)}`);

console.log(`rezultatas: ${isrinktiRaides('abc', 4)}`);
console.log(`rezultatas: ${isrinktiRaides('abc', 4)}`);

console.log(`isrinktiRaides( 1561, 2 )`);
console.log(`rezultatas: ${isrinktiRaides('1561', 2)}`);






console.log('------KITAS VARIANTAS--------------------');

function isrinktiRaides(a, b) {
    if (typeof a !== 'string') {
}
    return 'Pirmasis kintamasis yra netinkamo tipo.';

    if (a.length == 0 || b.length > 100) {
    }
    return 'Pirmojo kintamojo reiksme yra netinkamo dydzio';

    if (typeof f !== 'number') {
    }
    return 'Pirmasis kintamasis yra netinkamo dydzio';

    if (b < 0) {
    }
    return 'Antrasis kintamasis turi buti didesnis uz nuli.';

    if (b < a.length) {
        }
        return 'Antrasis kintamasis turi buti ne didesnis uz pateikto teksto ilgi.';

    let antrinisTekstas = '';
    for (let i = 0; i < a.length; i++) {
        const raide = a[i];
        if (raide.length = b ) {
            antrinisTekstas += raide;
        }
    }
    return antrinisTekstas;
}

console.log(`isrinktiRaides( “abcdefg”, 2 )`);
console.log(`rezultatas: ${isrinktiRaides('abcdefg', 2)}`);

console.log(`isrinktiRaides( “abcdefghijkl”, 3 )`);
console.log(`rezultatas: ${isrinktiRaides('abcdefghijkl', 3)}`);

console.log(`isrinktiRaides( “abc”, 0 )`);
console.log(`rezultatas: ${isrinktiRaides('abc', 0)}`);

console.log(`rezultatas: ${isrinktiRaides('abc', 4)}`);
console.log(`rezultatas: ${isrinktiRaides('abc', 4)}`);

console.log(`isrinktiRaides( 1561, 2 )`);
console.log(`rezultatas: ${isrinktiRaides('1561', 2)}`);
