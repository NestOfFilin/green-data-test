import React, {Fragment} from "react";


const WorkerItem = ({worker, selectedWorkerId, selectWorker}) => {
    const onSelectWorker = () => selectWorker(worker.id);
    const workerFullName = worker.fullName;
    const workerPosition = worker.position;

    const dateOfBirth = worker.dateOfBirth;
    const workerDateOfBirth = "Дата рождения: " +
        (dateOfBirth.getDate() < 10 ? "0" : "") + dateOfBirth.getDate() + "." +
        (dateOfBirth.getMonth() < 10 ? "0" : "") + dateOfBirth.getMonth() + "." +
        dateOfBirth.getFullYear();
    const workerIsMale = "Пол: " + (worker.isMale ? "Мужской" : "Женский");
    const workerIsFiredJSX = (worker.isFired ? (<small>Уволен</small>) : <Fragment/>);
    return (
        <button type="button"
                onClick={onSelectWorker}
                className={`list-group-item list-group-item-action ${selectedWorkerId === worker.id ? "active" : ""}`}
        >
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{workerFullName}</h5>
                <small>{workerPosition}</small>
            </div>
            <p className="mb-1">
                {workerDateOfBirth} <br/>
                {workerIsMale} <br/>
            </p>
            {workerIsFiredJSX}
        </button>
    );
};

export default WorkerItem;