import ListOfWorkers from "./list_of_workers/ListOfWorkers";
import WorkerData from "./worker_data/WorkerData";
import React from "react";
import AlertNotSelectedWorker from "./AlertNotSelectedWorker";


const AppContainer = ({
                          positions,
                          workers,
                          selectedWorkerIndex,
                          selectedWorkerId,
                          selectWorker,
                          updateWorkerActions}) => {
    let workerDescription;
    if (selectedWorkerId === -1) {
        workerDescription = <AlertNotSelectedWorker/>;
    } else {
        const worker = workers[selectedWorkerIndex];
        workerDescription = (
            <WorkerData
                worker={worker}
                positions={positions}
                workers={workers}
                updateWorkerActions={updateWorkerActions}
            />
        );
    }

    return (
        <div className="app-container row">
            <div className="col-sm"
                 onClick={() => selectWorker(-1)}
            >
                <ListOfWorkers
                    workers={workers}
                    selectedWorkerId={selectedWorkerId}
                    selectWorker={selectWorker}
                />
            </div>
            <div className="col-sm">
                {workerDescription}
            </div>
        </div>
    );
};

export default AppContainer;