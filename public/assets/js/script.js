function somarContasAPagar() {
	const descricao1 = document.getElementById("descricao-pagar-1").value;
	const valor1 =
		parseFloat(document.getElementById("valor-pagar-1").value) || 0;
	const descricao2 = document.getElementById("descricao-pagar-2").value;
	const valor2 =
		parseFloat(document.getElementById("valor-pagar-2").value) || 0;
	const total = valor1 + valor2;
	document.getElementById("total-pagar").innerText = total;

	const listaPagar = document.getElementById("lista-pagar");
	listaPagar.innerHTML = `
        <li>${descricao1}: R$ ${valor1.toFixed(2)}</li>
        <li>${descricao2}: R$ ${valor2.toFixed(2)}</li>
    `;
}

function somarContasAReceber() {
	const descricao1 = document.getElementById("descricao-receber-1").value;
	const valor1 =
		parseFloat(document.getElementById("valor-receber-1").value) || 0;
	const descricao2 = document.getElementById("descricao-receber-2").value;
	const valor2 =
		parseFloat(document.getElementById("valor-receber-2").value) || 0;
	const total = valor1 + valor2;
	document.getElementById("total-receber").innerText = total;

	const listaReceber = document.getElementById("lista-receber");
	listaReceber.innerHTML = `
        <li>${descricao1}: R$ ${valor1.toFixed(2)}</li>
        <li>${descricao2}: R$ ${valor2.toFixed(2)}</li>
    `;
}
