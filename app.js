let amigos = []; // Inicializamos el array vacío

function agregarAmigo() {
    let nombreIngresado = document.getElementById('amigo').value;

    if (nombreIngresado.trim() === '') {
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(nombreIngresado);
        document.getElementById('amigo').value = ''; // Limpiamos el campo de entrada

        // Actualizar la lista en el HTML
        actualizarListaAmigos();
    }
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de actualizar

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay amigos disponibles para sortear.');
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    document.getElementById('resultado').innerHTML = `El amigo secreto es: ${amigoSorteado}`;
}