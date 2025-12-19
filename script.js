let tentativas = 0;

function toggleMusica(idMusica, botaoClicado) {
    const musica = document.getElementById(idMusica);

    // Se a música já está tocando → pausa
    if (!musica.paused) {
        musica.pause();
        botaoClicado.innerText = "▶️ Clique e sinta esse momento";
        return;
    }

    // Pausa todas as outras músicas
    document.querySelectorAll("audio").forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });

    // Reseta todos os botões
    document.querySelectorAll(".botao-musica").forEach(botao => {
        botao.innerText = "▶️ Clique e sinta esse momento";
    });

    // Toca a música clicada
    musica.play();
    botaoClicado.innerText = "⏸️ Pause esse momento";
}

function verificarSenha() {
    const senhaDigitada = document.getElementById("senha").value;
    const senhaCorreta = "singular"; // 👈 sua senha aqui
    const erro = document.getElementById("erro");

    if (senhaDigitada === senhaCorreta) {
        document.getElementById("login").style.display = "none";
        document.getElementById("conteudo").style.display = "block";
    } else {
        tentativas++;
        erro.innerText = "Senha incorreta 💔";

        if (tentativas === 3) {
            erro.innerText = "Dica : nome de uma musica nossa";
        }

        if (tentativas === 5) {
            erro.innerText = "Última dica : musica do Luan Pereira";
        }
    }

    function criarBorboleta() {
    const borboleta = document.createElement("div");
    borboleta.classList.add("borboleta");
    borboleta.innerText = Math.random() > 0.5 ? "🦋" : "✨";


    borboleta.style.left = Math.random() * window.innerWidth + "px";
    borboleta.style.fontSize = (14 + Math.random() * 14) + "px";
    borboleta.style.animationDuration = (8 + Math.random() * 6) + "s";

    document.body.appendChild(borboleta);

    setTimeout(() => {
        borboleta.remove();
    }, 14000);
}


}



