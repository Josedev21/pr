document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento){
        evento.preventDefault();

        let numeroMximo = document.getElementById('numero-maximo').value;
        numeroMximo = parseInt(numeroMximo);

        let numeroAleatorio = Math.random() * numeroMximo ; 
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        if (numeroAleatorio == numeroMximo) {
            document.getElementById('resultado-sorteio-ganho').innerText = numeroAleatorio;
            document.querySelector('.resultado-ganho').style.display = 'block';
            document.querySelector('.resultado-perda').style.display = 'none';

        } else {
            document.getElementById('resultado-sorteio-perda').innerText = numeroAleatorio;
            document.querySelector('.resultado-perda').style.display = 'block';
            document.querySelector('.resultado-ganho').style.display = 'none';
        }
    })
})