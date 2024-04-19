let suggestion_lists = [
    
]


const form = document.querySelector("#form-inline");
const input = document.querySelector("#search-nav-menus-rooms");
// const dropDownContainer = document.getElementsByClassName("dropdown-search-lists-container")[0]; 
const dropDownContainer = document.querySelector(".dropdown-search-lists-container")
let inputLength = 0;

console.log(dropDownContainer);

form.addEventListener("input", function (e) {
    inputLength = input.value.length;
    if (inputLength > 0) {
        console.log(inputLength);
        dropDownContainer.classList.add('show');
        dropDownContainer.classList.remove('hide');
    } else if (input.value === "") {
        dropDownContainer.classList.add('hide');
        dropDownContainer.classList.remove('show');
    }
    else {
        console.log("else part is working");
    }
    console.log("input value changed");
});


form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (input.value === "") {
        alert("please enter the value")
    }
})
