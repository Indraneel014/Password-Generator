const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const password_length= 10;
const generateBtn= document.getElementById("generate-btn")
const box1= document.getElementById("password-1")
const box2= document.getElementById("password-2")

function getRandomChar(){
    const index= Math.floor(Math.random()*characters.length)
    return characters[index]
}

function generatePassword(){
    let password= ""
    for (let i=0;i< password_length; i++){

        password += getRandomChar()
    }
    return password;
}




generateBtn.addEventListener("click", function(){
    box1.textContent = generatePassword()
    box2.textContent = generatePassword()
})
