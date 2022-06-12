const colors = require("colors");
/*
Para ficar mais parecido com o exemplo do README.md do projeto, 
use a libe *colors* para colorir as mensagens.

As cores usadas no exemplo foram: red, magenta, cyan e green.

Consulte a documentação da lib em https://github.com/Marak/colors.js
*/

// TODO 1: Essa Task deve retornar uma promise e com delay de 10 segundos
const task1 = () => { 

    return new Promise (resolve => 
      setTimeout (
        () => { 
          console.log ('Terminou a Task 1 em 10 segundos'.red); 
          resolve(); 
        }
      ,10000))
  // Deve retornar a mensagem: Terminou a Task 1 em 10 segundos
};

// TODO 2: Essa Task deve retornar uma promise e com delay de 5 segundos
const task2 = () => {

  return new Promise (resolve =>
     setTimeout (
       ()=> { 
         console.log ('Terminou a Task 2 em 5 segundos'.magenta); 
         resolve();
         }
        ,5000))
  // Deve retornar a mensagem: Terminou a Task 2 em 5 segundos
};

// TODO 3: Essa Task deve retornar uma promise e com delay de 4 segundos
const task3 = () => {

  return new Promise (resolve =>
     setTimeout (
       ()=> { 
         console.log ('Terminou a Task 3 em 4 segundos'.cyan);
         resolve() 
        }
        ,4000))
  // Deve retornar a mensagem: Terminou a Task 3 em 4 segundos
};

// TODO 4: Essa Task deve retornar uma promise e com delay de 4 segundos
const task4 = () => {

  return new Promise (resolve =>
     setTimeout (
       ()=> { 
         console.log ('Terminou a Task 4 em 4 segundos'.green); 
         resolve() 
        }
        ,4000))
  // Deve retornar a mensagem: Terminou a Task 4 em 4 segundos
};

module.exports = { task1, task2, task3, task4 };
