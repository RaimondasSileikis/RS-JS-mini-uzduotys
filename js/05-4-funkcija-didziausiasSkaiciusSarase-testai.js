/*
 4. Funkcija pavadinimu “didziausiasSkaiciusSarase”:
priima vieną kintamąjį
jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
priešingu atveju, funkcija tęsia darbą
pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
gražina didžiausią surastą skaičių
TESTAI:
console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
rezultatas: 1
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
rezultatas: 3
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
rezultatas: 78
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
rezultatas: 69
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
rezultatas: -1
console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( didziausiasSkaiciusSarase( [] ) );
rezultatas: “Pateiktas sąrašas negali būti tuščias.”
*/

function yraTikrasNumeris(num) {
    return typeof num === 'number' && isFinite(num);
}

function DSS(list) {
    if (!Array.isArray(list)) {
        return 'ERROR privalo buti masyvas';
    }
    if (list.length === 0 ) {
        return 'ERROR: masyvo ilgis privalo buti ne tuscias';
    }
    let biggest = -Infinity;

    for (let i = 0; i < list.length; i++) {
        const n = list[i];
        if (yraTikrasNumeris(n) && n > biggest) {
            biggest = n;
        }
    }
    if (biggest === -Infinity) {
        return 'Error: masyve nerasta nei vieno normalaus skaiciaus';
    }
    return biggest
}
console.log(DSS([1, 2]), 'Turi -->', 2);
console.log(DSS('zodis'), '-->', 'ERROR');
console.log(DSS([]), '-->', 'ERROR');
console.log(DSS(Infinity), '-->', 'ERROR');
console.log(DSS(NaN), '-->', 'ERROR');
console.log(DSS({}), '-->', 'ERROR');
console.log(DSS(null), '-->', 'ERROR');
console.log(DSS(undefined), '-->', 'ERROR');
console.log(DSS([Infinity]), '-->', 'ERROR');
console.log(DSS([-Infinity, -Infinity, -Infinity]), '-->', 'ERROR');

console.log(DSS([1]), '-->', 1);
console.log(DSS([1, 2, 3]), '-->', 3);
console.log(DSS([-5, 78, 14, 0, 18]), '-->', 78);
console.log(DSS([69, 69, 69, 69, 66]), '-->', 69);
console.log(DSS([-1, -2, -3, -4, -5, -6, -7, -8]), '-->', -1);
console.log(DSS([1, true, 'labas', [], [5, 8], ['a', 'sdgf'], 2, 3]), '-->', 3);
console.log(DSS([-1, NaN, -8, -2, -3]), '-->', -1);
console.log(DSS([1, NaN, 8, 2, 3]), '-->', 8);
console.log(DSS([1, Infinity, -Infinity, 8, 2, 3]), '-->', 8);
console.log(DSS([1, NaN, Infinity, -Infinity, 8, 2, 3]), '-->', 8);
console.log(DSS([8, Infinity]), '-->', 8);
console.log(DSS([Infinity, 8]), '-->', 8);

/*extra
console.log(DSS([8, [2, 14], 77, [123, 4]]), '-->', 123);
console.log(DSS([8, [2, [777], 14], 77, [123, 4]]), '-->', 777);
console.log(DSS([8, [2, [777, [1, 2, 888]], 14], 77, [123, 4]]), '-->', 888);
*/


function DSS1(sarasas) {
    if (!Array.isArray(sarasas)) {
        return 'ERROR: privalo buti masyvas';
    }
    if (sarasas.length === 0) {
        return 'ERROR: masyvas privalo buti tuscias';
    }
   let didz = -Infinity;
   for (let i = 0; i < sarasas.length; i++) {
       const ntasis = sarasas[i];
       if (typeof ntasis === 'number'
            && isFinite(ntasis)
            && ntasis > didz) {
            didz = ntasis;
       }
    }
       if (didz === -Infinity) {
           return 'ERROR: masyve nerasta nei vieno normalaus skaiciaus';
       }
       return didz;
   }




console.log(DSS1([2]), '-->', 1);
console.log(DSS1([2, 5]), '-->', 5);
console.log(DSS1([]), '-->', 'ERROR');
console.log(DSS1([1, 2]), '-->', 2);
console.log(DSS1('zodis'), '-->', 'ERROR');
console.log(DSS1([]), '-->', 'ERROR');
console.log(DSS1(Infinity), '-->', 'ERROR');
console.log(DSS1(NaN), '-->', 'ERROR');
console.log(DSS1({}), '-->', 'ERROR');
console.log(DSS1(null), '-->', 'ERROR');
console.log(DSS1(undefined), '-->', 'ERROR');
console.log(DSS1([Infinity]), '-->', 'ERROR');
console.log(DSS1([-Infinity, -Infinity, -Infinity]), '-->', 'ERROR');

console.log(DSS1([1]), '-->', 1);
console.log(DSS1([1, 2, 3]), '-->', 3);
console.log(DSS1([-5, 78, 14, 0, 18]), '-->', 78);
console.log(DSS1([69, 69, 69, 69, 66]), '-->', 69);
console.log(DSS1([-1, -2, -3, -4, -5, -6, -7, -8]), '-->', -1);
console.log(DSS1([1, true, 'labas', [], [5, 8], ['a', 'sdgf'], 2, 3]), '-->', 3);
console.log(DSS1([-1, NaN, -8, -2, -3]), '-->', -1);
console.log(DSS1([1, NaN, 8, 2, 3]), '-->', 8);
console.log(DSS1([1, Infinity, -Infinity, 8, 2, 3]), '-->', 8);
console.log(DSS1([1, NaN, Infinity, -Infinity, 8, 2, 3]), '-->', 8);
console.log(DSS1([8, Infinity]), '-->', 8);
console.log(DSS1([Infinity, 8]), '-->', 8);