import {combineReducers, createStore} from "redux";


let initialState = {
    positions: [
        "Архитектор",
        "Специалист по ВЭД",
        "Спортивный тренер",
        "Дворник",
        "Историк",
        "Бармен",
        "Дипломат",
        "Литейщик",
        "Бондарь",
        "Инструктор по видам спорта"
    ],
    workers: [
        {
            id: 0,
            fullName: "Брагин Натан Глебович",
            position: "Историк",
            dateOfBirth: new Date(),
            isMale: true,
            isFired: false,
            colleagues: []
        },
        {
            id: 1,
            fullName: "Иванкова Ангелина Эльдаровна",
            position: "Дипломат",
            dateOfBirth: new Date(),
            isMale: false,
            isFired: false,
            colleagues: [ 0 ]
        }
    ],
    _nextId: 2,
    _isWorkerId: false,
    selectedWorkerId: 0,
    selectedWorkerIndex: 0,

    AddWorker() {
        let action = AddWorkerActionCreator();
        store.dispatch(action);
    },
    RemoveWorker() {
        let action = RemoveWorkerActionCreator();
        store.dispatch(action);
    },
    SelectWorker(selectedWorkerId) {
        let action = SelectWorkerActionCreator(selectedWorkerId);
        store.dispatch(action);
    },
    UpdateWorkerActions: {
        UpdateFullName(newFullName) {
            let action = UpdateFullNameActionCreator(newFullName);
            store.dispatch(action);
        },
        UpdatePosition(newPosition) {
            let action = UpdatePositionActionCreator(newPosition);
            store.dispatch(action);
        },
        UpdateBirthDate(newDateOfBirth) {
            let action = UpdateBirthDateActionCreator(newDateOfBirth);
            store.dispatch(action);
        },
        UpdateGender(newGender) {
            let action = UpdateGenderActionCreator(newGender);
            store.dispatch(action);
        },
        UpdateFired(isFired) {
            let action = UpdateFiredActionCreator(isFired);
            store.dispatch(action);
        },
        AddColleague(colleagueId) {
            let action = AddColleagueActionCreator(colleagueId);
            store.dispatch(action);
        },
        RemoveColleague(colleagueId) {
            let action = RemoveColleagueActionCreator(colleagueId);
            store.dispatch(action);
        }
    }
};


const SELECT_WORKER = 'SELECT_WORKER';
const ADD_WORKER = 'ADD_WORKER';
const REMOVE_WORKER = 'REMOVE_WORKER';
const UPDATE_FULL_NAME = 'UPDATE_FULL_NAME';
const UPDATE_POSITION = 'UPDATE_POSITION';
const UPDATE_BIRTH_DATE = 'UPDATE_BIRTH_DATE';
const UPDATE_GENDER = 'UPDATE_GENDER';
const UPDATE_FIRED = 'UPDATE_FIRED';
const ADD_COLLEAGUE = 'ADD_COLLEAGUE';
const REMOVE_COLLEAGUE = 'REMOVE_COLLEAGUE';


export const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_WORKER:
            if (action.selectedWorkerId === -1 && state._isWorkerId)
                state._isWorkerId = false;
            else {
                state.selectedWorkerId = action.selectedWorkerId;
                state._isWorkerId = action.selectedWorkerId !== -1;
                if (state.selectedWorkerId !== -1) {
                    state.selectedWorkerIndex = state.workers.findIndex(
                        (element) => element.id === state.selectedWorkerId);
                } else {
                    state.selectedWorkerIndex = -1;
                }
            }
            return state;
        case ADD_WORKER:
            let newWorker = {
                id: state._nextId,
                fullName: "Иванов Иван Иванович",
                position: state.positions[0],
                dateOfBirth: new Date(),
                isMale: true,
                isFired: false,
                colleagues: []
            };
            state._nextId++;
            state.workers.push(newWorker);
            state.selectedWorkerId = newWorker.id;
            state.selectedWorkerIndex = state.workers.length - 1;
            return state;
        case REMOVE_WORKER:
            let removeId = state.selectedWorkerId;
            let workers = state.workers;
            for (let i = 0; i < workers.length; i++) {
                let colleagues = workers[i].colleagues;
                colleagues = colleagues.filter(id => id !== removeId);
                workers[i].colleagues = colleagues;
            }
            workers = workers.filter(worker => worker.id !== removeId);
            state.workers = workers;
            state.selectedWorkerId = -1;
            state.selectedWorkerIndex = -1;
            return state;
        case UPDATE_FULL_NAME:
            state.workers[state.selectedWorkerIndex].fullName = action.newFullName;
            return state;
        case UPDATE_POSITION:
            state.workers[state.selectedWorkerIndex].position = action.newPosition;
            return state;
        case UPDATE_BIRTH_DATE:
            state.workers[state.selectedWorkerIndex].dateOfBirth = action.newDateOfBirth;
            return state;
        case UPDATE_GENDER:
            state.workers[state.selectedWorkerIndex].isMale = action.newGender;
            return state;
        case UPDATE_FIRED:
            state.workers[state.selectedWorkerIndex].isFired = action.isFired;
            return state;
        case ADD_COLLEAGUE:
            state.workers[state.selectedWorkerIndex].colleagues.push(action.colleagueId);
            return state;
        case REMOVE_COLLEAGUE:
            let removeColId = action.colleagueId;
            let colleagues = state.workers[state.selectedWorkerIndex].colleagues;
            colleagues = colleagues.filter(id => id !== removeColId);
            state.workers[state.selectedWorkerIndex].colleagues = colleagues;
            return state;
        default:
            return state;
    }
};


const SelectWorkerActionCreator = (selectedWorkerId) => {
    return {
        type: SELECT_WORKER,
        selectedWorkerId: selectedWorkerId
    };
};

const AddWorkerActionCreator = () => {
    return {
        type: ADD_WORKER
    };
};

const RemoveWorkerActionCreator = () => {
    return {
        type: REMOVE_WORKER
    };
};

const UpdateFullNameActionCreator = (newFullName) => {
    return {
        type: UPDATE_FULL_NAME,
        newFullName: newFullName
    };
};

const UpdatePositionActionCreator = (newPosition) => {
    return {
        type: UPDATE_POSITION,
        newPosition: newPosition
    };
};

const UpdateBirthDateActionCreator = (newDateOfBirth) => {
    return {
        type: UPDATE_BIRTH_DATE,
        newDateOfBirth: newDateOfBirth
    };
};

const UpdateGenderActionCreator = (newGender) => {
    return {
        type: UPDATE_GENDER,
        newGender: newGender
    };
};

const UpdateFiredActionCreator = (isFired) => {
    return {
        type: UPDATE_FIRED,
        isFired: isFired
    };
};

const AddColleagueActionCreator = (colleagueId) => {
    return {
        type: ADD_COLLEAGUE,
        colleagueId: colleagueId
    };
};

const RemoveColleagueActionCreator = (colleagueId) => {
    return {
        type: REMOVE_COLLEAGUE,
        colleagueId: colleagueId
    };
};

let reducers = combineReducers({appState: AppReducer});

let store = createStore(reducers);


export default store;