"use strict";

const list = document.querySelectorAll('li'),
  ul = document.querySelector('ul'),
  input = document.querySelector('input'),
  closeBtn = document.querySelectorAll('.close'),
  btn = document.querySelector('.add');

// Скрываем выполнену задачу
list.forEach(li => {
  li.classList.remove('checked');
});


// Вешаем обработчик на кнопку и рендерим новый еелмент
btn.addEventListener('click', () => {
  if (input.value && isNaN(input.value)) {
    const newItem = document.createElement('li');

    newItem.innerHTML = `${input.value}<span class='close'>×</span>`;
    ul.append(newItem);
  } else {
    prompt('ЭЭэ!!!! Напиши хоть что нибуть!!!И не цифры желательно');
  }
  input.value = "";

});


// Удаляем элемент выбраный элемент

ul.addEventListener('click', (e) => {
  if (e.target.classList.contains('close')) {
    e.target.parentElement.remove();
  }
});



// ОТмечаем элемент как выполненый или снимаем галочку
ul.addEventListener('click', (e) => {
  if (e.target.classList.contains('checked')) {
    e.target.classList.remove('checked');
  } else {
    e.target.classList.add('checked');
  }
});





