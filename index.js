
var gameArray = ["r", "s", "p"];
var player1Point = 0
var player2Point = 0
var player1rsp = document.querySelector('#player1Img')
var player2rsp = document.querySelector('#player2Img')
var player1PointPanel = document.querySelector('#player1PointPanel')
var player2PointPanel = document.querySelector('#player2PointPanel')
var winInfoPanel1 = document.querySelector('#winGame1')
var winInfoPanel2 = document.querySelector('#winGame2')


function compAttack(arr) {
    var randomNum = Math.floor(Math.random() * arr.length);
    return arr[randomNum];

}




function startGame(e) {
    var userAttack = e.key;
    var comp = compAttack(gameArray);
    

    if(gameArray.indexOf(userAttack) ===-1){
        alert("Zehmet olmasa r s p herflerini secin");
        return;
    }

    player1rsp.src = `./img/${userAttack}.png`
    player2rsp.src = `./img/${comp}.png`

   
    if (userAttack === "r" && comp === "s"){
       console.log("User Win");
       player1Point++

       player1PointPanel.innerHTML = `Point: ${player1Point}`

       winInfoPanel1.innerHTML = 'Win'
       winInfoPanel2.innerHTML = 'Lose'
       
   }else if (userAttack === "s" && comp === "p"){ 
    console.log("User Win");
    player1Point++

    player1PointPanel.innerHTML = `Point: ${player1Point}`

       winInfoPanel1.innerHTML = 'Win'
       winInfoPanel2.innerHTML = 'Lose'
       
  
    
  }else if(userAttack === "p" && comp === "r"){
    console.log("User Win");
    player1Point++
    player1PointPanel.innerHTML = `Point: ${player1Point}`

       winInfoPanel1.innerHTML = 'Win'
       winInfoPanel2.innerHTML = 'Lose'
  }else if (userAttack === comp) {
      console.log("Draf-Draf");

      winInfoPanel1.innerHTML = 'Draf'
      winInfoPanel2.innerHTML = 'Draf'

  }else{
      console.log("Comp Win");
      player2Point++
      player2PointPanel.innerHTML = `Point: ${player2Point}`

      winInfoPanel1.innerHTML = 'Lose'
       winInfoPanel2.innerHTML = 'Win'
  }


 
 console.log("user",userAttack);
 console.log("comp", comp);
}
 window.onkeydown = startGame;