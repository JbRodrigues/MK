var subform = document.getElementById("form");
var submitButton = document.getElementById('submit');
let precoPorKilo = document.getElementById("c_precoPorKg")
let descontoFun = document.getElementById("c_desconto")
let valorKilos = document.getElementById("c_valorKilos")
let qtdSacas = document.getElementById("c_qtdSacas")
let valorSacasBruto = document.getElementById("c_precoSacas")
let valorFinalLiq = document.getElementById("c_ValorFinal")

subform.addEventListener("submit", (e) =>{
    e.preventDefault();
    let formDebito = document.getElementById("c_valorDebito");  //36687.69;
    var debito = formDebito.value;

    let cornPrice = document.getElementById("c_preco"); //45;
    let precoMilho = cornPrice.value

    let sacaPorKilo = precoMilho / 60;
    precoPorKilo.innerText = sacaPorKilo.toFixed(2)

    let valorADividir = sacaPorKilo - (sacaPorKilo * 0.015)
    let kgTotais = debito / valorADividir;
    let sacasTotais = kgTotais/60;
    let valorDasSacas = sacasTotais * precoMilho;
    let sacasMenosImposto = valorDasSacas - (valorDasSacas * 0.015);

    descontoFun.innerText = valorADividir.toFixed(4)
    valorKilos.innerText = kgTotais.toFixed(2)
    qtdSacas.innerText = sacasTotais.toFixed(3)
    valorSacasBruto.innerText = "R$ "+valorDasSacas.toFixed(2)
    valorFinalLiq.innerText = "R$ " + sacasMenosImposto.toFixed(2)


//retorno no console
    console.log(formDebito.value);
    console.log("milho / 60: ", sacaPorKilo);
    console.log("menos 1,5%: ", valorADividir.toFixed(4));
    console.log("Valor em Kilos para 201: ", kgTotais.toFixed(4))
    console.log("Valor em sacas: ", sacasTotais.toFixed(4))
    console.log("Valor em reais das sacas: ", valorDasSacas.toLocaleString())
    console.log("Valor final: ", sacasMenosImposto.toLocaleString())
})
