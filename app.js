// Array para almacenar la lista de amigos.
let amigos = [];

function agregarAmigo() {
    const inputNombre = document.getElementById('amigo');
    const nombre = inputNombre.value.trim(); // .trim() para eliminar espacios en blanco al inicio y final

    // Validación: Asegurarse de que se ingrese un nombre.
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return; // Detiene la ejecución de la función si el campo está vacío.
    }

    // Agregar el nombre al array.
    amigos.push(nombre);

    // Actualizar la lista visible en la pantalla.
    actualizarLista();

    // Limpiar el campo de texto y enfocar para el siguiente nombre.
    inputNombre.value = '';
    inputNombre.focus();

    return;
}

function actualizarLista() {
    const listaElemento = document.getElementById('listaAmigos');
    listaElemento.innerHTML = ''; // Limpiar la lista actual para evitar duplicados.

    // Recorrer el array de amigos y crear un elemento <li> por cada uno.
    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement('li');
        item.textContent = amigos[i];
        listaElemento.appendChild(item);
    }
}

function sortearAmigo() {
// Validación: Asegurarse de que haya al menos 2 amigos para sortear.
    if (amigos.length < 2) {
        alert('Ups, ¡debes agregar al menos dos amigos para poder realizar el sorteo!');
        return;
    }

    // Generar un índice aleatorio.
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Muestra el resultado en pantalla.
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = `¡El amigo secreto es: ${amigoSecreto}!`;
}

// Permitir agregar amigos presionando la tecla "Enter".
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});