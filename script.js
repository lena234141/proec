
'use strict'
console.log("JavaScript подключен");

// Preloader страницы
window.addEventListener("load", () => {
    setTimeout(() => {
        const preloader = document.querySelector(".preloader");
        const content = document.querySelector(".content");

        if (preloader && content) {
            preloader.style.display = "none";
            content.style.display = "block";
        }
    }, 1500); // 1.5 секунды
});

document.addEventListener("DOMContentLoaded", () => {
});
// Алгоритм: показать кнопку "Наверх", когда пользователь проскроллил вниз больше 300px
// Ссылка на блок-схему: ./scripts/scroll_button_flowchart.png

// 1. Получаем элемент кнопки
const scrollTopBtn = document.getElementById("scrollTopBtn");

// 2. Создаём обработчик события прокрутки
window.addEventListener("scroll", () => {
    // 3. Проверка, сколько проскроллено
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block"; // показать кнопку
    } else {
        scrollTopBtn.style.display = "none"; // скрыть кнопку
    }

    // Проверка работы в консоли
    console.log("scrollY:", window.scrollY);
});

scrollTopBtn.addEventListener("click", () => {
    // Плавная прокрутка страницы к верху
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
/*
    *   Алгоритм появления кнопки "Наверх"
    *
    *   1. Начало.
    *   2. Получаем элемент кнопки (переменная, не будет меняться).
    *   3. Навешиваем слушатель события на scroll страницы.
    *   4. При срабатывании события scroll:
    *       4.1. Получаем текущее значение прокрутки страницы (scrollY) — переменная, которая будет меняться.
    *       4.2. Проверка условия: если scrollY > 300
    *           4.2.1. Да: отображаем кнопку (меняем стиль display на "block").
    *           4.2.2. Нет: скрываем кнопку (меняем стиль display на "none").
    *   5. Конец.
    * Блок-схема: https://app.diagrams.net/
*/

 /* 5. Появление форм */
 // Получаем элементы
 const loginHeaderButton = document.querySelector('.header__login');
 const dialogLayout = document.querySelector('.dialog');
 
 if (loginHeaderButton && dialogLayout) {
     const popups = dialogLayout.querySelectorAll('.popup');
     const closeDialogButtons = dialogLayout.querySelectorAll('.popup__close');
 
     const selectPopup = document.getElementById('popup-select');
     const loginPopup = document.getElementById('popup-login');
     const registrationPopup = document.getElementById('popup-registration');
 
     const switchToRegister = dialogLayout.querySelectorAll('[data-registration]');
     const switchToLogin = dialogLayout.querySelectorAll('[data-login]');
 
     function showPopup(popup) {
         popups.forEach(p => p.style.display = 'none');
         popup.style.display = 'block';
         dialogLayout.style.display = 'flex';
     }
 
     loginHeaderButton.addEventListener('click', () => {
         showPopup(selectPopup);
     });
 
     closeDialogButtons.forEach(button => {
         button.addEventListener('click', () => {
             dialogLayout.style.display = 'none';
         });
     });
 
     window.addEventListener('click', (event) => {
         if (event.target === dialogLayout) {
             dialogLayout.style.display = 'none';
         }
     });
 
     switchToRegister.forEach(button => {
         button.addEventListener('click', () => {
             showPopup(registrationPopup);
         });
     });
 
     switchToLogin.forEach(button => {
         button.addEventListener('click', () => {
             showPopup(loginPopup);
         });
     });
 }
document.addEventListener("DOMContentLoaded", () => {
    // --- Обновление имён преподавателей ---
    const cardsContainer = document.querySelector(".teachers");

    if (cardsContainer) {
        const dataTitleCards = [
            "Ирина Васильевна",
            "Марина Олеговна",
            "Олег Алексеевич"
        ];

        const titleCards = cardsContainer.querySelectorAll(".teachers__name");

        titleCards.forEach((item, index) => {
            if (index < dataTitleCards.length) {
                item.textContent = dataTitleCards[index];
            }
        });
    }

    // --- Добавление карточек курсов, если их нет ---
    const courseList = document.querySelector(".course__list");

    const createCourseCard = (icon, title, description) => {
        return `
            <li class="course__item">
                <img class="course__icon" src="${icon}" alt="Иконка курса" width="22" height="23">
                <h3 class="course__title">${title}</h3>
                <p class="course__description">${description}</p>
            </li>
        `;
    };

    const coursesData = {
        beginner: {
            icon: "images/9b605c6786c413734ddc967a20da263e.jpg",
            title: "Курс для Начинающих",
            description: "Наш курс для начинающих поможет вам освоить базовые знания в математике"
        },
        advanced: {
            icon: "images/девушка-сту-ента-изучая-на-шко-е-37772013.png",
            title: "Продвинутый Курс",
            description: "Продвинутый курс предназначен для тех, кто хочет углубить свои знания"
        },
        exams: {
            icon: "images/exams4.jpg",
            title: "Подготовка к Экзаменам",
            description: "Специальный курс для подготовки к ЕГЭ и ОГЭ"
        },
            };

    if (courseList && courseList.children.length === 0) {
        for (const key in coursesData) {
            const course = coursesData[key];
            const courseCard = createCourseCard(course.icon, course.title, course.description);
            courseList.insertAdjacentHTML("beforeend", courseCard);
        }
    } else {
        console.log("Курсы уже есть в HTML. JS ничего не добавляет.");
    }
});
const headerMenu = document.querySelector('.header__nav');

if (headerMenu) {
    const headerList = headerMenu.querySelector('.header__list');

    // Массив данных для меню
    const menuData = [
        {
            link: "index.html",
            title: "Главная",
            active: true
        },
        {
            link: "#course",
            title: "Курсы"
        },
        {
            link: "#teachers",
            title: "Преподаватели"
        },
        {
            link: "#contacts",
            title: "Контакты"
        }
    ];

    const createLink = (url, title, isActive = false) => {
        return `
            <li class="header__item${isActive ? ' header__item--active' : ''}">
                <a class="header__link" href="${url}">${title}</a>
            </li>
        `;
    };

    headerList.innerHTML = "";

    menuData.forEach(item => {
        const linkHTML = createLink(item.link, item.title, item.active);
        headerList.insertAdjacentHTML('beforeend', linkHTML);
    });
}
// 7 лекция
const swiper = new Swiper('.mySwiper', {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      // адаптив
      768: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 1,
      }
    }
  });
  // Карусель (слайдер)
  const slider = document.querySelector('.swiper');

  if (slider) {
      const swiper = new Swiper(slider, {
          // Дополнительные параметры
          slidesPerView: 4, // Количество слайдов на экране
          spaceBetween: 30, // Расстояние между слайдами
          loop: true,  // Зацикливание слайдов

          // Пагинация
          pagination: {
              el: '.swiper-pagination',
          },

          // Навигационные стрелки
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          },
      });
  }
// 7 лекция
registrationPopup.addEventListener('submit', event => {
    event.preventDefault(); // Предотвращаем отправку формы

    const username = registrationPopup.querySelector('#username').value;
    const login = registrationPopup.querySelector('#login').value;
    const email = registrationPopup.querySelector('#email').value;
    const password = registrationPopup.querySelector('#password').value;
    const confirmPassword = registrationPopup.querySelector('#confirm-password').value;

    const errorMessage = registrationPopup.querySelector('#error-message');

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Пароли не совпадают';
        errorMessage.style.color = 'red';
        return;
    }

    if (username.length < 3) {
        errorMessage.textContent = 'Имя пользователя должно содержать не менее 3 символов';
        return;
    }

    if (password.length < 8) {
        errorMessage.textContent = 'Пароль должен содержать не менее 8 символов';
        return;
    }

    // Сообщение об успехе
    errorMessage.textContent = 'Регистрация прошла успешно!';
    errorMessage.style.color = 'green';

    // Сохраняем данные
    localStorage.setItem("username", username);
    localStorage.setItem("login", login);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password); // ❗По желанию

    // Очистка формы
    document.getElementById('registration-form').reset();
});

window.addEventListener('DOMContentLoaded', () => {
    const regForm = document.getElementById('registration-form');

    if (regForm) {
        const username = localStorage.getItem('username');
        const login = localStorage.getItem('login');
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');

        if (username) regForm.querySelector('#username').value = username;
        if (login) regForm.querySelector('#login').value = login;
        if (email) regForm.querySelector('#email').value = email;
        if (password) {
            regForm.querySelector('#password').value = password;
            regForm.querySelector('#confirm-password').value = password;
        }
    }
});
registrationPopup.addEventListener('submit', event => {
    event.preventDefault();
    // обработка формы
});
  
// Загрузка данных с сервера
fetch(apiUrl)
.then(response => response.json())
.then(data => {
    console.log(data); // Данные
    console.log(typeof (data)); // Тип полученных данных

    // for (const item in data) {
    //     const card = data[item];

    //     const cardElement = createCard(card.link, card.icon, card.iconAlt, card.iconWidth, card.iconHeight, card.title, card.description);
    //     cardList.insertAdjacentHTML('beforeend', cardElement);
    // }

    data.forEach(item => {
        const cardElement = createCard(item.link, item.icon, item.iconAlt, item.iconWidth, item.iconHeight, item.title, item.description);
        cardList.insertAdjacentHTML('beforeend', cardElement);
    });
})
.catch(error => {
    console.error('Ошибка при загрузке данных:', error);
});

