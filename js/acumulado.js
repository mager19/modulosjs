export default function acumulado(value) {
	let acumuladoContainer = document.querySelector(".acumulado h3");

	let acumulado = acumuladoContainer.textContent;
	let acumuladoNumber = parseInt(acumulado, 10);

	acumuladoContainer.textContent = acumuladoNumber + value;
}
