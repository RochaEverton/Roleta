let numerosSorteados = [];

function sortearNumero() {
    const buttonSortear = document.getElementById('buttonSortear');
    buttonSortear.disabled = true;

    let contador = 3;
    const resultadoDiv = document.getElementById('resultado');
    const listaDiv = document.getElementById('listaNumeros');

    const intervalo = setInterval(() => {
        if (contador > 0) {
            resultadoDiv.textContent = contador;
        } else {
            clearInterval(intervalo);
            const numero = Math.floor(Math.random() * 100) + 1;
            numerosSorteados.push(numero);
            listaDiv.textContent = `Números Sorteados: ${numerosSorteados.join(' | ')}`;
            resultadoDiv.innerHTML = numero;

            setTimeout(() => {
                buttonSortear.disabled = false;
            }, 10000);
        }
        contador--;
    }, 1000);
}

function zerarLista() {
    numerosSorteados = [];
    document.getElementById('listaNumeros').textContent = '';
}
