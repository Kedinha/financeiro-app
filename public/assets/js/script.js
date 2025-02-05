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

function gerarPDF() {
	const {jsPDF} = window.jspdf;
	const doc = new jsPDF();

	doc.text("Lançamento de Contas a Pagar", 10, 10);
	const descricaoPagar1 = document.getElementById("descricao-pagar-1").value;
	const valorPagar1 =
		parseFloat(document.getElementById("valor-pagar-1").value) || 0;
	const descricaoPagar2 = document.getElementById("descricao-pagar-2").value;
	const valorPagar2 =
		parseFloat(document.getElementById("valor-pagar-2").value) || 0;
	doc.text(`1. ${descricaoPagar1}: R$ ${valorPagar1.toFixed(2)}`, 10, 20);
	doc.text(`2. ${descricaoPagar2}: R$ ${valorPagar2.toFixed(2)}`, 10, 30);
	doc.text(
		`Total Contas a Pagar: R$ ${(valorPagar1 + valorPagar2).toFixed(2)}`,
		10,
		40
	);

	doc.text("Contas a Receber", 10, 60);
	const descricaoReceber1 = document.getElementById(
		"descricao-receber-1"
	).value;
	const valorReceber1 =
		parseFloat(document.getElementById("valor-receber-1").value) || 0;
	const descricaoReceber2 = document.getElementById(
		"descricao-receber-2"
	).value;
	const valorReceber2 =
		parseFloat(document.getElementById("valor-receber-2").value) || 0;
	doc.text(`1. ${descricaoReceber1}: R$ ${valorReceber1.toFixed(2)}`, 10, 70);
	doc.text(`2. ${descricaoReceber2}: R$ ${valorReceber2.toFixed(2)}`, 10, 80);
	doc.text(
		`Total Contas a Receber: R$ ${(valorReceber1 + valorReceber2).toFixed(2)}`,
		10,
		90
	);

	doc.save("financeiro.pdf");
}
