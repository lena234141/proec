<html><head><meta name="\&quot;color-scheme\&quot;" content="\&quot;light" dark\"="">
    <style>
        pre {
          content-visibility: auto;
          line-height: 1.2em;
          margin: 0;
        }
    </style>
    </head><body><pre style="width: 181ch; contain-intrinsic-height: 242.4em; content-visibility: visible">'use strict'

document.addEventListener("DOMContentLoaded", () =&gt; {
});
// Алгоритм: показать кнопку "Наверх", когда пользователь проскроллил вниз больше 300px
// Ссылка на блок-схему: ./scripts/scroll_button_flowchart.png

// 1. Получаем элемент кнопки
const scrollTopBtn = document.getElementById("scrollTopBtn");

// 2. Создаём обработчик события прокрутки
window.addEventListener("scroll", () =&gt; {
    // 3. Проверка, сколько проскроллено
    if (window.scrollY &gt; 300) {
        scrollTopBtn.style.display = "block"; // показать кнопку
    } else {
        scrollTopBtn.style.display = "none"; // скрыть кнопку
    }

    // Проверка работы в консоли
    console.log("scrollY:", window.scrollY);
});

scrollTopBtn.addEventListener("click", () =&gt; {
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
    *       4.2. Проверка условия: если scrollY &gt; 300
    *           4.2.1. Да: отображаем кнопку (меняем стиль display на "block").
    *           4.2.2. Нет: скрываем кнопку (меняем стиль display на "none").
    *   5. Конец.
    * Блок-схема: /images/block-schema.png
*/

 /* 5. Появление форм */

 const loginHeaderButton = document.querySelector('.header__login');
 const dialogLayout = document.querySelector('.dialog');
 
 if (loginHeaderButton &amp;&amp; dialogLayout) {
     const popups = dialogLayout.querySelectorAll('.popup');
     const closeDialogButtons = dialogLayout.querySelectorAll('.popup__close');
 
     const selectPopup = document.getElementById('popup-select');
     const loginPopup = document.getElementById('popup-login');
     const registrationPopup = document.getElementById('popup-registration');
 
     const switchToRegister = dialogLayout.querySelectorAll('[data-registration]');
     const switchToLogin = dialogLayout.querySelectorAll('[data-login]');
 
     function showPopup(popup) {
         popups.forEach(p =&gt; p.style.display = 'none');
         popup.style.display = 'block';
         dialogLayout.style.display = 'flex';
     }
 
     loginHeaderButton.addEventListener('click', () =&gt; {
         showPopup(selectPopup);
     });
 
     closeDialogButtons.forEach(button =&gt; {
         button.addEventListener('click', () =&gt; {
             dialogLayout.style.display = 'none';
         });
     });
 
     window.addEventListener('click', (event) =&gt; {
         if (event.target === dialogLayout) {
             dialogLayout.style.display = 'none';
         }
     });
 
     switchToRegister.forEach(button =&gt; {
         button.addEventListener('click', () =&gt; {
             showPopup(registrationPopup);
         });
     });
 
     switchToLogin.forEach(button =&gt; {
         button.addEventListener('click', () =&gt; {
             showPopup(loginPopup);
         });
     });
 }
document.addEventListener("DOMContentLoaded", () =&gt; {
    // --- Обновление имён преподавателей ---
    const cardsContainer = document.querySelector(".teachers");

    if (cardsContainer) {
        const dataTitleCards = [
            "Ирина Васильевна",
            "Марина Олеговна",
            "Олег Алексеевич"
        ];

        const titleCards = cardsContainer.querySelectorAll(".teachers__name");

        titleCards.forEach((item, index) =&gt; {
            if (index &lt; dataTitleCards.length) {
                item.textContent = dataTitleCards[index];
            }
        });
    }

    // --- Добавление карточек курсов, если их нет ---
    const courseList = document.querySelector(".course__list");

    const createCourseCard = (icon, title, description) =&gt; {
        return `
            &lt;li class="course__item"&gt;
                &lt;img class="course__icon" src="${icon}" alt="Иконка курса" width="22" height="23"&gt;
                &lt;h3 class="course__title"&gt;${title}&lt;/h3&gt;
                &lt;p class="course__description"&gt;${description}&lt;/p&gt;
            &lt;/li&gt;
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
        }
    };

    if (courseList &amp;&amp; courseList.children.length === 0) {
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

    const createLink = (url, title, isActive = false) =&gt; {
        return `
            &lt;li class="header__item${isActive ? ' header__item--active' : ''}"&gt;
                &lt;a class="header__link" href="${url}"&gt;${title}&lt;/a&gt;
            &lt;/li&gt;
        `;
    };

    headerList.innerHTML = "";

    menuData.forEach(item =&gt; {
        const linkHTML = createLink(item.link, item.title, item.active);
        headerList.insertAdjacentHTML('beforeend', linkHTML);
    });
}
</pre></body></html>
