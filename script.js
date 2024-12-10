const coin = document.querySelector('.coin');
const result = document.querySelector('.result');

coin.addEventListener('click', () => {
    coin.classList.add('rotate');

    setTimeout(() => {
        coin.classList.remove('rotate');

        const random = Math.random();
        const resultText = random < 0.5 ? 'Cara' : 'Coroa';
        result.textContent = resultText;

        // Mostrar a face correspondente
        coin.style.transform = random < 0.5 ? 'rotateY(0deg)' : 'rotateY(180deg)';
    }, 4000);
});