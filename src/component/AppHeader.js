import React from "react";


const AppHeader = ({
                       onClickAdd,
                       onClickRemove,
                       isDisabledRemove}) => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
            <div className="navbar-brand">
                GreenData Test
            </div>
            <button
                className="addWorker btn btn-success"
                onClick={() => onClickAdd()}
            >
                Add
            </button>
            <button
                className="removeWorker btn btn-danger"
                onClick={() => onClickRemove()}
                disabled={isDisabledRemove}
            >
                Remove
            </button>
        </nav>
    );
};

export default AppHeader;