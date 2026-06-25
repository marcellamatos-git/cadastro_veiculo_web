import { calcularIPVA, calcularSeguro } from "./script_calculos.js";

const form = document.querySelector("#formVeiculo");
const lista = document.querySelector("#listaVeiculos");

let veiculos = [];

form.addEventListener("submit", (evt) => {

    evt.preventDefault();

    const marca = document.querySelector("#marca").value;
    const modelo = document.querySelector("#modelo").value;
    const placa = document.querySelector("#placa").value;
    const ano = Number (document.querySelector("#ano").value);
    const valor = Number (document.querySelector("#valor").value);

    const combustivel =
        document.querySelector('input[name="combustivel"]:checked').value;

    const veiculo = {
        marca,
        modelo,
        placa,
        ano,
        valor,
        combustivel
    };

    veiculos.push(veiculo);

    listarVeiculos();

    form.reset();
});

function listarVeiculos(){

    const anoAtual = new Date().getFullYear();

    lista.innerHTML = veiculos.map((veiculo) => {

        const idade = anoAtual - veiculo.ano;

        const ipva = calcularIPVA(veiculo.valor);
        const seguro = calcularSeguro(veiculo.valor);
        const licenciamento = 200;

        const valorFinal = ipva + seguro + licenciamento;

        return `
            <div class="card">

                <h3>${veiculo.modelo}</h3>

                Marca: ${veiculo.marca}<br>
                Placa: ${veiculo.placa}<br>
                Idade: ${idade} anos<br>

                Seguro: R$ ${seguro.toFixed(2)}<br>
                IPVA: R$ ${ipva.toFixed(2)}<br>
                Licenciamento: R$ ${licenciamento.toFixed(2)}<br>

            
                    Valor Final: R$ ${valorFinal.toFixed(2)}<br>
                

            </div>
        `;
    })
}