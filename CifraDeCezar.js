function rot13(str) {

  //ARRAY ALFABETO  
  const Alf = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  //Variavel para armazenar os caracteres jä decodificados
  let cod = ''; 

  //Transformando a string em uma array para comparar os elementos.
  const arr = str.split('');

  //Primeiro for para percorrer o array da string
        for(let i = 0; i < arr.length; i++){
            //Declarando variavel booleana (mAIS UTILIZADO PARA IDENTIFICAR CARACTERES ESPECIAIS)
            let CharEncontrado = false;
                //LOOP para percorrer o array alfabeto 
                for(let j = 0; j < 26; j++){
                    //Se os cartacteres de coincidirem é adicionado o caractere decodificado na variavel "cod"
                    if(arr[i] === Alf[j]){
                        //Se a letra do alfabeto  estiver na primeira metade ele soma 13 no indice
                        if( j < 13){
                            cod += Alf[j + 13];
                        //se a letra do alfabeto estiver depois da primeira metade ele diminui 13 no indice.
                        } else { 
                            cod += Alf[j - 13];
                        }
                        CharEncontrado = true;
                        break;
                    }
                }
            //(IDENTIFICAÇAO DE CARACTERES ESPECIAIS) SE A LETRA NÁO ESTIVER NO ALFABETO PODE SER CARACTER ESPECIAL OU ESPAÇO, ENTÃO É ADICIONADO TAMBEM, NA VARIAVEL "COD".
            if(!CharEncontrado){
                cod += arr[i];
            }    
        }
        //retornando a palavra final decodificada
        return cod;
    }


    //TESTE
    console.log(rot13("SERR PBQR PNZC"));
    console.log(rot13("SERR CVMMN!"));
    console.log(rot13("SERR YBIR?"));
    console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));