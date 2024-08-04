
const myBox = document.querySelector(".myBox");
const qBtn = document.querySelector(".qBtn");
const pBtn = document.querySelector(".pBtn");
const lBtn = document.querySelector(".lBtn");

const UpArrowBtn = document.querySelector(".UpArrowBtn");
const DownArrowBtn = document.querySelector(".DownArrowBtn");
const leftArrowBtn = document.querySelector(".leftArrowBtn");
const RightArrowBtn = document.querySelector(".RightArrowBtn");


let moveAmount = 10;
let x = 0;
let y = 0;


document.addEventListener("keydown", event => {

    event.preventDefault();
    switch (event.key) {
        case "q" : 
            myBox.textContent = `😱`;
            myBox.style.backgroundColor = `red`;
            qBtn.style.backgroundColor = `red`;
            document.body.style.backgroundColor = "red"

            break ;
        case "p":
            myBox.classList.replace("SpinViral-disabled", "SpinViral");
            myBox.textContent =`🤪`;
            myBox.style.backgroundColor =`yellow`
            pBtn.style.backgroundColor =`yellow`;
            document.body.style.backgroundColor = "yellow";
            
            break;
        case "l" :
            myBox.classList.replace("SpinViral", "SpinViral-disabled");
            lBtn.style.backgroundColor =`green`;
            document.body.style.backgroundColor = "green";
            break;
    }

    if(event.key.startsWith("Arrow")) {
        event.preventDefault();

        switch(event.key) {
            
            case "ArrowUp" :
                y -= moveAmount;
                UpArrowBtn.style.backgroundColor =`pink`;
                document.body.style.backgroundColor = "pink";
                break;
            case "ArrowDown" :
                y += moveAmount;
                DownArrowBtn.style.backgroundColor =`pink`;
                document.body.style.backgroundColor = "pink";

                break;

            case "ArrowLeft" :
                x -= moveAmount;
                leftArrowBtn.style.backgroundColor =`pink`;
                document.body.style.backgroundColor = "pink";

                break;
            case "ArrowRight" :
                x += moveAmount;
                RightArrowBtn.style.backgroundColor =`pink`;
                document.body.style.backgroundColor = "pink";

                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;


    }


})

document.addEventListener("keyup", event => {
    myBox.textContent = `😃`;
    myBox.style.backgroundColor = `hsla(0, 0%, 0%, 0.729)`;
    qBtn.style.backgroundColor = `transparent`;
    pBtn.style.backgroundColor =`transparent`;
    lBtn.style.backgroundColor =`transparent`;
    UpArrowBtn.style.backgroundColor =`transparent`;
    DownArrowBtn.style.backgroundColor =`transparent`;
    leftArrowBtn.style.backgroundColor =`transparent`;
    RightArrowBtn.style.backgroundColor =`transparent`;
    document.body.style.backgroundColor = "white";
})

