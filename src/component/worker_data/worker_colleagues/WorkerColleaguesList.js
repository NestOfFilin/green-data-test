import React from "react";
import WorkerColleaguesItem from "./WorkerColleaguesItem";


const WorkerColleaguesList = ({colleagues, workers, removeColleague}) => {
    let workerColleaguesList;
    if (colleagues.length === 0) {
        workerColleaguesList = (
            <div className="alert alert-primary" role="alert">
                <h5 className="alert-heading text-center">У этого сотрудника нет коллег!</h5>
            </div>
        );
    } else {
        let colleaguesJSX = [];
        for (let i = 0; i < colleagues.length; i++) {
            let colleague = workers.find((element) => colleagues[i] === element.id);
            colleaguesJSX.push(
                <WorkerColleaguesItem colleague={colleague} removeColleague={removeColleague}/>
            );
        }
        workerColleaguesList = (
            <ul className="list-group">
                {colleaguesJSX}
            </ul>
        );
    }
    return workerColleaguesList;
};

export default WorkerColleaguesList;