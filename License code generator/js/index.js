
function generate() {
let name=document.getElementById("name").value
var storedValue=""
for(let i=0; i<name.length;i++){
    storedValue+=name.charCodeAt(i)
}
let dob=document.getElementById("dob").value
let newDob=dob.replaceAll('-', '')

// Add 22092022 to the ASCII code
let newName=22092022 +parseInt( storedValue)

// Add 25092022 to DOB
let birth=25092022 + newDob
//  Show your result like B result + C as code

document.getElementById("result").textContent=newName + birth
// console.log(birth + newName)
}



  
