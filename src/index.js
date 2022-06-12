const { task1, task2, task3, task4 } = require("./tasks");

const synchronousExecution = async () => {
  console.log ('sincrono')
  await task1()
  await task2()
  await task3()
  await task4()

  // TODO 1: Implemente aqui o código para executar as tarefas de forma SÍNCRONA
};

const asynchronousExecution = () => {
  console.log ('assincrono')
  task1()
  task2()
  task3()
  task4()
  
  // TODO 2: Implemente aqui o código para executar as tarefas de forma ASSÍNCRONA
};

/*
    TODO 3: Agora esse arquivo deve ter a capacidade de receber parâmetros
    de entrada. 
    
    Caso o parâmetro de entrada seja "sync" e chamará a função synchronousExecution()
    Caso o parâmetro de entrada seja "async" e chamará a função asynchronousExecution()

    Dica: O Node tem uma api nativa para tratar os parâmetros de entrada
    consulte https://nodejs.org/docs/latest/api/process.html


*/

var input=process.argv[2]
if (input === 'sync')
  synchronousExecution()
else 
  asynchronousExecution()

