function rotateWords() {
    const words = ['JavaScript', 'Web Sites', 'Mobile Applications', 'ReactJS', 'Elixir', 'NodeJS', 'Scala'];
    wordSpan.classList.add('rotate');
    wordSpan.innerHTML = words[Math.floor(Math.random() * words.length)];
    setTimeout(function() {
        wordSpan.classList.remove('rotate');
    }, 1000);
}

const wordSpan = document.querySelector('.word');
setInterval(rotateWords, 5000);