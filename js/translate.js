console.log('translate.js conectado');

function autoTranslate() {

}

function translateEn() {
    console.log('EN');
    const newLang = 'en';
    document.documentElement.lang = newLang;
    translatePage(newLang);
}

function translateEs() {
    console.log('ES');
    const newLang = 'es';
    document.documentElement.lang = newLang;
    translatePage(newLang);
}

async function translatePage(targetLang) {
    const elements = document.body.querySelectorAll("*");
    for (const element of elements) {
        if (element.childNodes.length === 1 && element.childNodes[0].nodeType === Node.TEXT_NODE) {
            const originalText = element.textContent.trim();
            if (originalText) {
                const translatedText = await translateText(originalText, targetLang);
                element.textContent = translatedText;
            }
        }
    }
}

async function translateWithLibreTranslate(text, targetLang) {
    const url = `https://libretranslate.com/translate`;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            q: text,
            source: "auto", // Detecta automáticamente el idioma
            target: targetLang,
        }),
    });

    const data = await response.json();

    if (data.translatedText) {
        return data.translatedText;
    }

    throw new Error("Error al traducir con LibreTranslate");
}