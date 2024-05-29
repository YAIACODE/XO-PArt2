//Global var
let currentPlayer = 'X'; // For the player X or O and always star with X because, I like X
let moves = 0; // count the number of movements to make suer that all boxes had been selected
let gameBoard = ["","","","","","","","",""]; // draw a simple made to target the box itself automatically
let demo = document.getElementById("demo"); // Inject the message that says "Who is the winner X or O"
let Xscore = document.getElementById("Xscore"); // catch the place where the X score should increase
let Oscore = document.getElementById("Oscore"); // catch the place where the O score should increase
let over = document.getElementById("myoverLay"); // catch the overlay which activated when the game is over
let stop = document.querySelector(".message");
let Xwins = 0 ; // counter of the number of wins for X score
let Owins = 0 ; // counter of the number of wins for O score

// Function of the Game
function playGame(btn) {
    let id = btn.id-1;

    //if the boxes are ampte then lets paly the game
    if ((btn.innerText === "")&&(gameBoard[id] === "")) {
        btn.innerText = currentPlayer;
        gameBoard[id] = currentPlayer;
        console.log(gameBoard);
        moves++;

        //this is for determine 
        if(cheackWinner(currentPlayer)) {
            //alert(currentPlayer + " is wins!");
            if (currentPlayer === 'X') {
                Xwins++;
                Xscore.innerText = Xwins;
                document.getElementById('numberDisplay').style.transform = "rotateY(180deg)";
                setTimeout(function() {
                document.getElementById('numberDisplay').style.transform = "rotateY(0deg)";}, 500);

            }
            else{
                Owins++;
                Oscore.innerText = Owins;
                document.getElementById('numberDisplay2').style.transform = "rotateY(180deg)";
                setTimeout(function() {
                document.getElementById('numberDisplay2').style.transform = "rotateY(0deg)";}, 500);               
            }

            demo.innerText = currentPlayer + " is wins!";
            sayStop(Xwins, Owins);
            over.style.zIndex= "1";
            return 0;
        }

        else if(moves === 9){
            btn.innerText = currentPlayer;
            if(btn.innerText !== "" && (gameBoard[id] !== "")){
                //alert("It is Tie!!");
                demo.innerText = "It is Tie!!";
                over.style.zIndex= "1";
            }
            return 0;
        }

        else{
            currentPlayer = (currentPlayer === 'X')?'O':'X';
        }
    }
}

// Rest the Game here 
function rematchGame() {
    currentPlayer = 'X';
    moves = 0;
    gameBoard = ["","","","","","", "","","",""];

    let buttons = document.querySelectorAll(".btn-xo");
    over.style.zIndex= "0";
    buttons.forEach(btn => {btn.innerText = ""});
}


//IS win? 
function cheackWinner(player){
    console.log("I'm in is winner");
    if ((gameBoard[0] === player)&&(gameBoard[1] === player)&&(gameBoard[2] === player)||
        (gameBoard[3] === player)&&(gameBoard[4] === player)&&(gameBoard[5] === player)||
        (gameBoard[6] === player)&&(gameBoard[7] === player)&&(gameBoard[8] === player)||
        (gameBoard[0] === player)&&(gameBoard[4] === player)&&(gameBoard[8] === player)||
        (gameBoard[2] === player)&&(gameBoard[4] === player)&&(gameBoard[6] === player)||
        (gameBoard[0] === player)&&(gameBoard[3] === player)&&(gameBoard[6] === player)||
        (gameBoard[1] === player)&&(gameBoard[4] === player)&&(gameBoard[7] === player)||
        (gameBoard[2] === player)&&(gameBoard[5] === player)&&(gameBoard[8] === player)) {
            return true;
    }
    return false;
}


//Reset the whole Enter game with the score
function Reset(){
    rematchGame();
    Xwins = 0;
    Owins = 0;
    Xscore.innerText = Xwins;
    Oscore.innerText = Owins;

}

function sayStop(Xwins, Owins) {
    if ((Xwins === 5)||(Owins === 5)) {
        Reset();
        stop.style.display = "block";
    }
    else{
        return 0;
    }
}