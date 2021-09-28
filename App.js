var btnTranslate =document.querySelector("#btn-translate");
var textInput =document.querySelector("#text-input");
var outputDiv =document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"


function TranslationURL(input){
    return serverURL + "?text=" +input
}

function ErrorHandler(error){
    console.log("Sorry! There is some Error.",error);
    alert("There is Something wrong with Server ! Please, Try again after some time.")
}

function clickHandler(){
    var inputText=textInput.value ;

    fetch(TranslationURL(inputText))
    .then (response=>response.json())
    .then(json => {
        var translatedText =json.contents.translated;
        outputDiv.innerText =translatedText;

    }
    )
    .catch(ErrorHandler)
};

btnTranslate.addEventListener("click",clickHandler)