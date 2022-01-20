// 1. Susumuoti visus skaičiaus tipo kintamuosius
    // a. Rezultatą išvesti į console

const pirmas = 2;
const antras = 5;
const trecias = 9;

const skaiciuSuma = pirmas + antras + trecias;
console.log(skaiciuSuma);


// 2. Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
    // a. Rezultatą išvesti į console

const ketvirtas = 'Saule';
const penktas = 'Menulis';
const sestas = 'Zvaigzde';

const dangus = `${ketvirtas} ${penktas} ${sestas}`
console.log(dangus);


// 3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
    // a. 1-2+3-4+5

const laipsniai = [2, 6, 8, 4, 7];
const minutes = [8, 3, 5, 10, 21];
const valandos = [1, 3, 5, 7, 9];

const laipsniuSuma = laipsniai[0] - laipsniai[1] + laipsniai[2] - laipsniai[3] + laipsniai[4];
const minuciuSuma = minutes[0] - minutes[1] + minutes[2] - minutes[3] + minutes[4];
const valanduSuma = valandos[0] - valandos[1] + valandos[2] - valandos[3] + valandos[4];

    // b. Rezultatą išvesti į console

console.log(laipsniuSuma);
console.log(minuciuSuma);
console.log(valanduSuma);


// 4. Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

const miestai = [`Vilnius`, `Kaunas`, `Klaipeda`, `Panevezys`,  `Siauliai`];
console.log(miestai);

const valstybes = [`Lietuva`, `Latvija`, `Estija`, `Lenkija`, `Vokietija`];
console.log(valstybes);

const zemynai = [`Europa`, `Azija`, `Afrija`, `Amerika`, `Australija`];
console.log(zemynai);

const salys = `${zemynai[4]}, ${zemynai[3]}, ${zemynai[2]}, ${zemynai[1]}, ${zemynai[0]}, ${valstybes[4]}, ${valstybes[3]}, ${valstybes[2]}, ${valstybes[1]}, ${valstybes[0]}, ${miestai[4]}, ${miestai[3]}, ${miestai[2]}, ${miestai[1]}, ${miestai[0]}`;
console.log(salys);