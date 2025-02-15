//  Задание 1  ---------------------------------------------------------

// Смотрите в html коде тэг "button"


//  Задание 2  ---------------------------------------------------------

// создаем обработчик событии для кнопки с идентификатором "jsButton"
jsButton.addEventListener("click", ()=> {
    console.log('Событие обработано через JS')
})
// Обратите внимание на то, что мы не создавали переменной для "jsButton"
// Это произошло автоматически при обработке html документа. Все элементы
// с идентификаторами доступны сразу в JavaScript файле


//  Задание 3  ---------------------------------------------------------

// Обработчик события для клика на элементе
myDiv.addEventListener("click", ()=> {
    myDiv.style.backgroundColor = "blue"
})
// Обработчик события при наведении на элемент 
myDiv.addEventListener("mouseover", ()=> {
    console.log('Элемент нажат')
})


//  Задание 4  ---------------------------------------------------------

// Ниже обработчик событии, который будет выводить в консоль значение, 
// введенное в поле input, при каждом нажатии клавиши
textInput.addEventListener("keydown", event => {
    console.log(`Введенное значение: ${event.target.value}`)
})


//  Задание 5  ---------------------------------------------------------

myLink.addEventListener("click", event => {
    event.preventDefault();
    // Данный метод предотвращает выполнение события, которое должно 
    // сработать по умолчанию. В данном случае мы отменяем переход по ссылке
    console.log("Переход по ссылке отменен");
})


//  Задание 6  ---------------------------------------------------------

// Ниже обработчик событии который выводит текст внутри дочерних тэгов "li"
list.addEventListener('click', event => {
    if (event.target.matches('li')) console.log(event.target.textContent)
})
// В этом примере мы проверяем что именно было кликнуто перед тем как выводить сообщение
// Для проверки в список был добавлен абзац. При клике на абзац ничего не происходит



//  Задание 7  ---------------------------------------------------------
 
// Ниже обработчик событии который выводит в консоль код нажатой клавиши
keyboardInput.addEventListener('keydown', event => {
    console.log(`Клавиша: ${event.key}, код клавиши: ${event.keyCode}`);
})
