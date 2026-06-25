import { calcularIPVA, calcularSeguro } from "./script_calculos.js";

const form = document.getElementById("formVeiculo");
const lista = document.getElementById("listaVeiculos");

let veiculos = [];

form.addEventListener("submit", function(event){

    event.preventDefault();

    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const placa = document.getElementById("placa").value;
    const ano = Number(document.getElementById("ano").value);
    const valor = Number(document.getElementById("valor").value);

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

    lista.innerHTML = "";

    veiculos.forEach((veiculo)=>{

        const anoAtual = new Date().getFullYear();

        const idade = anoAtual - veiculo.ano;

        const ipva = calcularIPVA(veiculo.valor);

        const seguro = calcularSeguro(veiculo.valor);

        const licenciamento = 200;

        const valorFinal =
            ipva +
            seguro +
            licenciamento;

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <h3>${veiculo.modelo}</h3>

            <p><strong>Marca:</strong> ${veiculo.marca}</p>

            <p><strong>Placa:</strong> ${veiculo.placa}</p>

            <p><strong>Idade:</strong> ${idade} anos</p>

            <p><strong>Seguro:</strong>
                R$ ${seguro.toFixed(2)}
            </p>

            <p><strong>IPVA:</strong>
                R$ ${ipva.toFixed(2)}
            </p>

            <p><strong>Licenciamento:</strong>
                R$ ${licenciamento.toFixed(2)}
            </p>

            <p><strong>Valor Final:</strong>
                R$ ${valorFinal.toFixed(2)}
            </p>
        `;

        lista.appendChild(card);
    });
}