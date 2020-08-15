import React from "react";


const WorkerFired = ({value, updateFired}) => {
    const onChangeFired = (e) => {updateFired(e.target.value === "true")};
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelectGender">Уволен:</label>
            </div>
            <select
                className="custom-select"
                style={{cursor: "pointer"}}
                id="inputGroupSelectGender"
                onChange={onChangeFired}
                value={value}
            >
                <option value={true}>Да</option>
                <option value={false}>Нет</option>
            </select>
        </div>
    );
};

export default WorkerFired;