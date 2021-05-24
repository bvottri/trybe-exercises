//1-Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , 
//definidas no começo com os valores que serão operados. Faça programas para:

let a = 1;
let b = 2;

//Adição
console.log(a+b);
//Subtração
console.log(a-b);
//Multiplicação
console.log(a*b);
//Divisão
console.log(a/b);
//Módulo
console.log(a%b);

//2-Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

let a = 1;
let b = 2;

if (a>b) {
  console.log(a);
} else {
  console.log(b);
}

//3-Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 1;
let b = 2;
let c = 3;

if (a>b && a>c) {
  console.log(a);
} 
else if (b>a && b>c) {
  console.log(b);
} else {
  console.log (c);
}

//4-Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let valor = 1;

if (valor > 0) {
  console.log('positive');
} else if (valor < 0) {
  console.log('negative');
} else {
  console.log('zero');
}

//5-Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem 
//os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let a = 100;
let b = 40;
let c = -4;
let sum = a+b+c

if (sum==180 && a>0 && b>0 && c>0) {
  console.log(true)
} else {
  console.log(false)
}

//6-Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let piece = 'PAWN';

switch (piece.toLowerCase()) {
  case 'king':
    console.log('Qualquer direção');
    break;
  case 'queen':
    console.log('Qualquer direção');
    break;
  case 'bishop':
    console.log('Diagonais');
    break;
  case 'knight':
    console.log('L');
    break;
  case 'rook':
    console.log('Verticais e Horizontais');
    break;
  case 'pawn':
    console.log('Verticais e Diagonais');
    break;
  default:
    console.log("Erro")
}

//7-Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

let nota = 49;
let conceito = 0;

if (nota >= 90) {
  console.log(conceito = 'A');
} else if (nota >= 80) {
  console.log(conceito = 'B');
} else if (nota >= 70) {
  console.log(conceito = 'C');
} else if (nota >= 60) {
  console.log(conceito = 'D');
} else if (nota >= 50) {
  console.log(conceito = 'E');
} else if (nota < 50) {
  console.log(conceito = 'F');
} else {
  console.log('Erro');
}

//8-Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

let number1 = 0;
let number2 = 0;
let number2 = 0;

