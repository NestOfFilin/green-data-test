import React from "react";
import WorkerFullName from "./WorkerFullName";
import WorkerPosition from "./WorkerPosition";
import WorkerBirthDate from "./WorkerDateOfBirth";
import WorkerGender from "./WorkerGender";
import WorkerFired from "./WorkerFired";
import WorkerColleagues from "./worker_colleagues/WorkerColleagues";


const WorkerData = ({worker, positions, workers, updateWorkerActions}) => {
    return (
        <div className="workerData">
            <div className="card border-primary mb-3" style={{Width: "18rem"}}>
                <div className="card-header text-center text-white bg-primary">
                    Данные о сотруднике
                </div>
                <div className="card-body">
                    <WorkerFullName
                        value={worker.fullName}
                        updateFullName={updateWorkerActions.UpdateFullName}
                    />
                    <WorkerPosition
                        value={worker.position}
                        positions={positions}
                        updatePosition={updateWorkerActions.UpdatePosition}
                    />
                    <WorkerBirthDate
                        value={worker.dateOfBirth}
                        updateBirthDate={updateWorkerActions.UpdateBirthDate}
                    />
                    <WorkerGender
                        value={worker.isMale}
                        updateGender={updateWorkerActions.UpdateGender}
                    />
                    <WorkerFired
                        value={worker.isFired}
                        updateFired={updateWorkerActions.UpdateFired}
                    />
                    <WorkerColleagues
                        selectedWorkerId={worker.id}
                        colleagues={worker.colleagues}
                        workers={workers}
                        addColleague={updateWorkerActions.AddColleague}
                        removeColleague={updateWorkerActions.RemoveColleague}
                    />
                </div>
            </div>
        </div>
    );
};

export default WorkerData;