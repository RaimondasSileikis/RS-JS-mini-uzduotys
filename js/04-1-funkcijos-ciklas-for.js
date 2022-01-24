// Ciklo for panaudojimas kartu su FUNKCIJA

//1. // 1.Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
    //a. 0 - 0


function sumavimas(nuo, iki) {
    
     let suma = 0;
     for (let i = nuo; i <= iki; i++) {
          suma += i
     }
    return suma
 }
 
     console.log(sumavimas(0, 0));
 
// b. 0 - 4
    console.log(sumavimas(0, 4));

// c. 0 - 100
     console.log(sumavimas(0, 100));

// d. 575 - 815
     console.log(sumavimas(575, 4815);

     // e. -50 - 50
     console.log(sumavimas(-50, 50));

     // f. -70 - 30
     console.log(sumavimas(-70, 30));

// 2, panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo: 

function keitiklis(abc) {
     let cba = '';
     for (let i = 0; i < abc.length; i++) {
         const raide = abc[abc.length - 1 - i]   
         console.log(raide);
         cba += raide
     }
     return cba
 }
 const abc = `abcdefg`;
 console.log(`${abc} -> ${keitiklis(abc)}`);

// 3. Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
    // a. 0 - 11

    // d. rezultatą pateikti tokiu formatu:
// i. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
// ii. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
// iii. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.