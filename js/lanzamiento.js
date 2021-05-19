import acumulado from "/js/acumulado.js";

function lanzamiento() {
	let result = Math.floor(Math.random() * 6) + 1;

	acumulado(result);
	return result;
}

export { lanzamiento };
