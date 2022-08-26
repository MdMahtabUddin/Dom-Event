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

    const buttonBlack = document.getElementById('make-black-button');
    buttonBlack.onclick = function (){
        document.body.style.backgroundColor='black';
    }

    // handle with addEventListener 
    // way -1

    const buttonGoldenRod =document.getElementById('make-golder-rod');
    buttonGoldenRod.addEventListener('click',makeGolden);

    function makeGolden (){
        document.body.style.backgroundColor='goldenrod';
    }

// way -2 

const makePink =document.getElementById('make-hot-pink');
makePink.addEventListener('click', function pinkMake(){
    document.body.style.backgroundColor='hotpink';
})

// way-3 shortcut

document.getElementById('make-light-blue').addEventListener('click',function(){
    document.body.style.backgroundColor='lightblue';
})
