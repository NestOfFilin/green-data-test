import React from "react";


const AlertNotSelectedWorker = () => (
    <div className="alert alert-primary" role="alert">
        <h4 className="alert-heading">Сотрудник не выбран!</h4>
        Для того, чтобы увидеть всю информацию о сотруднике&nbsp;
        <strong>выберите</strong> сотрудника из списка либо&nbsp;
        <strong>создайте</strong> нового с помощью кнопки
        <strong>"Добавить"</strong>.
    </div>
);

export default AlertNotSelectedWorker;