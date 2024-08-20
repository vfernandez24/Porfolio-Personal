const textarea = document.getElementById("textarea"),
    lenghtInicial = 0,
    lenght = document.getElementById("textarea-leght"),
    i = 0;

textarea.addEventListener('input', () => {
    const caracteresRestantes = 200 - textarea.value.length;
    lenght.textContent = `${caracteresRestantes}`;
});