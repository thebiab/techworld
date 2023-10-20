// ------------------------------------------------------ contador de vivistas d apagina--------------------------------------------------------------

// Recupera o número de visitas ou define como 0 se não existir
let contador = parseInt(localStorage.getItem('visitas')) || 0;

// Atualiza a contagem de visitas na página
function atualizarContagem() {
    document.getElementById("contador").textContent = contador;
}

// aumenta o contador de visitas
function contarVisitas() {
    contador++;
    localStorage.setItem('visitas', contador); // guarad o número de visitas 
    atualizarContagem();
}

// zera o contador de visitas
function zerarContagem() {
    contador = 0;
    localStorage.setItem('visitas', contador); // Reseta o número de visitas 
    atualizarContagem();
}

// atualiza a contagem quando a página carrega
window.onload = function() {
    contarVisitas();
};

// ------------------------------------------------------ contato --------------------------------------------------------------
function Enviar() {
    var Nome = document.getElementById("Nome");

    if (Nome.value != "") {
        alert('Sua mensagem foi enviada com sucesso!')
    }
}

// ------------------------------------------------------ testes --------------------------------------------------------------
const editButton = document.getElementById("edit-button")

editButton.addEventListener("click", () => {
    alert("Cliquei no botão de editar perfil!");
});

