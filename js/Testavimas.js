/*
function dalyba(a, b) {
    if (typeof a !== 'number') {
       return 'ERROR: pirmas parametras ne skaicius';
        }
    if (!isFinite(a)) {
        return 'ERROR: pirmas parametras turi buti tikras skaicius';
    }
    if (typeof b !== 'number') {
        return 'ERROR: antras parametras ne skaicius';
    }
    if (!isFinite(b)) {
        return 'ERROR: antras parametras turi buti tikras skaicius';
    }

        const reiksme = a / b; 
        return reiksme;
    }


console.log(dalyba(10, 2));

console.log(dalyba('good', 'day'), '-->', 'ERROR');
console.log(dalyba('hello', 1), '-->', 'ERROR');
console.log(dalyba(1, 'hello'), '-->', 'ERROR');
console.log(dalyba(NaN, 2), '-->', 'ERROR');
console.log(dalyba(2, NaN), '-->', 'ERROR');
console.log(dalyba(Infinity, 3), '-->', 'ERROR');
console.log(dalyba(3, Infinity), '-->', 'ERROR');
console.log(dalyba(-Infinity, 4), '-->', 'ERROR');
console.log(dalyba(4, -Infinity), '-->', 'ERROR');
console.log(dalyba(true, -5), '-->', 'ERROR');
console.log(dalyba(false, -6), '-->', 'ERROR');
console.log(dalyba([], -7), '-->', 'ERROR');
console.log(dalyba(dalyba, -8), '-->', 'ERROR');
console.log(dalyba(-5, true), '-->', 'ERROR');
console.log(dalyba(-6, false), '-->', 'ERROR');
console.log(dalyba(-7, []), '-->', 'ERROR');
console.log(dalyba(-8, dalyba), '-->', 'ERROR');

console.log(dalyba(20, 5), '-->', 8);
console.log(dalyba(-2, 5), '-->', -8);
console.log(dalyba(-8.5, 2.25), '-->', -4.375);
console.log(dalyba(0, 2.25), '-->', 0);
console.log(dalyba(-1234567.25, 0), '-->', 0);
console.log(dalyba(-0, 5), '-->', 0);
console.log(dalyba(-0, -5), '-->', 0);
*/

