console.log("Access granted");

const buttom = document.querySelector("#doSomething")

const op1=0
const op2=null
operatie=null


function printButtonText(e){
    console.log(e.target.innerText)
}

       
const h2Element = document.querySelector('.display h2');

      
const cifreButtons = document.querySelectorAll('.cifra');
       
cifreButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        h2Element.textContent = this.textContent;
    });
});