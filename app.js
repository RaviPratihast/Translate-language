var btnTranslate = document.querySelector("#btn-translate");
var txtInput= document.querySelector("#txt-input");
console.log("txt-input");
// console.log(btnTranslate);

// click event listener

btnTranslate.addEventListener("click",clickHandler())

function clickHandler()
{
    return function clickEventHandler()
    {
        console.log("clicked!");
        console.log("input",txtInput.value);
    }
}