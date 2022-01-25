/*
2. Funkcija pavadinimu “daugyba”:
    a. priima du skaičiaus tipo kintamuosius
    b. atskirame kintamajame įsimena sandaugos reikšmę
    c. gražina saudaugos rezultatą
    d. TESTAI:
        i. console.log( daugyba( skaicius1, skaicius2 ) );
        ii. console.log( daugyba( skaicius3, skaicius2 ) );
        iii. console.log( daugyba( skaicius1, skaicius3 ) );
        iv. rezultatas: teisingos reikšmės;
*/


function daugyba(a, b) {
    if (typeof a !== 'number') {
        return 'ERROR: pirmas parametras nera skaicius'; 
    }
    if (typeof b !== 'number') {
        return 'ERROR: antras parametras nera skaicius';
    }
    if (!isFinite(a)) {
        return 'ERROR: pirmas parametras turi buti skaicius'; 
    }
    if (!isFinite(b)) {
        return 'ERROR: antras parametras turi buti skaicius'; 
        
    }
    const viso = a * b;
    return viso;
}

console.log(daugyba(5, 2), '(turi buti', 10,')');
console.log(daugyba(-5, 2), '(turi buti', 10,')');
console.log(daugyba(0.25, 2), '(turi buti', 5,')');
console.log(daugyba(2555555555, 0), '(turi buti', 0,')');
console.log(daugyba(5, 'tu'), '(turi buti', 'ERROR)');
console.log(daugyba('as', 8), '(turi buti', 'ERROR)');
console.log(daugyba(Infinity, 8), '(turi buti', 'ERROR)');
console.log(daugyba(4, Infinity), '(turi buti', 'ERROR)');
console.log(daugyba(4, NaN), '(turi buti', 'ERROR)');
console.log(daugyba(NaN, 5), '(turi buti', 'ERROR)');
console.log(daugyba(-Infinity, 8), '(turi buti', 'ERROR)');
console.log(daugyba(4, -Infinity), '(turi buti', 'ERROR)');
console.log(daugyba(4, []), '(turi buti', 'ERROR)');
console.log(daugyba([], 4), '(turi buti', 'ERROR)');
console.log(daugyba(4, true), '(turi buti', 'ERROR)');
console.log(daugyba(false, 4), '(turi buti', 'ERROR)');
console.log(daugyba(4, daugyba), '(turi buti', 'ERROR)');
console.log(daugyba(daugyba, 5), '(turi buti', 'ERROR)');