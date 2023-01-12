var elScoreInput = document.querySelector("#score-input");
var elRelationshipCheckbox = document.querySelector("#relationship");
var elBtn = document.querySelector("#btn");
var elResult = document.querySelector(".result");
var elDtmForm = document.querySelector(".dtm-form")

var MINIMUM_PASS_SCORE = 106.6;
var MINIMUM_SUPER_CONTRACT_SCORE = 77;
var MAXIMUM_SCORE = 189;
var FAILURE_SCORE = 1;

elDtmForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    var scoreValue = parseFloat(elScoreInput.value, 10);

    if (scoreValue >= MINIMUM_PASS_SCORE && scoreValue < MAXIMUM_SCORE || elRelationshipCheckbox.checked) {
        elResult.classList.remove("d-none");
        elResult.classList.remove("alert-warning");
        elResult.classList.remove("alert-danger");
        elResult.classList.remove("alert-dark");
        elResult.classList.add("alert-success");
        elResult.textContent = "Tabriklaymiz"
    }   else if (scoreValue >= MINIMUM_SUPER_CONTRACT_SCORE && scoreValue < MINIMUM_PASS_SCORE) {
        elResult.classList.remove("d-none");
        elResult.classList.remove("alert-success");
        elResult.classList.remove("alert-danger");
        elResult.classList.remove("alert-dark");
        elResult.classList.add("alert-warning");
        elResult.textContent = "super kontrakt"
    }  else if (scoreValue < FAILURE_SCORE || scoreValue > MAXIMUM_SCORE) {
        elResult.classList.remove("d-none");
        elResult.classList.remove("alert-success");
        elResult.classList.remove("alert-danger");
        elResult.classList.remove("alert-warning");
        elResult.classList.add("alert-dark");
        elResult.textContent = "0 va 189 oraligidagi raqamni kiriting"
    }
    else {
        elResult.classList.remove("d-none");
        elResult.classList.remove("alert-success");
        elResult.classList.remove("alert-warning");
        elResult.classList.remove("alert-dark");
        elResult.classList.add("alert-danger");
        elResult.textContent = "Siz talabalikga tavsiya qilinmadingiz"
    }      
})
