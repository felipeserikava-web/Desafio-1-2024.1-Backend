function telephoneCheck(str){

//Exlpicação de cada termo da expressão regular:

// (1\s?)? : O número 1 quer dizer o código do EUA, "\s?" é o espaço opcional, e o "?" no final quer idzer que  escrever o código do país é opcional.

// (\ (\d{3}\) | d{3}):  (\d{3}\) quer dizer que o usuário pode adicionar 3 digitos de numeros de 0-9 dentro do parenteses ou 3 digitos de 0-9 sem parenteses.

//Separador [\s\-]? : Dentro dos [ ] diz para aceitar todos os elemnetos que estiverem dentro dos colchetes, "\s\-" significa "espaços" ou "hífens", e o "?" significa opcional.

// /d{3}[\s\-]? : é a repetiçao do segundo e terceiro termo, digitar 3 números entre 0-9 e tornando opcional o uso de hífem ou espaço.

// \d{4}$ : para digitar os ultimos 4 digitos do numero e o $ finaliza a string neste ponto

const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

// .test() verifica se a string segue estes resquisitos do regex
return regex.test(str);

}

//teste

console.log(telephoneCheck("555555"));
console.log(telephoneCheck("1 555-555-5555"));