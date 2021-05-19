//imports
import * as ui from "./ui.js";
import { lanzamiento } from "/js/lanzamiento.js";

//vars
let lanzar = document.querySelector("#lanzar"),
	reset = document.querySelector("#reset"),
	sacaste = document.querySelector(".sacaste h3"),
	acumulado = document.querySelector(".acumulado h3");

//listeners
let latn;

lanzar.addEventListener("click", () => {
	latn = lanzamiento();

	ui.pintar(latn, sacaste);
});

reset.addEventListener("click", () => {
	let boxes = [sacaste, acumulado];

	ui.reset(boxes);
});
