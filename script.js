function mudaImagem() {
        const imagem = document.getElementById("imagem1").src;

        if (imagem.includes("Lamp1.png")) {
                document.getElementById("imagem1").src = "Lamp2.png";
        } else {
                document.getElementById("imagem1").src = "Lamp1.png";
        }
}