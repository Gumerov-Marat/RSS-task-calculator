window.onload = function () {
  let numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operator'),
    decimalBtn = document.getElementById('decimal'),
    clearBtns = document.querySelectorAll('.clear-btn'),
    resultBtn = document.getElementById('result'),
    display = document.getElementById('display'),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPebdingOperation = '';

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener('click', function (e) {
      numberPress(e.target.textContent);
    });
  };

  for (let i = 0; i < operations.length; i++) {
    let operationBtn = operations[i];
    operationBtn.addEventListener('click', function (e) {
      operation(e.target.textContent); // Добрались до текста в теге
    });
  };

  for (let i = 0; i < clearBtns.length; i++) {
    let clearBtn = clearBtns[i];
    clearBtn.addEventListener('click', function (e) {
      clear(e.target.id); //  ПРАВИЛЬНОЕ ИСПОЛЬЗОВАНИЕ!!! Добрались до id
      console.log(`Клик по кнопке СЕ бтн`);
    });
  };

  resultBtn.addEventListener('click', result);

  decimalBtn.addEventListener('click', decimal);




  // функция нажатия кнопки с номерами
  function numberPress(number) {
    if (MemoryNewNumber) {
      display.value = number;
      MemoryNewNumber = false;
    } else {
      display.value === '0' ? display.value = number :
        display.value += number
    }

  };

  // Функция операций
  function operation(op) {

    let LocalOperationMemory = display.value;

    if (MemoryNewNumber && MemoryPebdingOperation !== '=') {
      display.value = parseFloat(memoryCurrentNumber);
    } else {
      MemoryNewNumber = true;
      if (MemoryPebdingOperation === '+') {
        MemoryCurrentNumber += parseFloat(LocalOperationMemory);
      } else if (MemoryPebdingOperation === '-') {
        MemoryCurrentNumber -= parseFloat(LocalOperationMemory);
      } else if (MemoryPebdingOperation === '*') {
        MemoryCurrentNumber *= parseFloat(LocalOperationMemory);
      } else if (MemoryPebdingOperation === '/') {
        MemoryCurrentNumber /= parseFloat(LocalOperationMemory);
      } else {
        MemoryCurrentNumber = parseFloat(LocalOperationMemory);
      };

      display.value = MemoryCurrentNumber;
      MemoryPebdingOperation = op;
    };
  };

  // функция добавления точки
  function decimal(argument) {
    let LocalDecimalMemory = display.value;

    if (MemoryNewNumber) {
      LocalDecimalMemory = '0.';
      MemoryNewNumber = false;
    } else {
      if (LocalDecimalMemory.indexOf('.') === -1) {
        LocalDecimalMemory += '.';
      };
    };
    display.value = LocalDecimalMemory;
  };

  // функция очистки экрана
  function clear(id) {

    if (id === 'ce') {
      display.value = '0';
      MemoryNewNumber = true;
    } else if (id === 'c') {
      display.value = '0';
      MemoryNewNumber = true;
      MemoryCurrentNumber = 0;
      MemoryPebdingOperation = '';
    };
  };
};