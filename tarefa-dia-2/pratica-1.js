var name = String;
var email = String;
var profissao = String;
var idade = Number;
var sonho_de_conhecer = String;

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question('Digite o nome: ', function (nome) {
rl.question('Digite o e-mail: ', function (email) {
rl.question('Digite a profissão: ', function (profissao) {
rl.question('Digite a idade: ', function (idade) {
rl.question('Digite o lugar onde quer conhecer: ', function (sonho_de_conhecer) {
    console.log(`Olá, ${nome}! Somos aqui da agência de turismo Viagem dos Sonhos. Estamos te escrevendo este email, pois acabamos de confirmar as compras das passagens aéreas para ${sonho_de_conhecer}. Confirma pra gente alguns dados? A sua idade é ${idade}, você é ${profissao} e o seu email é ${email}? Ficamos no aguardo. Muito obrigado e boa viagem! :D`)
    rl.close();
});
});
});
});
});
console.log()