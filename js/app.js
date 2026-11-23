const botaoAbrir = document.getElementById("btn-abrir");
const botaoCapitulos = document.getElementById("btn-capitulos")

botaoAbrir.addEventListener("click", (evento) => {
evento.preventDefault();
console.log(Abrir livro!);
});

botaoCapitulos.addEventListener("click", (evento) => {
    evento.preventDefault();
    console.log("Ver capítulos!")
});