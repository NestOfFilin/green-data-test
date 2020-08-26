**github-pages:**  [https://nestoffilin.github.io/green-data-test/](https://nestoffilin.github.io/green-data-test/)

### Тестовое задание для Junior developer

Разработать одностраничное приложение с одной экранной формой.

Приложение должно предоставлять интерфейс для редактирования справочника сотрудников компании.

Каждый сотрудник имеет следующий список атрибутов:

Наименование атрибута|Тип значения|Обязательность заполнения
---------------------|------------|-------------------------
ФИО|Строка|:white_check_mark:
Должность|Выбор из справочника (придумать самому)|:white_check_mark:
Дата рождения|Дата, выбор из календаря|:negative_squared_cross_mark:
Пол|Выбор с помощью радио переключателя с двумя значениями|:negative_squared_cross_mark:
Уволен|Булевский атрибут, редактируется с помощью чек бокса|:negative_squared_cross_mark:
_[Дополнительно, не обязательно]_ Коллеги|Выбор из списка сотрудников. С возможностью мульти выбора|:negative_squared_cross_mark:

Интерфейс должен состоять из панели инструментов с кнопками:
* «Добавить нового сотрудника»;
* «Удалить выбранного сотрудника»;

и двух областей:
* Слева список всех сотрудников;
* Справа область для редактирования атрибутов сотрудника, выбранного в левой области.

#### Элементы управления
1. **«Удалить»**
    
    При нажатии на кнопку «Удалить» должно происходить удаление сотрудника, выбранного в левой области. Если ни один сотрудник не выбран, кнопка «Удалить» должна быть неактивной.
2. **«Добавить»**
    
    При нажатии на кнопку «Добавить» в левой области должен добавляться новый сотрудник, новый сотрудник автоматически должен выбираться в списке.
3. **«Список сотрудников»**
    
    Список всех сотрудников, с отображением ФИО, пол, должность, датой рождения и признаком уволен. При клике на элемент списка он должен визуально помечаться как выбранный.
4. **«Карточка сотрудника»**
    
    Область со списком атрибутов и их значений выбранного сотрудника. При редактировании значения атрибута изменения должны автоматически обновляться в списке сотрудников.

#### Стек
При реализации проекта необходимо использовать следующие технологии:
* React
* Любой из менеджеров состояний mobx, redux
* npm в качестве менеджера пакетов.

#### Визуальное оформление
Особых требований к визуальному оформлению не предъявляется. Можно использовать библиотеки визуальных компонентов для ускорения реализации([bootstrap](http://getbootstrap.com/), [material-ui](http://www.material-ui.com/#/) или другие).

#### Результат
Исходный код тестового задания необходимо разместить на github.

Так же необходимо опубликовать работающее приложение на хостинге и предоставить ссылку на github-pages.