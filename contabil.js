console.log("TESTE")
let debito = 36687.69;
let precoMilho = 45;
let sacaPorKilo = precoMilho/60;
let valorADividir = sacaPorKilo - (sacaPorKilo * 0.015)
let kgTotais = debito / valorADividir;
let sacasTotais = kgTotais/60;
let valorDasSacas = sacasTotais * precoMilho;
let sacasMenosImposto = valorDasSacas - (valorDasSacas * 0.015)


console.log("milho / 60: ", sacaPorKilo);
console.log("menos 1,5%: ", valorADividir);
console.log("Valor em Kilos para 201: ", kgTotais)
console.log("Valor em sacas: ", sacasTotais)
console.log("Valor em reais das sacas: ", valorDasSacas)
console.log("Valor final: ", sacasMenosImposto)
