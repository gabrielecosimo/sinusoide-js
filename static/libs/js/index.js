let ampiezzaInput = document.querySelector("[name=ampiezza]")
let frequenzaInput = document.querySelector("[name=frequenza]")
let faseInput = document.querySelector("[name=fase]")

ampiezzaInput.addEventListener("input", function (e) {
    let ampiezza = parseFloat(ampiezzaInput.value)
    console.log(`ampiezza cambiata a --> ${ampiezza}`);
})

frequenzaInput.addEventListener("input", function (e) {
    let frequenza = parseFloat(frequenzaInput.value)
    console.log(`ampiezza cambiata a --> ${frequenza}`);
})

faseInput.addEventListener("input", function (e) {
    let fase = parseFloat(faseInput.value)
    console.log(`ampiezza cambiata a --> ${fase}`);
    clearPhase()
    //inserire il reset del canvas tramite relativa funzione creata da me
})