/*
    //Challenges
    1. Player Will Loose his Entire current Score if he rolls two sixes in a row.
    2. Take Winning Score From The User.
    3. Place Two Dice in the UI.
*/
var scores, roundscores, activeplayer,gameplaying, prev;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gameplaying){
        //1. Random Number
        var dice1 = Math.floor(Math.random()*6) + 1;
        var dice2 = Math.floor(Math.random()*6) + 1;


        //2. Display the Result
        document.getElementById('dice1').style.display = 'block';
        document.getElementById('dice2').style.display = 'block';

        
        document.getElementById('dice1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice2').src = 'dice-' + dice2 + '.png';


        //3. Update the Round Score if the rolled number was not 1
        /*if(dice > 1){
            //Add Score
            if(prev == 6 && dice == 6){
                scores[activeplayer] = 0;
                document.querySelector('#score-' + activeplayer).textContent = '0';
                nextPlayer();
            }
            else{
                roundscore += dice;
                document.querySelector('#current-' + activeplayer).textContent = roundscore;
            }
            prev = dice;

        }*/
        if(dice1 !== 1 && dice2 !== 1){
            //Add Score
            roundscore += dice1 + dice2;
            document.querySelector('#current-' + activeplayer).textContent = roundscore;

        }

        else{
            
            nextPlayer();
        }
    }
});   


document.querySelector('.btn-hold').addEventListener('click', function() {

    //Add Current Score to Global Score
    if(gameplaying){
        scores[activeplayer] += roundscore;

        //Update UI
        document.querySelector('#score-' + activeplayer).textContent = scores[activeplayer];

        var input = document.querySelector('.Winning-Score').value
        var W_Score;

        if(input){
            W_Score = input;
        }
        else{
            W_Score = 100;
        }

        //Check if player won the game 
        if(scores[activeplayer] >= W_Score){
            document.querySelector('#name-' + activeplayer).textContent = "Winner!";
            document.getElementById('dice1').style.display = 'none';
            document.getElementById('dice2').style.display = 'none';

            document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active');
            gameplaying = false;
            //activeplayer = 3;
        }
        else{
        //Next Player
        nextPlayer();
        }
    }

});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer(){
    //Next Player's Turn
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
    roundscore = 0;
    prev = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

   //document.querySelector('.player-' + (activeplayer+1)%2 + '-panel').classList.remove('active');
    //document.querySelector('.player-' + activeplayer + '-panel').classList.add('active');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice1').style.display = 'none';
    document.getElementById('dice2').style.display = 'none';

}

function init(){

    scores = [0,0];
    roundscore = 0;
    activeplayer = 0;
    prev = 0;
    curr = 0;
    gameplaying = true;

    document.getElementById('dice1').style.display = 'none';
    document.getElementById('dice2').style.display = 'none';


    //Initializing the Scores

    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');




}
