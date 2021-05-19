function pintar(value, container) {
	container.textContent = value;
}

function reset(boxes) {
	boxes.forEach((element) => {
		element.textContent = "0";
	});
}

export { pintar, reset };
