const dieRolls =[]
let position = 0
let position0 = 0
let position1 = 0
const rollButton = document.querySelector("#roll-Button")
const numDice = document.querySelector("#num-Dice")
const showRolls = document.querySelector("#Show-All-Button")
const allRolls = document.querySelector("#all-Rolls")




    rollButton.addEventListener("click" , function(){
   let userinput = numDice.value
    while (position < userinput){
    let m = Math.floor(Math.random() * 6) +1
    dieRolls.push(m)
    position +=1 
    }

    let sum =0 
    while(position0 < dieRolls.length) {
        sum += dieRolls[position0]
        position0 += 1
    } 
    console.log(sum)
    document.getElementById("Total").innerHTML = "The sum of all rolls is " + sum
    console.log(dieRolls)
})

 showRolls.addEventListener("click" , function(){  
    while (  position1< dieRolls.length) {
    const newDiceString = '<li class="dice">' + dieRolls[position1] + "</li>";
    allRolls.innerHTML += newDiceString
        
    

    position1 +=1 
    }
    
    
   


})


