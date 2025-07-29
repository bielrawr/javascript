const calcularTempoRestante = (dataFutura) => {
    const agora = new Date().getTime();
    const diferencaDeDatas = new Date(dataFutura).getTime() - agora;
    const dias = Math.floor(diferencaDeDatas / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencaDeDatas % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencaDeDatas % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencaDeDatas % (1000 * 60)) / 1000);

    return { dias, horas, minutos, segundos };
    
}

const atualizarTemporizador = () => {
    const dataFutura = new Date("2025-12-31T23:59:59").getTime();
    const tempoRestante = calcularTempoRestante(dataFutura);

    document.getElementById("dias").innerText = ` ${tempoRestante.dias} Dias`;
    document.getElementById("horas").innerText = ` ${tempoRestante.horas} Horas`;
    document.getElementById("minutos").innerText = ` ${tempoRestante.minutos} Minutos`;
    document.getElementById("segundos").innerText = ` ${tempoRestante.segundos} Segundos`;
}

setInterval(atualizarTemporizador, 1000);