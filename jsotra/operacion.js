export default function operacio(value, type, actual) {
	let result;
	if (type == "suma") {
		result = parseInt(actual) + value;
	} else {
		result = parseInt(actual) - value;
		if (result < 0) {
			alert("se paso perdio");
		}
	}

	return result;
}
