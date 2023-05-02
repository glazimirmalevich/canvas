document.addEventListener("DOMContentLoaded", () => {
    const textArea = document.querySelector("textarea");
    const parent = document.querySelector(".parent");
    const words = document.createElement("div");
    const symbols = document.createElement("div");
    const symbolsWithoutSpaces = document.createElement("div");
    const symbolsPercent = document.createElement("div");
    let wordsCount = 0;

    parent.append(words, symbols, symbolsWithoutSpaces, symbolsPercent);
    words.innerHTML = `<input type="checkbox"><span>Количество слов: ${wordsCount}</span>`;
    symbols.innerHTML = `<input type="checkbox"><span>Количество символов: ${0}</span>`;
    symbolsWithoutSpaces.innerHTML = `<input type="checkbox"><span>Количество символов без пробела: ${0}</span>`;
    symbolsPercent.innerHTML = `<input type="checkbox"><span>Количество символов в процентном соотношении: ${0}%</span>`;
    // symbols.textContent = `Количество символов: ${numberOfWords.getSymbols()}`;
    // symbolsWithoutSpaces.textContent = `Количество символов без пробела: ${numberOfWords.getSymbolsWithoutSpaces()}`;
    // symbolsPercent.textContent = `Количество символов в процентном соотношении: ${getPercent.toFixed(2)}%`;
    textArea.addEventListener("change", (event) => {
        const numberOfWords = new Text(event.target.value);
        let getPercent = (numberOfWords.getSymbolsWithoutSpaces() / numberOfWords.getSymbols()) * 100 ;
        for(let i = 0; i < numberOfWords.getArrayOfWords().length; i++){
            wordsCount = numberOfWords.getArrayOfWords().length;
        }
        words.innerHTML = `<input type="checkbox"><span>Количество слов: ${wordsCount}</span>`;
        symbols.innerHTML = `<input type="checkbox"><span>Количество символов: ${numberOfWords.getSymbols()}</span>`;
        symbolsWithoutSpaces.innerHTML = `<input type="checkbox"><span>Количество символов без пробела: ${numberOfWords.getSymbolsWithoutSpaces()}</span>`;
        symbolsPercent.innerHTML = `<input type="checkbox"><span>Количество символов в процентном соотношении: ${getPercent.toFixed(2)}%</span>`;

    });
    parent.addEventListener("click", (event) => {
        if(event.target.checked === true){
           event.target.parentElement.lastElementChild.style.display = "none";
        }
        if(!event.target.checked === true){
           event.target.parentElement.lastElementChild.style.display = "inline";
        }
    });
    // Дан textarea. Пусть в него вводится текст. Сделайте так, чтобы по потери фокуса под текстареа вывелось сообщение о том, сколько в этом тексте слов.
    class Text {
    constructor(text){
        this._text = text;
    }
    getSymbols = () => {
        return this._text.length;
    }
    getLetters = () => {
        let lettersLength = 0;
        for(let i = 0; i < this._text.length; i++){
            if(/^[a-zA-Z]+$/.test(this._text[i])){
                lettersLength++;
            }
        }
        return lettersLength;
    }
    getSpaces = () => {
        let spaces = 0;
        for(let i = 0; i < this._text.length; i++){
            if(this._text[i] === ' '){
                spaces++;
            }
        }
        return spaces;
    }
    getSymbolsWithoutSpaces = () => {
        let symbols = 0;
        for(let i = 0; i < this._text.length; i++){
            if(!(this._text[i] === ' ')){
                symbols++;
            }
        }
        return symbols;
    }
    getArrayOfWords = () => {
        let words = [];
        let arr = (this._text.trim()).split(" ");
        for(let i = 0; i < arr.length; i++){
            if(/^[a-zA-Z]+$/.test(arr[i])){
                words.push(arr[i]);
            }
        }
        return words;
    }
    getSentences = () => {
        let arr = (this._text.trim()).split(".");
        let sentences = [];
        for (let item of arr){
           if(item.length > 1){
            sentences.push(item.trim());
           }            
        }
        return sentences;
    }
}
});