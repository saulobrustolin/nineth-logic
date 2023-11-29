// IDs: inData, inValor, btCalcular, outLimite, outValor

// Pagamento com desconto é para pagamento em até 90 dias após a infração (20% de desconto)
// ano/mês/dia

function Calcular(){
    var inData = document.getElementById("inData");
    var inValor = document.getElementById("inValor");
    var valor = inValor.value;

    var outLimite = document.getElementById("outLimite");
    var outValor = document.getElementById("outValor");

    var dataSelecionada = new Date(inData.value);
    var dataVencimento = new Date(dataSelecionada);

    // Adicionando 90 dias à data de vencimento
    dataVencimento.setDate(dataSelecionada.getDate() + 90);

    outLimite.textContent = "Data limite para o pagamento com desconto: " + dataVencimento.toLocaleDateString();

    outValor.textContent = "Valor com desconto: R$" + (valor*0.8).toFixed(2);
}

var calcular = document.getElementById("btCalcular");
calcular.addEventListener("click", Calcular);