import React from "react";
import WorkerColleaguesList from "./WorkerColleaguesList";
import AddColleaguesComponent from "./AddColleaguesComponent";


const WorkerColleagues = ({selectedWorkerId, colleagues, workers, addColleague, removeColleague}) => {
    return (
        <div className="card mb-3" style={{Width: "18rem"}}>
            <div className="card-header text-center">
                Коллеги
            </div>
            <div className="card-body">
                <WorkerColleaguesList
                    colleagues={colleagues}
                    workers={workers}
                    removeColleague={removeColleague}
                />
                <AddColleaguesComponent
                    selectedWorkerId={selectedWorkerId}
                    colleagues={colleagues}
                    workers={workers}
                    addColleague={addColleague}
                />
            </div>
        </div>
    );
};

export default WorkerColleagues;