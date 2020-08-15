import React from "react";


const WorkerGender = ({value, updateGender}) => {
    const onChangeGender = (e) => {updateGender(e.target.value === "true")};
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelectGender">Пол:</label>
            </div>
            <select
                className="custom-select"
                style={{cursor: "pointer"}}
                id="inputGroupSelectGender"
                onChange={onChangeGender} value={value}
            >
                <option value={true}>Мужской</option>
                <option value={false}>Женский</option>
            </select>
        </div>
    );
};

export default WorkerGender;