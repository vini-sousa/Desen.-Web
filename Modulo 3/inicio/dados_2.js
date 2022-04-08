/* A declaração de váriaveis pode ser feita usando 
'var' ou 'let'. A diferença é que 'var' é usado para declarar
uma váriavel global e o 'let' é usado pra váriavel local */

let preco = 19.90;
let desconto = 0.4;

console.log(19.9 * 0.6);

let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto);

let nome = "Caderno"; // String (Texto) -> Sequência de símbolos
let categoria = "Papelaria";
console.log("Produto: " + nome 
+ ", Categoria: " + categoria
+ ", Preço: " + preco
+ ", Desconto: " + desconto);