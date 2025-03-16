// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// lista para guardar los nombres
let amigos = [];

// funcion para agregar un nombre
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const lista = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");

    if (nombre === "") {
        alert("por favor, ingresa un nombre valido.");
        return;
    }

    // agregar el nombre 
    amigos.push(nombre);

    // limpiar el cuadro de texto
    input.value = "";

    // si antes se hizo un sorteo, limpiar el resultado y mostrar la lista de nuevo
    lista.style.display = "block";
    resultado.innerHTML = "";

    // actualizar la lista
    actualizarLista();
}

// funcion para actualizar la lista 
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar la lista antes de actualizar

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// funcion para sortear un amigo al azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("no hay nombres en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    // mostrar el resultado en la pantalla
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 ¡el amigo secreto es: <strong>${amigoSeleccionado}</strong>! 🎉</li>`;

    // ocultar la lista de nombres
    document.getElementById("listaAmigos").style.display = "none";
}

