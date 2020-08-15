import React from "react";


const WorkerColleaguesItem = ({colleague, removeColleague}) => {
    const onRemoveColleague = (e) => {removeColleague(parseInt(e.target.value, 10))};
    return (
        <li className="list-group-item note">
            <strong>{colleague.fullName}</strong>
            <small>{colleague.position}</small>
            <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                value={colleague.id}
                onClick={onRemoveColleague}>
                &times;
            </button>
        </li>
    );
};

export default WorkerColleaguesItem;