function checkCashRegister(price, cash, cid) {
  
    //Array dos valores das moedas em centavos para trabalhar com inteiros
  const unitValues = [
    ["PENNY", 1],
    ["NICKEL", 5],
    ["DIME", 10],
    ["QUARTER", 25],
    ["ONE", 100],
    ["FIVE", 500],
    ["TEN", 1000],
    ["TWENTY", 2000],
    ["ONE HUNDRED", 10000]
  ];

  // Calculo do troco em centavos tambem mas verificando se há dinheiro disponivel
  let changeDue = (cash - price) * 100;
  let totalInCid = 0;
  
  for (let i = 0; i < cid.length; i++) {
    totalInCid += cid[i][1] * 100;
  }

  // Verificar quanto há no caixa
  if (totalInCid < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  
  if (totalInCid === changeDue) {
    return { status: "CLOSED", change: cid };
  }

  // distribuiçao do troco da maior nota a menor
  let changeResult = [];
  
  for (let i = unitValues.length - 1; i >= 0; i--) {
    let unitName = unitValues[i][0];
    let unitValue = unitValues[i][1];
    let amountInDrawer = cid[i][1] * 100; 
    let amountToGive = 0;

    // Enquanto o troco for maior que a nota e ainda tivermos a nota no caixa
    //Parecido com a lógica da questão de números romanos
    while (changeDue >= unitValue && amountInDrawer > 0) {
      changeDue -= unitValue;
      amountInDrawer -= unitValue;
      amountToGive += unitValue;
    }

    // Se usamos alguma nota deste tipo, adicionamos ao resultado
    if (amountToGive > 0) {
      changeResult.push([unitName, amountToGive / 100]);
    }
  }

  // Verificação final para ver se foi entregue o troco exato
  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: changeResult };
}

// teste

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log( checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
