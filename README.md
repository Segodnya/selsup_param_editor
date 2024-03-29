# Редактор параметров товара

Это приложение на React предоставляет возможность редактирования структуры параметров товара путем изменения значений. Параметры товара выводятся все сразу и доступны для редактирования. Введенные значения параметров сохраняются в форме редактирования, также можно получить полную структуру товара с отредактированными значениями параметров.

## Стек

React + TypeScript + Vite

## Github Pages

https://segodnya.github.io/selsup_param_editor/

## Установка и запуск

Склонируйте репозиторий на свой компьютер:

`git clone https://github.com/Segodnya/selsup_param_editor.git`

Перейдите в папку проекта:

`cd selsup_param_editor`

Установите зависимости:

`npm install`

Запустите приложение:

`npm run dev`

Приложение будет доступно по адресу http://localhost:5173/.

## Использование

Приложение состоит из двух компонентов: ParamEditor и App.

### Компонент ParamEditor

ParamEditor является классовым компонентом, который отображает параметры товара и форму редактирования.

Props:

- params: Массив объектов типа Param, описывающих параметры товара.
- model: Объект типа Model, содержащий значения параметров товара.

Методы:

- handleParamChange(paramId, value): Обработчик изменения значения параметра. Принимает paramId - идентификатор параметра и value - новое значение параметра.
- getModel(): Метод возвращает полную структуру Model с отредактированными значениями параметров.

### Компонент App

App является корневым компонентом приложения. В нем заданы дефолтные параметры товара и модель с заданными значениями параметров. Вы можете изменять эти значения или добавлять новые в соответствии с вашими потребностями.

## Расширение функциональности

Приложение легко расширяемо и позволяет добавлять новые типы параметров, не только текстовые. Для этого вам потребуется внести следующие изменения:

- В интерфейсе Param измените поле type на соответствующий тип параметра.
- В компоненте ParamEditor добавьте новые элементы формы, соответствующие новым типам параметров.
- Обновите методы handleParamChange и getModel в соответствии с новой логикой обработки параметров.
- Измените дефолтные параметры товара и модель с учетом новых типов параметров.
- Теперь вы можете добавлять новые типы параметров, такие как числовые или со списком значений, и редактировать их значения в приложении.

## Contributing

Если у вас есть предложения по улучшению приложения, пожалуйста, создайте новый Issue или отправьте Pull Request.

## License

Это приложение распространяется под лицензией MIT.
