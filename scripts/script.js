<html><head><meta name="\&quot;color-scheme\&quot;" content="\&quot;light" dark\"="">
    <style>
        pre {
          content-visibility: auto;
          line-height: 1.2em;
          margin: 0;
        }
    </style>
    </head><body><pre style="width: 181ch; contain-intrinsic-height: 55.2em; content-visibility: visible">'use strict'

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

</pre></body></html>
