let ampiezzaInput = document.querySelector("[name=ampiezza]");
let frequenzaInput = document.querySelector("[name=frequenza]");
let faseInput = document.querySelector("[name=fase]");

ampiezzaInput.addEventListener("input", function (e) {
	ampiezza = parseFloat(ampiezzaInput.value);
	console.log(`ampiezza cambiata a --> ${ampiezza}`);
});

frequenzaInput.addEventListener("input", function (e) {
	frequenza = parseFloat(frequenzaInput.value);
	console.log(`frequenza cambiata a --> ${frequenza}`);
});

faseInput.addEventListener("input", function (e) {
	clearPhase();
	fase = parseFloat(faseInput.value);
	console.log(`fase cambiata a --> ${fase}`);
	
});
