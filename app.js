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
    } else if (final > 45 && final <= 50) {
        response.textContent = " Excelente";
    } else if (final >= 35 && final < 45) {
        response.textContent = " Buena";
    } else if (final >= 20 && final < 35) {
        response.textContent = "Perdiste pero puedes recuperar";
    } else {
        response.textContent = "Perdiste y debes repetir la materia";
    }
}