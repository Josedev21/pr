document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento){
        evento.preventDefault();

        let numeroMximo = document.getElementById('numero-maximo').value;
        numeroMximo = parseInt(numeroMximo);

        let numeroAleatorio = Math.random() * numeroMximo ; 
        numeroAleatorio = Math.floor(numeroAleatorio);

        if (numeroAleatorio != numeroMximo) {
            document.getElementById('resultado-sorteio-perda').innerText = numeroAleatorio;
            document.querySelector('.resultado-perda').style.display = 'block';

        } else if (numeroAleatorio != numeroMximo) {
            document.getElementById('resultado-sorteio-ganho').innerText = numeroAleatorio;
            document.querySelector('.resultado-ganho').style.display = 'block';
        }

    })
})