let fullName = "Cleo de Jesus"

console.log(fullName.split(" "))

let arrayString = fullName.split(" ")

console.table(arrayString)

let arrayCount = arrayString.length
console.log(arrayCount);

let name = arrayString[0]
let lastName = arrayString[arrayCount - 1]

function Welcome(fullName){
 let arrayString = fullName.split(" ")
 let firstName = arrayString[0]
 let lastName = arrayString[arrayString.length - 1]
    console.log(`Bem-vindo ${firstName} ${lastName}`);
}

Welcome("Cleo de Jesus")
Welcome("João Silva")
Welcome("Maria Oliveira")
Welcome("Ana Souza")
Welcome("Carlos Pereira")
// fullName()

// function fullName(name) {
//     console.log(`Bem-vindo ${name}`);
// }

// fullName("Cleo de Jesus") 

// function name (params) {
    
// }

// function Welcome() {
//     console.log("Hello World! dentro da função" );
// }

// Welcome()
    
// function WelcomeComParams(name) {
//     console.log(`Welcome ${name}`);
// }

// WelcomeComParams("Chocolate") 
