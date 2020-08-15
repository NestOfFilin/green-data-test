import React from "react";


const WorkerFullName = ({value, updateFullName}) => {
    const onChangeFullName = (e) => {updateFullName(e.target.value)};
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">ФИО:</span>
            </div>
            <input
                type="text"
                className="form-control"
                value={value}
                onChange={onChangeFullName}
            />
        </div>
    );
};

export default WorkerFullName;