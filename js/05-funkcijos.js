// 1. Funkcija pavadinimu "tusciaFunkcija":
    // a. nepriima jokių kintamųjų
    // b. neatlieka jokios vidinės logikos

function tusciaFunkcija() {

}

// c. gražina boolean tipo reikšmę “false”

function tusciaFunkcija() {
    return false;
}

//d. TESTAS:
// i. console.log( tusciaFunkcija() );

console.log(tusciaFunkcija());

// ii. rezultatas: false

console.log(false);

// 2. Funkcija pavadinimu “daugyba”:

function daugyba() {
    
}

// a. priima du skaičiaus tipo kintamuosius
function daugyba(a, b) {
    
}

// b. atskirame kintamajame įsimena sandaugos reikšmę
const viso = a * b;

// c. gražina saudaugos rezultatą
return viso

// d. TESTAI:
// i.  console.log(daugyba(skaicius1, skaicius2));
const skaicius1 = 5;
const skaicius2 = 10;
const skaicius3 = 20;
function daugyba(a, b) {   
}
const d1 = daugyba(skaicius1, skaicius2);
console.log(`daugyba(${skaicius1}, ${skaicius2})`);

// ii. console.log(daugyba( skaicius3, skaicius2));
const skaicius1 = 5;
const skaicius2 = 10;
const skaicius3 = 20;
function daugyba(a, b) {   
}
const d2 = daugyba(skaicius3, skaicius2);
console.log(`daugyba(${skaicius3}, ${skaicius2})`);

// i. console.log(daugyba(skaicius1, skaicius3));
const skaicius1 = 5;
const skaicius2 = 10;
const skaicius3 = 20;
function daugyba(a, b) {   
}
const d3 = daugyba(skaicius1, skaicius3);
console.log(`daugyba(${skaicius1}, ${skaicius3})`);

// iv. rezultatas: teisingos reikšmės;
function daugyba(a, b) {
    const viso = a * b;
    return viso;
}

console.log(`rezultatas: ${d1}, ${d2}, ${d3}`);

// 3. Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
function skaitmenuKiekisSkaiciuje() {   
}
// a. priima vieną kintamąjį
function skaitmenuKiekisSkaiciuje(c) {
}
// b. jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
function skaitmenuKiekisSkaiciuje(c) {
    if (isNaN(c)) {
        return 'Pateikta netinkamo tipo reiksme.';
    }     
}

// c. priešingu atveju, funkcija tęsia darbą
return ''

// d. į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
const kiekis = c.toString().length;

// c. gražina skaitmenų kiekį
return kiekis;

// f. TESTAI:
// i. console.log( skaitmenuKiekisSkaiciuje( 5 ) );
console.log(`skaitmenuKiekisSaiciuje (5)`);

// 1. rezultatas: 1
console.log(`rezultatas: ${skaitmenuKiekisSkaiciuje(5)}`);

// ii. console.log( skaitmenuKiekisSkaiciuje( 781 ) );
console.log(`skaitmenuKiekisSaiciuje (781)`);

// 1. rezultatas: 3
console.log(`rezultatas: ${skaitmenuKiekisSkaiciuje(781)}`);


// iii. console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );

console.log(`skaitmenuKiekisSaiciuje (37060123456)`);

// 1. rezultatas: 11
console.log(`rezultatas: ${skaitmenuKiekisSkaiciuje(37060123456)}`);


// iv. console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log(skaitmenuKiekisSkaiciuje(true));

// 1. rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log(`rezultatas: ${skaitmenuKiekisSkaiciuje(true)}`);


// v. console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
console.log(`skaitmenuKiekisSaiciuje "asd"`);

// 1. rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log(`rezultatas: ${skaitmenuKiekisSkaiciuje(asd)}`);


// vi. console.log( skaitmenuKiekisSkaiciuje( NaN ) );
console.log(`skaitmenuKiekisSaiciuje (NaN)`);

// 1. rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log(`rezultatas: ${skaitmenuKiekisSkaiciuje(NaN)}`);


// 4 Funkcija pavadinimu “didziausiasSkaiciusSarase”:
function didziausiasSkaiciusSarase() {
    
}
// a. priima vieną kintamąjį
function didziausiasSkaiciusSarase(d) {
    
}
// b. jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
return 'Pateikta netinkamo tipo reiksme.'

// c. jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
return 'Pateiktas sąrašas negali būti tuščias.'

// d. priešingu atveju, funkcija tęsia darbą
return ''

// e. pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
function didziausiasSkaiciusSarase(d);
const max = Math.max(...d);

// f. gražina didžiausią surastą skaičių
console.log(didziausiasSkaiciusSarase(d));

// g. TESTAI:
        
// i. console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
console.log(`didziausiasSkaiciusSarase([1])`);

// 1. rezultatas: 1
console.log(`rezultatas: ${didziausiasSkaiciusSarase(d)}`);

// ii. console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
const d = [1];
console.log(`didziausiasSkaiciusSarase( [1, 2, 3])`);

// 1. rezultatas: 3
const d = [1, 2 ,3];
console.log(`rezultatas: ${didziausiasSkaiciusSarase(d)}`);

// iii. console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
console.log(`didziausiasSkaiciusSarase( [-5, 78, 14, 0, 18 ])`);

// 1. rezultatas: 78
const d = [-5, 78, 14, 0, 18];
console.log(`rezultatas: ${didziausiasSkaiciusSarase(d)}`);

// iv. console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
console.log(`didziausiasSkaiciusSarase( [69, 69, 69, 69, 66 ])`);

// 1. rezultatas: 69
const d = [69, 69, 69, 69, 66 ];
console.log(`rezultatas: ${didziausiasSkaiciusSarase(d)}`);

// v. console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
console.log(`didziausiasSkaiciusSarase( [-1, -2, -3, -4, -5, -6, -7, -8 ])`);

// 1. rezultatas: -1
const d = [-1, -2, -3, -4, -5, -6, -7, -8];
console.log(`rezultatas: ${didziausiasSkaiciusSarase(d)}`);


// vi. console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
console.log(`didziausiasSkaiciusSarase("pomidoras")`);

// 1. rezultatas: “Pateikta netinkamo tipo reikšmė.”
return 'Pateikta netinkamo tipo reiksme.';

// vii. console.log( didziausiasSkaiciusSarase( [] ) );
console.log(`didziausiasSkaiciusSarase([])`);

// 1. rezultatas: “Pateiktas sąrašas negali būti tuščias.”
if (d.length == 0) {
    return 'Pateiktas sarasas negali buti tuscias.'
}

// 5. Funkcija pavadinimu “isrinktiRaides”:
function isrinktiRaides() {  
}

// a. priima du kintamuosius:
function isrinktiRaides(e, f) {
}
// i. pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
const e = 'tekstas';

// ii. antrasis nurodo kas kelintą raidę išrinkti
const f = 2;

// b. patikrinti, ar pirmasis kintamasis yra teksto tipo:
function isrinktiRaides(e, f) {
    if (typeof e !== 'string')
}
// i. jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
return 'Pateikta netinkamo tipo reiksme.';

// ii. priešingu atveju tęsiame darbą
return '';

// c. patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
if (e.length == 0 || f.length > 100) {
}

// i. jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
return 'Pirmojo kintamojo reiksme yra netinkamo dydzio';

// ii. priešingu atveju tęsiame darbą
return '';

// d. patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
if (typeof f !== 'number') {
}
// i. jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
return 'Pirmasis kintamasis yra netinkamo dydzio';

// ii. priešingu atveju tęsiame darbą
return '';
// e. patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
if (f < 0) {
}

// i. jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
return 'Antrasis kintamasis turi buti didesnis uz nuli.';

// ii priešingu atveju tęsiame darbą
return '';

// f. patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
if (e > f);

// i. jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
return 'Antrasis kintamasis turi buti ne didesnis uz pateikto teksto ilgi.'

// ii. priešingu atveju tęsiame darbą
return ''

// g. išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)

function isrinktiRaides(e, f){
    let isrinktosRaides = '';
    let k = f;
    for( let i = 0; i < e.length; i++) {
        k--;
        if (k === 0) {
            isrinktosRaides += e[i];
            k = f;
        }
    }
    return isrinktosRaides;
}
// h. išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
// i. gražina rezultatą
return isrinktosRaides;
// j. TESTAI:
// i. console.log( isrinktiRaides( “abcdefg”, 2 ) );
console.log(`isrinktiRaides( “abcdefg”, 2 )`);

// 1. rezultatas: “bdf”
console.log(`rezultatas: ${isrinktiRaides('abcdefg', 2)}`);

// ii. console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
console.log(`isrinktiRaides( “abcdefghijkl”, 3 )`);

// 1. rezultatas: “cfil”
console.log(`rezultatas: ${isrinktiRaides('abcdefghijkl', 3)}`);

// iii. console.log( isrinktiRaides( “abc”, 0 ) );
console.log(`isrinktiRaides( “abc”, 0 )`);

// 1. rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
console.log(`rezultatas: ${isrinktiRaides('abc', 0)}`);

// iv. console.log( isrinktiRaides( “abc”, 4 ) );
console.log(`isrinktiRaides( “abc”, 4 )`);

// 1. rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
console.log(`rezultatas: ${isrinktiRaides('abc', 4)}`);

// v. console.log( isrinktiRaides( 1561, 2 ) );
console.log(`isrinktiRaides( 1561, 2 )`);

// 1. rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”
console.log(`rezultatas: ${isrinktiRaides('1561', 2)}`);

// 6. Funkcija pavadinimu “dalyba”:
function dalyba() {
}
// a. turi priimti du kintamuosius
function dalyba(a, b) {
    reiksme = a / b;
    return reiksme;
}
console.log(dalyba(10, 2));
// b. reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
if (typeof a !== 'number') {
  
     }
 if (!isFinite(a)) {
     
 }
 if (typeof b !== 'number') {
     
 }
 if (!isFinite(b)) {
     
 }
// i. esant blogoms sąlygoms, išvesti atitinkamą pranešimą
return 'ERROR: pirmas parametras ne skaicius';
return 'ERROR: pirmas parametras turi buti tikras skaicius';
return 'ERROR: antras parametras ne skaicius';
return 'ERROR: antras parametras turi buti tikras skaicius';
// ii. esant geroms - tęsti darbą

// c. atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
// i. daliname pirmąjį skaičių iš antrojo
const reiksme = a / b; 
      
// d. gražinti suskaičiuotą reikšmę
return reiksme;
// e. TESTAI:
// i. sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu gerą funkcijos veikimą
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