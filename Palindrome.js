function palindrome(str){

  //Pega a string original e primeiro com toLowerCase() transforma todos os caracteres da string em minusculos,   e com replace substitui tudo que não for entre a-z e 0-9 por '' para que por exemplo uma letra não seja acusada como diferente por ter sido escrita maiuscula
  const Limpa = str.toLowerCase().replace(/[^a-z0-9]/g,'');

  //Armazena o tamanho da string em uma variavel para poder dividir a palarva ao meio para comparação de letras
  let Tamanho = Limpa.length;

  // Laço for para percorrer a string 
  for(let i = 0; i < Tamanho/2; i++){

    //Verificação da primeira letra com a ultima, segunda letra com penultima, ...
    //caso forem diferentes a funçao ja retorna a false
    if(Limpa[i] != Limpa[Tamanho - 1 - i]){
      return false;
    }
  }

  return true;
}
console.log(palindrome("Asa"));
console.log(palindrome("Norte"));
console.log(palindrome("Subi No Onibus"));