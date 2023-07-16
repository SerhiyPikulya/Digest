// Вкладений цикл
let result = '';
const length = 7;

for (let i = 1; i < length; i++) {
  
  for (let j = 0; j < i; j++) {
    result += '*';
  }
  result += '\n';
}

console.log (result);

// Мітка в циклі
first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`Third level: ${k}`);          
        }    
    }   
}

//ПІРАМІДА
//     *
//     ***
//    *****
//   *******
//  *********
// ***********
const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)
