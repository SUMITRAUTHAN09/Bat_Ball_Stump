let score={
  win:0,
  lost:0,
  tie:0,
}


function generateComputerChoice(){
    let randomNumber=Math.random()*3;
    computerChoice='';
    if (randomNumber>0 && randomNumber<=1){
       computerChoice='Bat';
       }else if(randomNumber>1 && randomNumber<=2){
       computerChoice='Ball';
       }else{
       computerChoice='Stump';
       }
       return computerChoice;
    }

    function getResult(userMove){
      let computerMove=generateComputerChoice();
      let resultMsg='';
      if(userMove=== computerMove){
        score.tie++;
        esultMsg='Tie';
      }
      else if(userMove==='Bat' && computerMove==='Ball' || userMove==='Ball' && computerMove==='Stump' || userMove==='Stump' && computerMove==='Bat'){
        score.win++;
        resultMsg='You Win';
      }
      else{
        score.lost++; 
        resultMsg='you Lose';
      }
        document.querySelector(`#ComputerChoice`).value=computerMove;
        document.querySelector(`#UserChoice`).value=userMove;
        document.querySelector(`#result`).value=resultMsg;  
        document.querySelector(`#score`).value=`win: ${score.win} lost: ${score.lost} tie: ${score.tie}`;
        console.log(score);
      }
    
    function reset(){
      score.win=0;
      score.lost=0;
      score.tie=0;
      document.querySelector(`#ComputerChoice`).value='';
      document.querySelector(`#UserChoice`).value='';
      document.querySelector(`#result`).value='';  
      document.querySelector(`#score`).value=`win: ${score.win} lost: ${score.lost} tie: ${score.tie}`;
    }
