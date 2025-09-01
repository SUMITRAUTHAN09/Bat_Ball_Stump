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
        resultMsg='Tie';
      }
      else if(userMove==='Bat' && computerMove==='Ball' || userMove==='Ball' && computerMove==='Stump' || userMove==='Stump' && computerMove==='Bat'){
        resultMsg='You Win';
      }
      else{
        resultMsg='you Lose';
      }
        document.querySelector(`#ComputerChoice`).value=computerMove;
        document.querySelector(`#UserChoice`).value=userMove;
        document.querySelector(`#result`).value=resultMsg;  
      }