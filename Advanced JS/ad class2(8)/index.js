const hero = {
   element: "hero",
   name: "Hero",
   avatar: "images/hero.jpeg",
   score: "60",
   diceCount: 3
}
const villian={
   element:"villian",
   name:"villian",
   avatar:"images/villian.jpeg",
   score:"10",
   diceCount:1
}
function getDiceRollArray(diceCount){
   let newDiceRolls=[]
   for(let i=0;i<diceCount;i++){
      newDiceRolls[i]=Math.floor(Math.random()*6)+1
   }
   return newDiceRolls
}

getDiceRollArray(3)

function getDiceHtml(diceCount){
   return getDiceRollArray(diceCount).map(function(num){
      return`<div class="dice">${num}</div>`
   }).join('')
}

function renderCharacter(data){
   const{element,name,avatar,score,diceCount}=data
   const diceHtml=getDiceHtml(diceCount)
document.getElementById(element).innerHTML=
`<div class="character-card">
<h4 class="name">${name}</h4>
<img class="avatar" src="${avatar}"/>
<p class="score">Score: <b> ${score} </b></p>
<div class="dice-container">
${diceHtml}
</div>
</div>`
}

renderCharacter(hero)
renderCharacter(villian)