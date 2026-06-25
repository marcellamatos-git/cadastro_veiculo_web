export function calcularIPVA(valorVeiculo, anoFabricacao, combustivel) {
    const anoAtual = new Date().getFullYear();
    const idadeVeiculo = anoAtual - anoFabricacao;

    if (idadeVeiculo > 20) {
        return 0;
    } else {
        let percentual;

        if (combustivel === "gasolina") {
            percentual = 0.20;
        } else if (combustivel === "etanol") {
            percentual = 0.15;
        } else if (combustivel === "bicombustivel") {
            percentual = 0.10;
        } else if (combustivel === "hibrido") {
            percentual = 0.08;
        } else if (combustivel === "eletrico") {
            percentual = 0.02;
        } else {
            percentual = 0;
        }

        return valorVeiculo * percentual;
    }
}

export function calcularSeguro(valorVeiculo) {
    return valorVeiculo * 0.10;
}