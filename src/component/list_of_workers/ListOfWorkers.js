import React from "react";
import WorkerItem from "./WorkerItem";


const ListOfWorkers = ({workers, selectedWorkerId, selectWorker}) => {
    const workerItems = workers.map((worker) => (
        <WorkerItem worker={worker} key={worker.id}
                    selectedWorkerId={selectedWorkerId}
                    selectWorker={selectWorker}
        />
    ));
    return (
        <div className="listOfWorkers">
            <div className="list-group">
                {workerItems}
            </div>
        </div>
    );
};

export default ListOfWorkers;