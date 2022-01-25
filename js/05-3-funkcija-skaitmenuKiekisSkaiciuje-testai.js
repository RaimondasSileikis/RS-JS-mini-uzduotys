/*
3. Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
    a. priima vieną kintamąjį
    b. jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
    c. priešingu atveju, funkcija tęsia darbą
    d. į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
    e. gražina skaitmenų kiekį
    f. TESTAI:
        i. console.log( skaitmenuKiekisSkaiciuje( 5 ) );
            1. rezultatas: 1
        ii. console.log( skaitmenuKiekisSkaiciuje( 781 ) );
            1. rezultatas: 3
        iii. console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
            1. rezultatas: 11
        iv. console.log( skaitmenuKiekisSkaiciuje( true ) );
            1.rezultatas: “Pateikta netinkamo tipo reikšmė.”
        v. console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
            1. rezultatas: “Pateikta netinkamo tipo reikšmė.”
        vi. console.log( skaitmenuKiekisSkaiciuje( NaN ) );
            1. rezultatas: “Pateikta netinkamo tipo reikšmė.”
*/
function skaitmenuKiekisSkaiciuje(n) {
   
    if (typeof n !== 'number' 
    || !isFinite(n)) {
        return 'ERROR ne skaiciaus tipo reiksme';
    }
    const isSkaiciausITeksta = '' + n;
    let size = isSkaiciausITeksta.length;
    if (n < 0) {
        size --;
    }
    if (n % 1 !== 0) {
        size --;
    }
 
    return size;
}

console.log(skaitmenuKiekisSkaiciuje(true), 'turi buti', 'ERROR');
console.log(skaitmenuKiekisSkaiciuje(false), 'turi buti', 'ERROR');
console.log(skaitmenuKiekisSkaiciuje(NaN), 'turi buti', 'ERROR');
console.log(skaitmenuKiekisSkaiciuje('zodis'), 'turi buti', 'ERROR');
console.log(skaitmenuKiekisSkaiciuje(Infinity), 'turi buti', 'ERROR');
console.log(skaitmenuKiekisSkaiciuje(-Infinity), 'turi buti', 'ERROR');

console.log(skaitmenuKiekisSkaiciuje(5), 'turi buti', 1);
console.log(skaitmenuKiekisSkaiciuje(123456), 'turi buti', 6);
console.log(skaitmenuKiekisSkaiciuje(-1), 'turi buti', 1);
console.log(skaitmenuKiekisSkaiciuje(-123), 'turi buti', 3);
console.log(skaitmenuKiekisSkaiciuje(1.123), 'turi buti', 4);
console.log(skaitmenuKiekisSkaiciuje(123.123), 'turi buti', 6);
console.log(skaitmenuKiekisSkaiciuje(0.123), 'turi buti', 3);
console.log(skaitmenuKiekisSkaiciuje(-1.123), 'turi buti', 4);
console.log(skaitmenuKiekisSkaiciuje(-123.123), 'turi buti', 6);
console.log(skaitmenuKiekisSkaiciuje(-0.123), 'turi buti', 3);
console.log(skaitmenuKiekisSkaiciuje(1.123e10), 'turi buti', 11);

