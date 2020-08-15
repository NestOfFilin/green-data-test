import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const WorkerBirthDate = ({value, updateBirthDate}) => {
    const onChangeBirthDate = (date) => { updateBirthDate(date)};
    const InputForDatePicker = ({ value, onClick }) => (
        <input type="text" className="form-control bg-light"
               style={{cursor: "pointer"}} value={value} readOnly onClick={onClick}/>
    );
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Дата рождения:</span>
            </div>
            <DatePicker
                selected={value}
                customInput={<InputForDatePicker />}
                onChange={onChangeBirthDate}
            />
        </div>
    );
};

export default WorkerBirthDate;