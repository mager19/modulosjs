import operacion from "./operacion.js";

function ui(value, containers, type) {
	containers.forEach((element) => {
		if (element.type == "lanzamiento") {
			element.container.textContent = value;
		} else {
			let result = operacion(value, element.type, element.actual);
			element.container.textContent = result;
		}
	});
}

export { ui };
