AOS.init();

const dataDoAniversario = new Date("Mar 23, 2025 15:00:00");
const timeStampDoAniversario = dataDoAniversario.getTime();

const contagemRegressiva = setInterval(function() {
    const agora = new Date();
    const timeStampAtualizado = agora.getTime();

    const tempoAteOAniversario = timeStampDoAniversario - timeStampAtualizado;

    const diaEmMs = 1000 * 60 * 60 *24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOAniversario = Math.floor(tempoAteOAniversario / diaEmMs);
    const horasAteOAniversario = Math.floor(tempoAteOAniversario % diaEmMs / horaEmMs);
    const minutosAteOAniversario = Math.floor(tempoAteOAniversario % horaEmMs / minutoEmMs);
    const segundosAteOAniversario = Math.floor(tempoAteOAniversario % minutoEmMs / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOAniversario}d ${horasAteOAniversario}h ${minutosAteOAniversario}m e ${segundosAteOAniversario}s`;
}, 1000);