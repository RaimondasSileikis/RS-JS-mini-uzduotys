// 1. Susumuoti visus skaičiaus tipo kintamuosius
    // a. Rezultatą išvesti į console

const pirmas = 2;
console.log(pirmas);

const antras = 5;
console.log(antras);

const trecias = 9;
console.log(trecias);

const skaiciuSuma = pirmas + antras + trecias;
console.log(skaiciuSuma);


// 2. Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
    // a. Rezultatą išvesti į console

const ketvirtas = 'Saule';
console.log(ketvirtas);

const penktas = 'Menulis';
console.log(penktas);

const sestas = 'Zvaigzde';
console.log(sestas);

const dangus = `${ketvirtas} ${penktas} ${sestas}`
console.log(dangus);


// 3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
    // a. 1-2+3-4+5

const laipsniai = [2, 6, 8, 4, 7];
console.log(laipsniai);

const minutes = [8, 3, 5, 10, 21];
console.log(minutes);

const valandos = [1, 3, 5, 7, 9];
console.log(valandos);


    // b. Rezultatą išvesti į console

const laipsniuSuma = laipsniai[0] - laipsniai[1] + laipsniai[2] - laipsniai[3] + laipsniai[4];
console.log(laipsniuSuma);

const minuciuSuma = minutes[0] - minutes[1] + minutes[2] - minutes[3] + minutes[4];
console.log(minuciuSuma);

const valanduSuma = valandos[0] - valandos[1] + valandos[2] - valandos[3] + valandos[4];
console.log(valanduSuma);


// 4. Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

const miestai = [`Vilnius`, `Kaunas`, `Klaipeda`, `Panevezys`,  `Siauliai`];
console.log(miestai);

const valstybes = [`Lietuva`, `Latvija`, `Estija`, `Lenkija`, `Vokietija`];
console.log(valstybes);

const zemynai = [`Europa`, `Azija`, `Afrija`, `Amerika`, `Australija`];
console.log(zemynai);

const salys = `${miestai[0]}, ${miestai[1]}, ${miestai[2]}, ${miestai[3]}, ${miestai[4]}, ${valstybes[0]}, ${valstybes[1]}, ${valstybes[2]}, ${valstybes[3]}, ${valstybes[4]}, ${zemynai[0]}, ${zemynai[1]}, ${zemynai[2]}, ${zemynai[3]}, ${zemynai[4]}`;
console.log(salys);