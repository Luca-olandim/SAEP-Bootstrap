function redirecionar(){
    if (document.getElementById("estudante").checked) {
        window.location.href = "pagina_estudante.html";
    } else if (document.getElementById("bibliotecaria").checked) {
        window.location.href = "pagina_bibliotecaria.html";
    } else {
        alert("Selecione uma das opções!");
    }    
}