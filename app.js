var btnTranslate = document.querySelector("#btn-translate");
var txtInput= document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");  //here i have not use # to refer that is
//inner text is not working.

// var serverURL= "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" // this is tanays
//tanays server that we are using for the first step now we will use minions API servers.
var serverURL="https://api.funtranslations.com/translate/yoda.json"
// outputDiv.innerText ="RaviPratihast"
// console.log(btnTranslate);

// click event listener
function getTranslationURL(text)
{
    console.log(text);
    return serverURL+"?"+"text="+text;
}

function errorHandler(error)
{
    console.log("error occured",error);
    alert("something wrong with server! try after sometime")
}


function clickHandler()
{
    var inputText = txtInput.value; //this is my input
    // calling server for processing

    fetch(getTranslationURL(inputText))
    .then(response=>response.json())
    .then(json=>
        {   var translatedText=json.contents.translated;
            console.log(translatedText);
            outputDiv.innerText= translatedText;
        })
    .catch (errorHandler)
    //  outputDiv.innerText = "askjajja" + txtInput.value;
    // return function clickEventHandler()
    // {
    //     console.log("clicked!");


    //     // for the input in the text area to read in the sideline console.
        // console.log("input",txtInput.value);
    //    }
    console.log(inputText)
};
btnTranslate.addEventListener("click",clickHandler)