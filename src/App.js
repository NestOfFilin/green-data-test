import React, {Fragment} from 'react';
import AppHeader from "./component/AppHeader";
import AppContainer from "./component/AppContainer";


const App = ({appState}) => {
    return (
        <Fragment>
            <AppHeader
                onClickAdd={appState.AddWorker}
                onClickRemove={appState.RemoveWorker}
                isDisabledRemove={appState.selectedWorkerIndex === -1}
            />
            <AppContainer
                positions={appState.positions}
                workers={appState.workers}
                selectedWorkerIndex={appState.selectedWorkerIndex}
                selectedWorkerId={appState.selectedWorkerId}
                selectWorker={appState.SelectWorker}
                updateWorkerActions={appState.UpdateWorkerActions}
            />
        </Fragment>
    );
};

export default App;