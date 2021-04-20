import {firstNameDB, lastNameDB, _idDB} from "./database.js"

let generator = document.getElementById("generator");
generator.addEventListener("click" , clickToGenerate)

function clickToGenerate(){
  let num = document.getElementById("number").value;
  let result = JSON.stringify(generateFakeDB(num), null, 1);
  document.getElementById("loremDB").innerHTML = result;
}

document.querySelector("button").onclick = function(){
  document.querySelector("textarea").select();
  document.execCommand('copy');
}


// ############### RANDOM GENERATORS ################
function generateFirstName(){
  return firstNameDB[Math.floor(Math.random()*firstNameDB.length)]
}
function generateLastName(){
  return lastNameDB[Math.floor(Math.random()*lastNameDB.length)]
}
function generate_ID(){
  return _idDB[Math.floor(Math.random()*_idDB.length)]
}
function generateIsAdmin(){
  let is = Math.floor(Math.random()*2)
  if (is===0){
    return true
  }
  else {
    return false
  }
}
function generateEmailProvider(){
  let email = Math.floor(Math.random()*6)
  switch (email) {
    case 0:
      return `gmail.com`
      break;
    case 1:
      return `outlook.com`
      break;
    case 2:
      return `aol.com`
      break;
    case 3:
      return `yahoo.com`
      break;
    case 4:
      return `tmobile.com`
      break;
    case 5:
      return `altavista.com`
      break;
  }
  return email
}
function generatePassword(){
  let randPassword = Array(10).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz").map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
  return randPassword
}

// ############### RANDOM USER GENERATOR ################

function generateUser(){
  let newUser = {
    _id: generate_ID(),
    firstName: generateFirstName(),
    lastName: generateLastName(),
    email: "",
    password: generatePassword(),
    isAdmin: generateIsAdmin(),
    date: new Date
  }
  newUser.lastName = newUser.lastName[0].toLocaleUpperCase() + newUser.lastName.substr(1)
  newUser.email = `${newUser.firstName.toLowerCase()}.${newUser.lastName.toLowerCase()}@${generateEmailProvider()}`
  return newUser
}

// ############### RANDOM DATABASE GENERATOR ################

function generateFakeDB(num){
  let fakeDB = []
  for (let i=0; i<num; i++){
    fakeDB.push(generateUser())
  }
  return fakeDB
}



