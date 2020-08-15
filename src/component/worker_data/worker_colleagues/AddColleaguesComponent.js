import React, {Fragment} from "react";


const AddColleaguesComponent = ({selectedWorkerId, colleagues, workers, addColleague}) => {
    const onAddColleague = (e) => {addColleague(parseInt(e.target.value))};
    let addColleagueComponent;
    if (workers.length > (colleagues.length + 1)) {
        let notColleaguesList =
            workers.filter(w => (w.id !== selectedWorkerId) && (colleagues.findIndex((el) => el === w.id) === -1));
        notColleaguesList = notColleaguesList.map(worker => (
            <option value={worker.id} key={worker.id}>
                {`${worker.fullName} (${worker.position})`}
            </option>
        ));
        addColleagueComponent = (
            <div className="input-group mt-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelectAddColleague">Добавить:</label>
                </div>
                <select className="custom-select" id="inputGroupSelectAddColleague"
                        value={-1} style={{cursor: "pointer"}}
                        onChange={onAddColleague}
                >
                    <option value={-1} hidden>Выберите соткрудника из списка, чтобы добавить коллегу</option>
                    {notColleaguesList}
                </select>
            </div>
        );
    } else {
        addColleagueComponent = <Fragment/>;
    }
    return addColleagueComponent;
};

export default AddColleaguesComponent;