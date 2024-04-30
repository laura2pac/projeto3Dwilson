const botoes = document.querySelectorAll(".botao");
const botoes = document.querySelectorAll(".aba-conteudo");

for(let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function (){
        for(let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-1228T23:59:59");
const tempoObjetivo2 = new Date("2024-1228T23:59:59");
const tempoObjetivo3 = new Date("2024-1228T23:59:59");
const tempoObjetivo4 = new Date("2024-1228T23:59:59");

const tempos = [
    tempoObjetivo1, empoObjetivo2, tempoObjetivo3, tempoObjetivo4
]
for (let i=0; i< contadores.length; i++){
    contadores[i].textContent = calculaTempo(tempos[i]);
}