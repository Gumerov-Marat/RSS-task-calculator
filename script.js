// функкции которые есть в калькуляторе
/*
  
  функция нажатия на кнопки операции
  функция добавления десятичной точки
  функция очиски экрана
  функция What do (что калькулятор умеет)

 */

let numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operator'),
    decimalBtn = document.getElementById('decimal'),
    clearBtns = document.querySelectorAll('.clear-btn'),
    resultBtn = document.getElementById('result');

  for (let i = 0; i < numbers.length; i++) {
      let number = numbers[i];
      number.addEventListener('click', function(e){
        numberPress(e.target.textContent);
      });
  };

  for (let i = 0; i < operations.length; i++) {
    let operationBtn = operations[i];
    operationBtn.addEventListener('click', function(e){
      operation(e.target.textContent); // Добрались до текста в теге
    });
  };

   for (let i = 0; i < clearBtns.length; i++) {
     let clearBtn = clearBtns[i];
     clearBtn.addEventListener('click', function (e){
      clear(e.target.id);                  //  ПРАВИЛЬНОЕ ИСПОЛЬЗОВАНИЕ!!! Добрались до id
      console.log(`Клик по кнопке СЕ бтн`);
     });
   };

  resultBtn.addEventListener('click', result);

  decimalBtn.addEventListener('click', decimal);




 // функция нажатия кнопки с номерами
 function numberPress(number) {
  console.log(`клик по пнокпке с номером ${number}`);
 }

 // Функция оперций
function operation(symbol) {
  console.log(`Клик по кнопке с операцией ${symbol}`);
}

// функция добавления точки
function decimal() {
   console.log(`клик по кнопке .`);
}

// функция очистки экрана
function clear(id) {
  console.log(`клик по кнопке  = ${id}`);
  
}

// ФУнкция - что калькулятор умеет
function result(params) {
  console.log(`ресулт`);
  
}