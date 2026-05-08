function convertToRoman(num){
  //Duas arrays do mesmo tamanho , uma para os números e outra para os símbolos correspondentes
  const Numeros = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const Simbolos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  //variavel que ira armazenar os simbolos dos numeros selecionados
  let resultado = "";

    //Loop para percorer os dois arrays já que possuem o mesmo tamanho e um elemento corresponde o outro 
    for(let i = 0; i < Numeros.length; i++){
      
      //Enquanto o num for maior que algum número do array, ele vai somar o simbolo do número que ele é maior, em seguida subtrair o numuero do array do num para que ele possa diminuir e ir para outra casa no array até chegar a num < 1.
      while(num >= Numeros[i]){
        resultado += Simbolos[i];
        num -= Numeros[i];
      }
    }

    return resultado;
}


//teste
console.log(convertToRoman(3));
console.log(convertToRoman(12));
console.log(convertToRoman(83));