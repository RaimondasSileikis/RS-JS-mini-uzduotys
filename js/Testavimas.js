const a = 1;
const b = 5;
const uzduotis1 = sumavimas(a, b);

function sumavimas(nuo, iki) {
    
    let suma = 0;
    for (let i = nuo; i <= iki; i++) {
         suma += i
    }
   return suma
}
const atsakymas1 = sumavimas(uzduotis1);
console.log(atsakymas1);
