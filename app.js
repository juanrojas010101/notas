const note1 = document.getElementById("primera-nota");
const note2 = document.getElementById("segunda-nota");
const note3 = document.getElementById("tercera-nota");
const response = document.getElementById("response");
const calculate = document.getElementById("boton-calcular");

calculate.addEventListener("click", calculateFinalNote);

function finalNote() {
    if ((note1.value) > 5 || (note2.value) > 5 || (note3.value) > 5) {
        response.textContent = "Numero invalido"
    } else {
        return (Number(note1.value) * 0.30) + (Number(note2.value) * 0.30) + (Number(note3.value) * 0.40);
    }
}

function calculateFinalNote() {
    let final = finalNote();
    if (final > 5) {
        response
    } else if (final > 4.5 && final <= 5.0) {
        response.textContent = " Excelente";
        alert(final + " nota final");
    } else if (final >= 3.5 && final < 4.5) {
        response.textContent = " Buena";
        alert(final + " nota final");
    } else if (final >= 2.0 && final < 3.5) {
        response.textContent = "Perdiste pero puedes recuperar";
        alert(final + " nota final");
    } else {
        response.textContent = "Perdiste y debes repetir la materia";
        alert(final + " nota final");
    }
}