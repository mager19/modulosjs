//imports
import lanzarDado from "./lanzar.js";
import { ui } from "./ui.js";

//variables
let lanzar = document.querySelector("#lanzar"),
	reset = document.querySelector("#reset"),
	sacado = document.querySelector(".lanzamiento h3"),
	acumulado = document.querySelector(".acumulado h3"),
	restante = document.querySelector(".restante h3");

//listeners
lanzar.addEventListener("click", () => {
	let valor = lanzarDado();

	let containers = [
		{
			container: sacado,
			type: "lanzamiento",
		},
		{
			container: acumulado,
			type: "suma",
			actual: acumulado.textContent,
		},
		{
			container: restante,
			type: "resta",
			actual: restante.textContent,
		},
	];

	ui(valor, containers);
});

reset.addEventListener("click", () => {
	sacado.textContent = 0;
	acumulado.textContent = 0;
	restante.textContent = 50;
});
