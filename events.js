// PH-25.2
// way of use onClick eventHandaler -1 
function makeGreen (){
    document.body.style.backgroundColor='green';
}

// <!-- way of use onClick eventHandaler -2  -->

const blueButton = document.getElementById('make-blue-button');

//    just set the name of the function makeBlue;
blueButton.onclick =makeBlue;

    function makeBlue(){
        document.body.style.backgroundColor='blue';
    }

    // anonymous function
    // anonymous faunction means name not declare 

    let buttonBlack = document.getElementById('make-black-button');
    buttonBlack.onclick = function (){
        document.body.style.backgroundColor='black';
    }
