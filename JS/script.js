// Устанавливаем начальное время в секундах (1 час, 59 минут, 0 секунд)
let timeInSeconds = 1 * 60 * 60 + 59 * 60;

// Функция для обновления таймера
function updateTimer() {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;

  // Выводим время на страницу
  const timerElement = document.getElementById('countdown'); // замени 'timer' на ID элемента, где должен отображаться таймер
  timerElement.innerHTML = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // Уменьшаем время на 1 секунду
  timeInSeconds--;

  // Если время истекло (дошло до 0), начинаем отсчет заново
  if (timeInSeconds < 0) {
    timeInSeconds = 1 * 60 * 60 + 59 * 60; // Устанавливаем начальное время заново
  }
}

// Обновляем таймер каждую секунду
const interval2 = setInterval(updateTimer, 1000);

// Вызываем функцию для обновления таймера сразу после загрузки страницы
updateTimer();








const floatingButton = document.querySelector('.floating-button');
const section3 = document.querySelector('.section2');

window.addEventListener('scroll', () => {
  const section3Top = section3.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (section3Top <= windowHeight * 0.5) {
    floatingButton.classList.add('active');
  } else {
    floatingButton.classList.remove('active');
  }
});

floatingButton.addEventListener('click', () => {
  // Вставьте здесь код, который должен выполниться при клике на кнопку
  // Например: alert('Button clicked!');
});



// const floatingButton2 = document.querySelector('.floating-button');
// const footer = document.querySelector('.section7');


// window.addEventListener('scroll', () => {
//   const footerTop = footer.getBoundingClientRect().top;
//   const windowHeight = window.innerHeight;

//   if (footerTop <= windowHeight) {
//     floatingButton2.classList.remove('active');
//   } else {
//     floatingButton2.classList.add('active');
//   }
// });

const floatingButton2 = document.querySelector('.floating-button');
const footer = document.querySelector('.footer');
const section1 = document.querySelector('.section3');

window.addEventListener('scroll', () => {
  const footerTop = footer.getBoundingClientRect().top;
  const section1Top = section1.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (footerTop <= windowHeight || section1Top > windowHeight) {
    floatingButton2.classList.remove('active');
  } else {
    floatingButton2.classList.add('active');
  }
});


// Форма

// document.getElementById('myForm').addEventListener('submit', function(event) {
//   // Получаем поля формы
//   var nameField = document.querySelector('input[name="name"]');
//   var emailField = document.querySelector('input[name="email"]');
//   var telField = document.querySelector('input[name="tel"]');
  
//   // Проверяем, заполнены ли обязательные поля
//   if (nameField.value === '' || emailField.value === '' || telField.value === '') {
//       alert('Будь ласка, заповніть усі обов`язкові поля.');
//       event.preventDefault(); // Останавливаем отправку формы
//   } else {
//       // Получаем данные формы
//       var formData = new FormData(this);
  
//       // Выполняем HTTP-запрос к вашему PHP-скрипту
//       fetch('https://history.shkolakevin.com.ua/process-form.php', {
//           method: 'POST',
//           body: formData
//       })
//       .then(response => response.text())
//       .then(result => {
//           // Выводим результат обработки данных
//           console.log(result);
          
//           // Открываем новую вкладку
//           window.open("https://secure.wayforpay.com/button/b9e287d5e4bf9", "_blank");
//       })
//       .catch(error => {
//           console.error('Ошибка:', error);
//       });
//   }
// });
document.getElementById('myForm').addEventListener('submit', function(event) {
  const form = this;
  let isValid = true;

  form.querySelectorAll('.popup__input').forEach(input => {
      if (!input.value.trim()) {
          isValid = false;
          input.classList.add('invalid');
      } else {
          input.classList.remove('invalid');
      }
  });

  if (!isValid) {
      event.preventDefault();
  }
});


// Смена дати на завтряшнюю

function updateStartDate() {
  var currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);

  var startDateElement = document.getElementById('startDate');
  var options = { day: 'numeric', month: 'long' };
  startDateElement.textContent = currentDate.toLocaleDateString('uk-UA', options);
}

updateStartDate(); // Вызываем функцию для обновления даты при загрузке страницы

// Запускаем функцию для обновления даты каждый день в полночь по местному времени
setInterval(updateStartDate, 24 * 60 * 60 * 1000);

function updateMarathonStartDate() {
  var currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);

  var marathonStartDateElement = document.getElementById('marathonStartDateDynamic');
  var options = { day: 'numeric', month: 'long' };
  var formattedDate = currentDate.toLocaleDateString('uk-UA', options).toUpperCase();
  marathonStartDateElement.textContent = formattedDate;
}

updateMarathonStartDate(); // Вызываем функцию для обновления даты при загрузке страницы

// Запускаем функцию для обновления даты каждый день в полночь по местному времени
setInterval(updateMarathonStartDate, 24 * 60 * 60 * 1000);







