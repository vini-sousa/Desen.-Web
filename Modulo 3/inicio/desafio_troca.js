/* Depois da troca o valor de 'a' será o valor de 'b'
e o valor de 'b' será o valor de 'a'. */

let a = 7;
let b = 94;

let temp = a;
a = b;
b = temp;

console.log("O valor de A trocado é:", a);
console.log("O valor de B trocado é:", b);

/* Segundo metódo

[a, b] = [b, a];

console.log("O valor de A trocado é:", a);
console.log("O valor de B trocado é:", b); */