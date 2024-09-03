let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-Btn");
let newGameBtn = document.querySelector("#new-btn");
let rsltSection = document.querySelector(".rslt-section");
let rslt = document.querySelector("#rslt");

let turn0 = true;  //playerX, player0
let count = 0;      //to track the draw between the players

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

//function to reset the game
//This function triggers when New Game button is pressed or Reset Game button is pressed.
const resetGame = () => {           //this fuction means if there was first/initial turn of 0 then again make it 0 after the reset
    turn0 = true;
    count = 0;                  //count 0 for draw
    enableBoxes();                  //this function enbles the disabled buttons after the starting of new game
    rsltSection.classList.add("hide");         //this means that after reset of the game it again hides the result section
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {           //adding event listener on the game button so that each button click is recorded
        if(turn0){      //Player 0 turn
            box.innerText = "0";
            box.style.color = "#710000";
            turn0 = false;      //after the 0s turn, the condition becomes false and it jumps to else part
        }else{          //Player X turn
            box.innerText = "X";
            box.style.color = "blue";
            turn0 = true;       // after the Xs turn, the condition become false and it jumps to if part
        }
        box.disabled = true;    //if anyone plays in the box then that box is disabled so that we can't play in it again.
        count++;            //draw condition part

        let isWinner = checkWinner();      //this function checks for the winner
        
        if (count === 9 && !isWinner){         //if count is 9 or not a winner then call the fuction "gameDraw"
            gameDraw();            //function call for game draw
        }
    });
});

//function for draw conditons
const gameDraw = () => {
    rslt.innerText = `Oops! it's a Draw, Try Again`;        //this line prints the draw
    rsltSection.classList.remove("hide");               //this means that after reset of the game it again hides the result section
    disableBoxes();                 //it disables/restricts the button pressing after the draw 
};

//fuction to disable remaining buttons of the game after, anyone winning
const disableBoxes = () => {
    for(let box of boxes) {         //for all boxes i.e selecting all the boxes
        box.disabled = true;        //disable the boxes is true i.e. it restricts the button pressing after the win 
    }
};

//fuction to enable buttons of the game i.e. after the button press of new game 
const enableBoxes = () => {
    for(let box of boxes) {         //for all boxes i.e selecting all the boxes
        box.disabled = false;        //disable the boxes is false i.e. when new game starts it again enables the button pressing
        box.innerText = "";           //this means after the resetting the game, remove all the past values from the boxes/buttons
        box.style.backgroundColor = ""; // Reset background color
    }
};

//function to show the winner
const showWinner = (winner, winningPattern) => {
    rslt.innerHTML = `Congratulations! ${winner} is the Winner`;     //this line prints the winner 
    rsltSection.classList.remove("hide");              //As we have hidden the result section in CSS, here we are removing the 'hide' property using JS, after the win so that the result is visible
    
    // Highlighting the winning boxes
    winningPattern.forEach(index => {
        boxes[index].style.backgroundColor = "#49d448";
    });

    disableBoxes();                     //here we are calling the disable box function
};

//function to check the winner
const checkWinner = () => {
    for (let pattern of winPatterns){       //here we are finding patterns of win from winPattern
        let pos1Val = boxes[pattern[0]].innerText;          //using these 3 line we are accesing the input pattern
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if ( pos1Val != "" && pos2Val != "" && pos3Val != ""){          //in these lines we are comparing for same value of positons to check winner
            if (pos1Val  === pos2Val && pos2Val  === pos3Val){
                showWinner(pos1Val, pattern);                   //function for showing winner & Pass the winning pattern
                return true;
            }
        }
    }
};

//the function 'resetGame' triggers when New Game button is pressed or Reset Game button is pressed.
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);