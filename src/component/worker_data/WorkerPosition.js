import React from "react";


const WorkerPosition = ({value, positions, updatePosition}) => {
    const onChangePosition = (e) => {updatePosition(positions[e.target.value])};
    let positionsList = [];
    let selectedValue;
    for(let i = 0; i < positions.length; i++) {
        const isSelected = value === positions[i];
        if (isSelected) selectedValue = i;
        positionsList.push(
            <option value={i} key={i}>
                {positions[i]}
            </option>
        );
    }
    return(
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelectPosition">Должность:</label>
            </div>
            <select className="custom-select" id="inputGroupSelectPosition"
                    style={{cursor: "pointer"}}
                    onChange={onChangePosition} value={selectedValue}
            >
                {positionsList}
            </select>
        </div>
    );
};

export default WorkerPosition;