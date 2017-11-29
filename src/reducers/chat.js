const defaultState = {
    messages: [],
};

export default function reducer(state = defaultState, action) {
    let newState = {};

    switch(action.type) {
        default: {
            newState = Object.assign({}, state);
        }
    };

    return newState;
}